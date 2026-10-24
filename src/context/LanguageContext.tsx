import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'hinglish';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  showLanguageModal: boolean;
  openLanguageModal: () => void;
  closeLanguageModal: () => void;
  t: (key: string, fallback?: string) => string;
}

const STORAGE_KEY = 'gamersplanet_user_lang';
const HAS_SELECTED_KEY = 'gamersplanet_lang_chosen';

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav & General
    'nav.home': 'Home',
    'nav.bundles': 'Bundles',
    'nav.videos': "What's Included (Video)",
    'nav.channels': 'VIP Channels',
    'nav.reviews': 'Reviews',
    'nav.faq': 'Help & FAQ',
    'nav.language': 'Language',
    'nav.claim_now': 'Claim Now',
    'nav.admin': 'Admin',
    'common.instant_delivery': 'Instant Digital Delivery',
    'common.lifetime_access': 'Lifetime Access',
    'common.virus_free': '100% Virus Free & Tested',
    'common.setup_support': '1-on-1 Setup Support',
    'common.close': 'Close',

    // Hero Section
    'hero.announcement': '🔥 FLASH SALE: Extra ₹150 OFF any Mega Bundle this weekend!',
    'hero.heading': 'LEGENDARY PC GAMING BUNDLES & STEAM UNLOCK',
    'hero.subtitle': 'Get instant digital access to top-tier AAA game vaults and curated PC collections. Verified direct delivery to your account in minutes with lifetime updates.',
    'hero.btn_browse': 'Browse Vault Bundles',
    'hero.btn_videos': "See What's Included (Video)",
    'hero.btn_channels': 'VIP Channels & Sites',
    'hero.rated': 'Rated 4.9/5 by 150+ Gamers across India',
    'hero.view_proof': 'View Proof →',
    'hero.stat_games': '60,000+ PC Games & Vaults',
    'hero.stat_delivery': '< 5 Mins Direct DM Delivery',
    'hero.stat_fee': '₹0 Hidden Fees Guaranteed',
    'hero.stat_rating': '4.9/5 Verified Gamer Rating',

    // Bundles Section
    'bundles.badge': 'VAULT SELECTION',
    'bundles.heading': 'CURATED PC GAME BUNDLES',
    'bundles.subtitle': 'Hand-picked collections with full video proof and instant activation to your account.',
    'bundles.see_video': "What's Included in Video",
    'bundles.view_details': 'View Details',
    'bundles.claim_now': 'Claim Deal',
    'bundles.all': 'All Bundles',
    'bundles.steam_unlock': 'Steam Unlock',
    'bundles.mega_vault': 'Mega Vaults',
    'bundles.special_deals': 'Special Deals',

    // Video Showcase Section
    'video.eyebrow': "WHAT'S INCLUDED IN BUNDLE — SEE IN VIDEO",
    'video.heading': "SEE WHAT'S INCLUDED (VIDEO PROOF)",
    'video.subtitle': "Watch real recorded video demonstrations showing the exact games, Steam Unlock tools, and account features. Multi-part videos play continuously in sequence.",
    'video.proof_badge': "100% Real Video Proof • Full Walkthrough",
    'video.sequence_active': "Sequential Sequence Active: Part",
    'video.of': "of",
    'video.auto_advances': "Auto-plays next part continuously",
    'video.select_bundle': "Select Bundle to See What's Included in Video:",
    'video.claim_deal': "Claim Deal Now",

    // Bundle Modal
    'modal.included_heading': "WHAT'S INCLUDED IN BUNDLE (VIDEO)",
    'modal.special_price': "Special Vault Price",
    'modal.what_you_get': "What You Receive with this Bundle",
    'modal.instant_delivery': "Instant Digital Delivery",
    'modal.lifetime_access': "Lifetime Vault Access",
    'modal.buy_now': "Get Instant Access Now",
    'modal.secure_note': "Direct Instagram / Telegram delivery within 2-5 minutes.",

    // VIP Channels & Private Sites
    'channels.title': "VIP PRIVATE CHANNELS & SITES",
    'channels.subtitle': "Get exclusive member access to daily game drops, private cloud drives, and direct developer support.",
    'channels.enter_code': "Enter VIP Access Code",
    'channels.unlock_btn': "Unlock Protected Links",
    'channels.locked_notice': "Enter your VIP access code to view direct links and private credentials.",

    // Reviews & Proof
    'reviews.title': "REAL CUSTOMER PROOF & REVIEWS",
    'reviews.subtitle': "Over 5,000+ Indian gamers trust Gamers Planet. Browse real Instagram and WhatsApp feedback screenshots.",
    'reviews.rating_summary': "4.9/5 Average Rating from Real Buyers",

    // FAQs
    'faq.title': "SETUP GUIDE & FREQUENTLY ASKED QUESTIONS",
    'faq.subtitle': "Everything you need to know about order delivery, game installation, and lifetime updates.",
    'faq.step1_title': "1. Pick Bundle & DM Us",
    'faq.step1_desc': "Choose your desired pack and send us a direct message on Instagram or Telegram.",
    'faq.step2_title': "2. Instant Link Delivery",
    'faq.step2_desc': "Receive direct high-speed download links and activation tools in 2 to 5 minutes.",
    'faq.step3_title': "3. Install & Play Forever",
    'faq.step3_desc': "Follow our 1-click simple setup video and enjoy lifetime offline & online gaming.",

    // Features & Advantage
    'features.eyebrow': "Why Thousands of Gamers Choose Us",
    'features.title': "THE ULTIMATE GAMER ADVANTAGE",
    'features.f1_title': "5-Minute Instant Delivery",
    'features.f1_desc': "Zero waiting queues. Once payment is verified, login credentials and direct setup guides arrive in minutes.",
    'features.f2_title': "100% Verified & Safe",
    'features.f2_desc': "Every vault bundle is thoroughly pre-tested for malware, clean cloud syncing, and high performance before listing.",
    'features.f3_title': "Lifetime Reinstallation",
    'features.f3_desc': "Switching to a new gaming rig or reinstalling Windows? Your vault access remains yours forever with no additional fees.",
    'features.f4_title': "1-on-1 Direct Technical Support",
    'features.f4_desc': "Facing driver conflicts or setup confusion? Our technical team assists you directly with personalized walkthroughs.",

    // Language Dialog
    'lang.welcome': "Welcome to Gamers Planet",
    'lang.tagline': "India's #1 Curated PC Game Vault & Steam Unlock Store",
    'lang.select_prompt': "Choose your preferred language to continue:",
    'lang.change_anytime': "You can change this anytime from the top bar.",
    'lang.continue': "Continue to Store",
    'lang.en_title': "English",
    'lang.en_desc': "Clean international gaming terms with detailed bundle specifications.",
    'lang.hi_title': "हिंदी (Hindi)",
    'lang.hi_desc': "आसान और सरल हिंदी में सभी बंडल्स, वीडियो और डिलीवरी की जानकारी।",
    'lang.hinglish_title': "Hinglish (Gamer Mix)",
    'lang.hinglish_desc': "Desi gamer style mix — Sabse simple, fast aur samajhne mein aasan.",
  },

  hi: {
    // Nav & General
    'nav.home': 'होम',
    'nav.bundles': 'गेम बंडल्स',
    'nav.videos': 'वीडियो में देखें',
    'nav.channels': 'वीआईपी चैनल्स',
    'nav.reviews': 'कस्टमर रिव्यू',
    'nav.faq': 'मदद और गाइड',
    'nav.language': 'भाषा बदलें',
    'nav.claim_now': 'अभी खरीदें',
    'nav.admin': 'एडमिन',
    'common.instant_delivery': 'तुरंत डिजिटल डिलीवरी',
    'common.lifetime_access': 'लाइफटाइम ऐक्सेस',
    'common.virus_free': '100% वायरस फ्री और टेस्टेड',
    'common.setup_support': '1-on-1 सेटअप सहायता',
    'common.close': 'बंद करें',

    // Hero Section
    'hero.announcement': '🔥 बंपर ऑफर: इस वीकेंड किसी भी मेगा बंडल पर ₹150 की सीधी छूट!',
    'hero.heading': 'सर्वश्रेष्ठ पीसी गेमिंग बंडल्स और स्टीम अनलॉक',
    'hero.subtitle': 'शीर्ष AAA गेम्स और विशाल गेमिंग वॉल्ट्स का तुरंत डिजिटल ऐक्सेस पाएं। कुछ ही मिनटों में सीधे अकाउंट में वेरिफाइड डिलीवरी और लाइफटाइम अपडेट्स।',
    'hero.btn_browse': 'सभी गेम बंडल्स देखें',
    'hero.btn_videos': 'वीडियो में देखें क्या मिलेगा',
    'hero.btn_channels': 'वीआईपी चैनल्स और साइट्स',
    'hero.rated': 'भारत भर के 150+ गेमर्स द्वारा 4.9/5 रेटिंग',
    'hero.view_proof': 'प्रमाण देखें →',
    'hero.stat_games': '60,000+ पीसी गेम्स और वॉल्ट्स',
    'hero.stat_delivery': '< 5 मिनट में सीधी डीएम डिलीवरी',
    'hero.stat_fee': '₹0 कोई अतिरिक्त शुल्क नहीं',
    'hero.stat_rating': '4.9/5 वेरिफाइड गेमर रेटिंग',

    // Bundles Section
    'bundles.badge': 'वॉल्ट स्पेशल',
    'bundles.heading': 'खास चुनिंदा पीसी गेम बंडल्स',
    'bundles.subtitle': 'पूरी वीडियो प्रमाण और तुरंत ऐक्टिवेशन के साथ टॉप गेम्स का संकलन।',
    'bundles.see_video': 'वीडियो में देखें क्या शामिल है',
    'bundles.view_details': 'विवरण देखें',
    'bundles.claim_now': 'डील प्राप्त करें',
    'bundles.all': 'सभी बंडल्स',
    'bundles.steam_unlock': 'स्टीम अनलॉक',
    'bundles.mega_vault': 'मेगा वॉल्ट्स',
    'bundles.special_deals': 'स्पेशल डील्स',

    // Video Showcase Section
    'video.eyebrow': 'बंडल में क्या मिलेगा — वीडियो में देखें',
    'video.heading': 'देखें क्या शामिल है (वीडियो प्रमाण)',
    'video.subtitle': 'वास्तविक रिकॉर्ड किए गए वीडियो देखें जिनमें बंडल में शामिल गेम्स और स्टीम अनलॉक टूल्स दिखाए गए हैं। सभी भाग एक के बाद एक लगातार चलते हैं।',
    'video.proof_badge': '100% वास्तविक वीडियो प्रमाण • पूरा वॉकथ्रू',
    'video.sequence_active': 'क्रमिक भाग सक्रिय: भाग',
    'video.of': 'का',
    'video.auto_advances': 'अगला भाग अपने आप चलेगा',
    'video.select_bundle': 'वीडियो में देखने के लिए बंडल चुनें:',
    'video.claim_deal': 'अभी डील प्राप्त करें',

    // Bundle Modal
    'modal.included_heading': 'बंडल में क्या शामिल है (वीडियो प्रमाण)',
    'modal.special_price': 'विशेष वॉल्ट कीमत',
    'modal.what_you_get': 'इस बंडल के साथ आपको क्या मिलेगा',
    'modal.instant_delivery': 'तुरंत डिजिटल डिलीवरी',
    'modal.lifetime_access': 'लाइफटाइम वॉल्ट ऐक्सेस',
    'modal.buy_now': 'अभी तुरंत ऐक्सेस प्राप्त करें',
    'modal.secure_note': 'इंस्टाग्राम या टेलीग्राम पर 2 से 5 मिनट में सीधी डिलीवरी।',

    // VIP Channels & Private Sites
    'channels.title': 'वीआईपी प्राइवेट चैनल्स और साइट्स',
    'channels.subtitle': 'दैनिक नए गेम ड्रॉप्स, प्राइवेट क्लाउड ड्राइव्स और सीधा सपोर्ट पाने के लिए मेंबर ऐक्सेस लें।',
    'channels.enter_code': 'वीआईपी ऐक्सेस कोड दर्ज करें',
    'channels.unlock_btn': 'लिंक अनलॉक करें',
    'channels.locked_notice': 'डायरेक्ट लिंक और प्राइवेट क्रेडेंशियल्स देखने के लिए वीआईपी कोड दर्ज करें।',

    // Reviews & Proof
    'reviews.title': 'असली ग्राहकों के प्रमाण और रिव्यू',
    'reviews.subtitle': '5,000+ से अधिक भारतीय गेमर्स का भरोसा। इंस्टाग्राम और व्हाट्सएप के असली स्क्रीनशॉट्स देखें।',
    'reviews.rating_summary': 'असली खरीदारों से 4.9/5 औसत रेटिंग',

    // FAQs
    'faq.title': 'सेटअप गाइड और अक्सर पूछे जाने वाले सवाल',
    'faq.subtitle': 'ऑर्डर डिलीवरी, गेम इंस्टॉलेशन और लाइफटाइम अपडेट्स के बारे में पूरी जानकारी।',
    'faq.step1_title': '1. बंडल चुनें और डीएम भेजें',
    'faq.step1_desc': 'अपनी पसंद का पैक चुनें और इंस्टाग्राम या टेलीग्राम पर हमें डायरेक्ट मैसेज करें।',
    'faq.step2_title': '2. तुरंत डाउनलोड लिंक पाएं',
    'faq.step2_desc': '2 से 5 मिनट में हाई-स्पीड डाउनलोड लिंक और ऐक्टिवेशन टूल्स प्राप्त करें।',
    'faq.step3_title': '3. इंस्टॉल करें और हमेशा खेलें',
    'faq.step3_desc': 'हमारे सरल 1-क्लिक वीडियो गाइड को देखकर बिना किसी झंझट के गेमिंग शुरू करें।',

    // Features & Advantage
    'features.eyebrow': 'हजारों गेमर्स हमें क्यों चुनते हैं',
    'features.title': 'गेमर्स के लिए विशेष सुविधाएं',
    'features.f1_title': '5 मिनट में तुरंत डिलीवरी',
    'features.f1_desc': 'बिना किसी इंतज़ार के। पेमेंट वेरिफाई होते ही लॉगिन क्रेडेंशियल्स और सेटअप गाइड मिनटों में मिल जाते हैं।',
    'features.f2_title': '100% सुरक्षित और टेस्टेड',
    'features.f2_desc': 'हर गेम वॉल्ट को मैलवेयर-मुक्त, सुरक्षित क्लाउड सिंकिंग और उच्च प्रदर्शन के लिए पहले ही टेस्ट किया जाता है।',
    'features.f3_title': 'लाइफटाइम री-इंस्टॉलेशन',
    'features.f3_desc': 'नया पीसी लेने या विंडोज री-इंस्टॉल करने पर भी आपका गेम ऐक्सेस बिना किसी अतिरिक्त शुल्क के हमेशा सुरक्षित रहता है।',
    'features.f4_title': '1-on-1 व्यक्तिगत तकनीकी सहायता',
    'features.f4_desc': 'किसी भी तकनीकी समस्या या ड्राइवर सेटअप में हमारी टीम सीधे चैट पर आपकी पूरी मदद करती है।',

    // Language Dialog
    'lang.welcome': 'गेमर्स प्लैनेट में आपका स्वागत है',
    'lang.tagline': 'भारत का #1 क्युरेटेड पीसी गेम वॉल्ट और स्टीम अनलॉक स्टोर',
    'lang.select_prompt': 'वेबसाइट शुरू करने के लिए अपनी पसंदीदा भाषा चुनें:',
    'lang.change_anytime': 'आप इसे कभी भी ऊपर दिए गए बटन से बदल सकते हैं।',
    'lang.continue': 'स्टोर पर आगे बढ़ें',
    'lang.en_title': 'English',
    'lang.en_desc': 'Clean international gaming terms with detailed bundle specifications.',
    'lang.hi_title': 'हिंदी (Hindi)',
    'lang.hi_desc': 'आसान और सरल हिंदी में सभी बंडल्स, वीडियो और डिलीवरी की जानकारी।',
    'lang.hinglish_title': 'Hinglish (Gamer Mix)',
    'lang.hinglish_desc': 'Desi gamer style mix — Sabse simple, fast aur samajhne mein aasan.',
  },

  hinglish: {
    // Nav & General
    'nav.home': 'Home',
    'nav.bundles': 'Game Bundles',
    'nav.videos': 'Video Proof (Kya Milega)',
    'nav.channels': 'VIP Channels',
    'nav.reviews': 'Reviews & Proof',
    'nav.faq': 'Help & Setup',
    'nav.language': 'Language Badlo',
    'nav.claim_now': 'Abhi Buy Karo',
    'nav.admin': 'Admin',
    'common.instant_delivery': '2-5 Mins Instant Delivery',
    'common.lifetime_access': 'Lifetime Full Access',
    'common.virus_free': '100% Virus Free & Tested',
    'common.setup_support': 'Direct 1-on-1 Setup Help',
    'common.close': 'Band Karein',

    // Hero Section
    'hero.announcement': '🔥 FLASH SALE: Iss weekend kisi bhi Mega Bundle pe extra ₹150 OFF!',
    'hero.heading': 'LEGENDARY PC GAMING BUNDLES & STEAM UNLOCK',
    'hero.subtitle': 'Top AAA games aur private PC vaults ka instant digital access paayein. Sirf 2-5 minutes mein direct verified delivery with lifetime updates guaranteed.',
    'hero.btn_browse': 'Saare Bundles Dekho',
    'hero.btn_videos': 'Video Proof Dekho (Kya Milega)',
    'hero.btn_channels': 'VIP Channels & Sites',
    'hero.rated': 'Rated 4.9/5 by 150+ Indian Gamers',
    'hero.view_proof': 'Asli Proof Dekho →',
    'hero.stat_games': '60,000+ PC Games & Vaults',
    'hero.stat_delivery': '< 5 Mins Mein Direct DM Delivery',
    'hero.stat_fee': '₹0 Koi Hidden Charge Nahi',
    'hero.stat_rating': '4.9/5 Verified Indian Gamers',

    // Bundles Section
    'bundles.badge': 'SUPERHIT PACKS',
    'bundles.heading': 'CURATED PC GAME BUNDLES',
    'bundles.subtitle': 'Original video proof aur instant activation ke saath best game packs.',
    'bundles.see_video': 'Video Mein Dekho Kya Milega',
    'bundles.view_details': 'Details Dekho',
    'bundles.claim_now': 'Deal Grab Karo',
    'bundles.all': 'Sabhi Bundles',
    'bundles.steam_unlock': 'Steam Unlock',
    'bundles.mega_vault': 'Mega Packs',
    'bundles.special_deals': 'Special Offers',

    // Video Showcase Section
    'video.eyebrow': 'BUNDLE MEIN KYA MILEGA — VIDEO MEIN DEKHO',
    'video.heading': 'ASLI VIDEO PROOF (DEKHO KYA MILEGA)',
    'video.subtitle': 'Original recorded gameplay & Steam unlock videos dekho. Ek ke baad ek sabhi parts sequence mein automatic play hote hain bina ruke.',
    'video.proof_badge': '100% Asli Video Proof • Full Walkthrough',
    'video.sequence_active': 'Sequential Sequence Active: Part',
    'video.of': 'ka',
    'video.auto_advances': 'Next part automatically play hoga',
    'video.select_bundle': 'Video dekhne ke liye bundle select karein:',
    'video.claim_deal': 'Abhi Deal Grab Karein',

    // Bundle Modal
    'modal.included_heading': 'BUNDLE MEIN KYA MILEGA (VIDEO PROOF)',
    'modal.special_price': 'Special Offer Price',
    'modal.what_you_get': 'Is Bundle Ke Saath Kya Milega',
    'modal.instant_delivery': 'Instant Digital Delivery',
    'modal.lifetime_access': 'Lifetime Vault Access',
    'modal.buy_now': 'Abhi Instant Access Lo',
    'modal.secure_note': 'Instagram ya Telegram pe 2-5 minutes mein direct delivery.',

    // VIP Channels & Private Sites
    'channels.title': 'VIP PRIVATE CHANNELS & SITES',
    'channels.subtitle': 'Daily naye game releases, private cloud drives aur VIP community ka exclusive access paayein.',
    'channels.enter_code': 'VIP Access Code Daalein',
    'channels.unlock_btn': 'Links Unlock Karein',
    'channels.locked_notice': 'Private links aur direct login credentials dekhne ke liye VIP code enter karein.',

    // Reviews & Proof
    'reviews.title': 'REAL CUSTOMER SCREENSHOTS & PROOFS',
    'reviews.subtitle': '5,000+ Indian gamers ka full trust. Real Instagram aur WhatsApp chat proofs dekhein.',
    'reviews.rating_summary': 'Real Gamers se 4.9/5 Top Rating',

    // FAQs
    'faq.title': 'EASY SETUP GUIDE & FAQS',
    'faq.subtitle': 'Order delivery, game installation aur lifetime support se jude sabhi aasan jawaab.',
    'faq.step1_title': '1. Bundle Select Karo & DM Bhejo',
    'faq.step1_desc': 'Apna favorite pack select karo aur hume Instagram ya Telegram par seedha message karo.',
    'faq.step2_title': '2. Instant Download Link Paao',
    'faq.step2_desc': '2 se 5 minutes mein high-speed direct download link aur activation tools mil jayenge.',
    'faq.step3_title': '3. Install Karo & Bindass Khelo',
    'faq.step3_desc': 'Hamare 1-click video guide ke saath easily install karo aur lifetime gaming enjoy karo.',

    // Features & Advantage
    'features.eyebrow': 'Hazaron Gamers Humein Kyu Chunte Hain',
    'features.title': 'GAMERS KE LIYE SPECIAL ADVANTAGES',
    'features.f1_title': '5 Mins Mein Instant Delivery',
    'features.f1_desc': 'Koi waiting line nahi. Payment verify hote hi direct login credentials aur setup guide minutes mein mil jate hain.',
    'features.f2_title': '100% Tested & Virus Free',
    'features.f2_desc': 'Har ek bundle ko malware check aur smooth performance ke liye pehle hi thoroughly test kiya jata hai.',
    'features.f3_title': 'Lifetime Re-installation Free',
    'features.f3_desc': 'Naya PC liya ya Windows reinstall kiya? Aapka game vault access hamesha active rahega bina kisi extra fee ke.',
    'features.f4_title': '1-on-1 Direct Support',
    'features.f4_desc': 'Setup karne mein koi bhi dikkat aaye toh hamari technical team DM mein direct call/chat support deti hai.',

    // Language Dialog
    'lang.welcome': 'Welcome to Gamers Planet',
    'lang.tagline': 'India ka #1 Curated PC Game Vault & Steam Unlock Store',
    'lang.select_prompt': 'Aage badhne ke liye apni preferred language select karein:',
    'lang.change_anytime': 'Aap ise upar diye button se kabhi bhi change kar sakte hain.',
    'lang.continue': 'Store Open Karein',
    'lang.en_title': 'English',
    'lang.en_desc': 'Clean international gaming terms with detailed bundle specifications.',
    'lang.hi_title': 'हिंदी (Hindi)',
    'lang.hi_desc': 'आसान और सरल हिंदी में सभी बंडल्स, वीडियो और डिलीवरी की जानकारी।',
    'lang.hinglish_title': 'Hinglish (Gamer Mix)',
    'lang.hinglish_desc': 'Desi gamer style mix — Sabse simple, fast aur samajhne mein aasan.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'en' || saved === 'hi' || saved === 'hinglish')) {
        return saved;
      }
    } catch {
      // localStorage may fail in private browsing
    }
    return 'en';
  });

  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(() => {
    try {
      const hasChosen = localStorage.getItem(HAS_SELECTED_KEY);
      // If user hasn't chosen a language yet on the start of website, show modal!
      return !hasChosen;
    } catch {
      return false;
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(HAS_SELECTED_KEY, 'true');
    } catch {
      // ignore
    }
  };

  const openLanguageModal = () => setShowLanguageModal(true);
  const closeLanguageModal = () => {
    setShowLanguageModal(false);
    try {
      localStorage.setItem(HAS_SELECTED_KEY, 'true');
    } catch {
      // ignore
    }
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    if (translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        showLanguageModal,
        openLanguageModal,
        closeLanguageModal,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
