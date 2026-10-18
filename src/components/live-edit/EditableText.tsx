import React, { useState, useRef, useEffect } from 'react';
import { useLiveEdit } from './LiveEditContext.js';
import { Pencil, Check, X } from 'lucide-react';

interface EditableTextProps {
  textKey: string;
  defaultText: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  multiline?: boolean;
  label?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  textKey,
  defaultText,
  as: Component = 'span',
  className = '',
  multiline = false,
  label
}) => {
  const { isLiveEditMode, getText, stageTextChange } = useLiveEdit();
  const currentText = getText(textKey, defaultText);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [draftValue, setDraftValue] = useState<string>(currentText);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Sync draft value if currentText changes externally
  useEffect(() => {
    setDraftValue(currentText);
  }, [currentText]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  // When live edit mode is OFF, render plain text with zero overhead
  if (!isLiveEditMode) {
    return <Component className={className}>{currentText}</Component>;
  }

  const handleSave = () => {
    const trimmed = draftValue.trim();
    if (trimmed !== currentText) {
      stageTextChange(textKey, trimmed.length > 0 ? trimmed : defaultText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftValue(currentText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <span className="relative inline-block w-full max-w-full my-0.5 z-30">
        {multiline ? (
          <textarea
            ref={inputRef as any}
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            className="w-full bg-[#0a0f1d] border-2 border-amber-500 rounded-lg p-2 text-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
          />
        ) : (
          <input
            ref={inputRef as any}
            type="text"
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-[#0a0f1d] border-2 border-amber-500 rounded-lg px-2 py-1 text-white text-inherit font-inherit focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
          />
        )}
        <span className="flex items-center gap-1 mt-1 justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-black flex items-center gap-1 hover:bg-emerald-400 cursor-pointer shadow"
          >
            <Check className="w-3 h-3" />
            <span>Apply</span>
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-2 py-0.5 rounded bg-slate-700 text-slate-200 text-[10px] font-bold flex items-center gap-1 hover:bg-slate-600 cursor-pointer shadow"
          >
            <X className="w-3 h-3" />
            <span>Cancel</span>
          </button>
        </span>
      </span>
    );
  }

  return (
    <Component
      onClick={(e) => {
        e.stopPropagation();
        setIsEditing(true);
      }}
      title={`Click to edit: ${label || textKey}`}
      className={`${className} cursor-pointer relative group/editable transition-all duration-200 rounded px-1 -mx-1 hover:bg-amber-500/15 hover:outline hover:outline-1 hover:outline-dashed hover:outline-amber-400`}
    >
      {currentText}
      <span className="opacity-0 group-hover/editable:opacity-100 transition-opacity ml-1.5 inline-flex items-center align-middle px-1 py-0.2 rounded bg-amber-500 text-black text-[9px] font-black uppercase tracking-wider shadow pointer-events-none">
        <Pencil className="w-2.5 h-2.5 mr-0.5" />
        <span>Edit</span>
      </span>
    </Component>
  );
};
