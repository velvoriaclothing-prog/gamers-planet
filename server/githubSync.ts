import fs from 'fs';
import path from 'path';

export interface GitHubConfig {
  token: string;
  repo: string; // e.g. "octocat/hello-world"
  branch?: string;
  folder?: string;
}

export interface GitHubTestResult {
  success: boolean;
  message: string;
  repoName?: string;
  owner?: string;
  isPrivate?: boolean;
  defaultBranch?: string;
}

export interface GitHubUploadResult {
  success: boolean;
  rawUrl?: string;
  cdnUrl?: string;
  githubPath?: string;
  sha?: string;
  message?: string;
}

export interface GitHubBatchSyncResult {
  success: boolean;
  totalFound: number;
  syncedCount: number;
  skippedCount: number;
  errors: string[];
  files: Array<{ filename: string; url: string; size: number }>;
}

/**
 * Clean and parse "owner/repo" or full GitHub URL into owner and repo names.
 */
export function parseGitHubRepo(repoInput: string): { owner: string; repo: string } | null {
  if (!repoInput) return null;
  const clean = repoInput
    .trim()
    .replace(/^https?:\/\/github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/\/$/, '');

  const parts = clean.split('/');
  if (parts.length >= 2 && parts[0] && parts[1]) {
    return { owner: parts[0], repo: parts[1] };
  }
  return null;
}

/**
 * Test connectivity and token authorization to a GitHub repository.
 */
export async function testGitHubConnection(config: GitHubConfig): Promise<GitHubTestResult> {
  const parsed = parseGitHubRepo(config.repo);
  if (!parsed) {
    return {
      success: false,
      message: 'Invalid repository format. Please enter as "username/repository" (e.g. "velvoria/gamersplanet-assets").'
    };
  }

  const token = config.token?.trim();
  if (!token) {
    return {
      success: false,
      message: 'GitHub Personal Access Token is required.'
    };
  }

  try {
    const url = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'GamersPlanet-Vault-Storage/1.0',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (res.status === 401) {
      return {
        success: false,
        message: 'Unauthorized. The token is invalid, expired, or missing required scopes.'
      };
    }

    if (res.status === 404) {
      return {
        success: false,
        message: `Repository "${parsed.owner}/${parsed.repo}" was not found or the token does not have access to it.`
      };
    }

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      return {
        success: false,
        message: `GitHub API error (${res.status}): ${(errBody as any).message || res.statusText}`
      };
    }

    const data = await res.json() as any;
    return {
      success: true,
      message: `Connected successfully to GitHub repository "${data.full_name}"!`,
      repoName: data.name,
      owner: data.owner?.login,
      isPrivate: data.private,
      defaultBranch: data.default_branch
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Connection failed: ${err.message || 'Network error'}`
    };
  }
}

/**
 * Upload or commit a local file to the GitHub repository.
 */
export async function uploadFileToGitHub(
  localFilePath: string,
  targetRelativePath: string,
  config: GitHubConfig
): Promise<GitHubUploadResult> {
  const parsed = parseGitHubRepo(config.repo);
  if (!parsed) {
    return { success: false, message: 'Invalid repository format' };
  }

  const token = config.token?.trim();
  if (!token) {
    return { success: false, message: 'GitHub token not configured' };
  }

  if (!fs.existsSync(localFilePath)) {
    return { success: false, message: `Local file not found: ${localFilePath}` };
  }

  const branch = config.branch?.trim() || 'main';
  const folder = (config.folder || 'uploads').replace(/^\/+|\/+$/g, '');
  const cleanTarget = targetRelativePath.replace(/^\/+/, '');
  const fullPathInRepo = `${folder}/${cleanTarget}`;

  try {
    const fileBuffer = fs.readFileSync(localFilePath);
    const base64Content = fileBuffer.toString('base64');
    const filename = path.basename(localFilePath);

    // Check if file already exists in repo to obtain its sha for updating
    let existingSha: string | undefined;
    const checkUrl = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/contents/${fullPathInRepo}?ref=${branch}`;
    try {
      const checkRes = await fetch(checkUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'GamersPlanet-Vault-Storage/1.0'
        }
      });
      if (checkRes.ok) {
        const existingData = await checkRes.json() as any;
        existingSha = existingData.sha;
      }
    } catch {
      // If check fails, proceed without sha
    }

    // Commit file via GitHub API
    const putUrl = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/contents/${fullPathInRepo}`;
    const payload: any = {
      message: `Upload media asset: ${filename} via Gamers Planet Admin`,
      content: base64Content,
      branch
    };

    if (existingSha) {
      payload.sha = existingSha;
    }

    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'GamersPlanet-Vault-Storage/1.0'
      },
      body: JSON.stringify(payload)
    });

    if (!putRes.ok) {
      const errBody = await putRes.json().catch(() => ({}));
      return {
        success: false,
        message: `GitHub commit failed (${putRes.status}): ${(errBody as any).message || putRes.statusText}`
      };
    }

    const putData = await putRes.json() as any;
    const rawUrl = `https://raw.githubusercontent.com/${parsed.owner}/${parsed.repo}/${branch}/${fullPathInRepo}`;
    const cdnUrl = `https://cdn.jsdelivr.net/gh/${parsed.owner}/${parsed.repo}@${branch}/${fullPathInRepo}`;

    return {
      success: true,
      rawUrl,
      cdnUrl,
      githubPath: fullPathInRepo,
      sha: putData.content?.sha,
      message: `Committed ${filename} permanently to GitHub repo "${parsed.owner}/${parsed.repo}"`
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Failed to commit to GitHub: ${err.message}`
    };
  }
}

/**
 * Scan uploads folder and sync any files to GitHub repository.
 */
export async function syncAllUploadsToGitHub(
  baseUploadsDir: string,
  config: GitHubConfig
): Promise<GitHubBatchSyncResult> {
  const result: GitHubBatchSyncResult = {
    success: false,
    totalFound: 0,
    syncedCount: 0,
    skippedCount: 0,
    errors: [],
    files: []
  };

  const parsed = parseGitHubRepo(config.repo);
  if (!parsed || !config.token) {
    result.errors.push('GitHub repository and token must be configured.');
    return result;
  }

  if (!fs.existsSync(baseUploadsDir)) {
    result.errors.push('Local uploads directory does not exist yet.');
    return result;
  }

  function getFilesRecursively(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        getFilesRecursively(fullPath, fileList);
      } else {
        // Skip hidden files or system files
        if (!file.startsWith('.')) {
          fileList.push(fullPath);
        }
      }
    }
    return fileList;
  }

  const allFiles = getFilesRecursively(baseUploadsDir);
  result.totalFound = allFiles.length;

  for (const filePath of allFiles) {
    const relativePath = path.relative(baseUploadsDir, filePath);
    const uploadRes = await uploadFileToGitHub(filePath, relativePath, config);
    if (uploadRes.success) {
      result.syncedCount++;
      result.files.push({
        filename: path.basename(filePath),
        url: uploadRes.cdnUrl || uploadRes.rawUrl || `/uploads/${relativePath}`,
        size: fs.statSync(filePath).size
      });
    } else {
      result.errors.push(`Failed ${path.basename(filePath)}: ${uploadRes.message}`);
    }
  }

  result.success = result.syncedCount > 0 || (result.totalFound === 0 && result.errors.length === 0);
  return result;
}
