/* T2 i18n: Arabic (base MSA), English, and dialect packs chosen by country */
(function () {
  const BASE_AR = {
    nav_services: "الخدمات", nav_portfolio: "أعمالنا", nav_all: "كل الخدمات", nav_quote: "اطلب عرض سعر",
    btn_country: "الدولة", btn_lang: "English",
    hero_title: "نبني حضورك الرقمي من الصفر",
    hero_lead: "سوشيال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة صفحات، كل شيء في مكان واحد.",
    hero_cta: "اطلب عرض سعر", hero_secondary: "شاهد أعمالنا",
    services_title: "خدماتنا الأساسية",
    s1_t: "إدارة السوشيال ميديا", s1_d: "محتوى شهري، تصميم، نشر، وردود على التعليقات والرسائل.",
    s2_t: "إنشاء وتعديل المواقع", s2_d: "مواقع سريعة ومتجاوبة مع الجوال، من الصفر أو تطوير الموجود.",
    s3_t: "فيديوهات بالذكاء الاصطناعي", s3_d: "فيديوهات تسويقية وإعلانية بسرعة وتكلفة أقل.",
    s4_t: "إعلانات ممولة", s4_d: "حملات على ميتا وتيك توك وسناب وجوجل مع تقارير أسبوعية.",
    s5_t: "إدارة الصفحات", s5_d: "محتوى ورسائل وتقارير وتنظيم حملات لصفحتك.",
    portfolio_title: "أعمالنا", portfolio_lead: "شاهد فيديوهات كل خدمة واختر ما يناسبك.",
    portfolio_soon: "قريباً", close: "إغلاق",
    all_title: "كل خدماتنا",
    quote_title: "لنبدأ مشروعك", quote_lead: "اختر الباقة المناسبة واملأ بياناتك، وسيصلنا طلبك على واتساب مباشرة.",
    f_pkg: "الباقة", f_svc: "الخدمة الأساسية", f_name: "الاسم", f_biz: "اسم النشاط",
    f_phone: "رقم الواتساب", f_notes: "ملاحظات (اختياري)",
    pkg_basic: "الباقة الأساسية", pkg_pro: "الباقة الاحترافية", pkg_full: "الباقة المتكاملة",
    f_submit: "أرسل الطلب على واتساب",
    f_note: "سيفتح واتساب ومعه طلبك جاهزاً، وما عليك إلا الإرسال.",
    f_err: "يرجى كتابة الاسم ورقم الواتساب",
    country_title: "اختر دولتك", country_lead: "لنعرض لك الموقع بلهجتك ونحدد الخدمات المناسبة لسوقك.",
    country_pick: "اختر الدولة", country_go: "متابعة",
    wa_header: "طلب عرض سعر جديد من موقع T2",
    wa_pkg: "الباقة", wa_svc: "الخدمة", wa_name: "الاسم", wa_biz: "اسم النشاط", wa_phone: "رقم العميل", wa_country: "الدولة", wa_notes: "ملاحظات",
    footer_rights: "جميع الحقوق محفوظة", footer_contact: "تواصل معنا",
    svc_names: ["إدارة السوشيال ميديا", "إنشاء وتعديل المواقع", "فيديوهات الذكاء الاصطناعي", "إعلانات ممولة", "إدارة الصفحات"],
    groups: [
      { t: "الاستراتيجية والمحتوى", i: ["استراتيجية السوشيال ميديا", "تخطيط المحتوى والتقويم", "كتابة المحتوى والكابشن", "تصميم المنشورات", "الفيديوهات القصيرة", "إدارة الردود والرسائل", "أبحاث الكلمات والهاشتاقات", "تحليل المنافسين", "التقارير الشهرية والأسبوعية", "إدارة الأزمات والسمعة", "تحسين البروفايل والهايلايتس"] },
      { t: "الإعلانات الممولة", i: ["إعلانات ميتا", "إعلانات تيك توك", "إعلانات سناب شات", "إعلانات يوتيوب وجوجل", "إعلانات X ولينكدإن وبينترست", "إعادة الاستهداف", "حملات العملاء المحتملين", "حملات تحميل التطبيقات", "إعلانات المتاجر والكتالوج", "اختبار A/B", "إعداد البكسل وتتبع التحويلات", "إعلانات بالذكاء الاصطناعي"] },
      { t: "الإنتاج الإبداعي", i: ["تصميم الجرافيك", "الموشن جرافيك", "المونتاج والفيديو", "فيديوهات الذكاء الاصطناعي", "التصوير الفوتوغرافي للمنتجات", "فيديوهات UGC", "الستيكرات والـ GIF", "التعليق الصوتي", "البودكاست ومقاطع الكليبس"] },
      { t: "الهوية البصرية", i: ["تصميم الشعار", "دليل الهوية البصرية", "قوالب السوشيال ميديا"] },
      { t: "المواقع والويب", i: ["إنشاء المواقع الاحترافية", "تطوير المواقع الموجودة", "صفحات الهبوط", "المتاجر الإلكترونية", "تحسين محركات البحث SEO", "جوجل بيزنس بروفايل", "إدارة خرائط جوجل والتقييمات", "التسويق بالبريد الإلكتروني", "واتساب بزنس والرسائل الآلية", "شات بوت", "ربط الأنظمة والـ CRM"] },
      { t: "الإعلام والعلاقات العامة", i: ["البيانات الصحفية", "تغطية الفعاليات", "إدارة البث المباشر", "التسويق عبر المؤثرين", "الحملات الموسمية"] }
    ]
  };

  const BASE_EN = {
    nav_services: "Services", nav_portfolio: "Portfolio", nav_all: "All services", nav_quote: "Get a quote",
    btn_country: "Country", btn_lang: "العربية",
    hero_title: "We build your digital presence from scratch",
    hero_lead: "Social media, websites, AI videos, paid ads and page management, all in one place.",
    hero_cta: "Get a quote", hero_secondary: "See our work",
    services_title: "Core services",
    s1_t: "Social Media Management", s1_d: "Monthly content, design, publishing, and replies to comments and messages.",
    s2_t: "Website Creation & Updates", s2_d: "Fast, mobile-first websites, built from scratch or improved from what you have.",
    s3_t: "AI Video Production", s3_d: "Marketing and ad videos produced quickly at a lower cost.",
    s4_t: "Paid Advertising", s4_d: "Campaigns on Meta, TikTok, Snapchat and Google with weekly reporting.",
    s5_t: "Page Management", s5_d: "Content, messages, reports and campaign planning for your pages.",
    portfolio_title: "Our work", portfolio_lead: "Watch each service's videos and pick what fits you.",
    portfolio_soon: "Coming soon", close: "Close",
    all_title: "All our services",
    quote_title: "Let's start your project", quote_lead: "Choose a package and fill in your details. Your request will reach us on WhatsApp right away.",
    f_pkg: "Package", f_svc: "Main service", f_name: "Name", f_biz: "Business name",
    f_phone: "WhatsApp number", f_notes: "Notes (optional)",
    pkg_basic: "Basic package", pkg_pro: "Professional package", pkg_full: "Complete package",
    f_submit: "Send request on WhatsApp",
    f_note: "WhatsApp will open with your request ready. Just press send.",
    f_err: "Please enter your name and WhatsApp number",
    country_title: "Choose your country", country_lead: "So we can show you the right dialect and services for your market.",
    country_pick: "Select a country", country_go: "Continue",
    wa_header: "New quote request from the T2 website",
    wa_pkg: "Package", wa_svc: "Service", wa_name: "Name", wa_biz: "Business", wa_phone: "Client number", wa_country: "Country", wa_notes: "Notes",
    footer_rights: "All rights reserved", footer_contact: "Contact us",
    svc_names: ["Social Media Management", "Website Creation & Updates", "AI Video Production", "Paid Advertising", "Page Management"],
    groups: [
      { t: "Strategy & Content", i: ["Social media strategy", "Content planning & calendar", "Copywriting & captions", "Post design", "Short-form video", "Comment & DM management", "Keyword & hashtag research", "Competitor analysis", "Monthly & weekly reports", "Crisis & reputation management", "Profile & highlights optimization"] },
      { t: "Paid Advertising", i: ["Meta ads", "TikTok ads", "Snapchat ads", "YouTube & Google ads", "X, LinkedIn & Pinterest ads", "Retargeting", "Lead generation campaigns", "App install campaigns", "Shop & catalog ads", "A/B testing", "Pixel & conversion tracking", "AI-powered ads"] },
      { t: "Creative Production", i: ["Graphic design", "Motion graphics", "Editing & video", "AI video", "Product photography", "UGC videos", "Stickers & GIFs", "Voiceover", "Podcasts & clips"] },
      { t: "Brand Identity", i: ["Logo design", "Brand guidelines", "Social media templates"] },
      { t: "Web & Digital", i: ["Professional websites", "Website redesign", "Landing pages", "E-commerce stores", "SEO", "Google Business Profile", "Google Maps & reviews management", "Email marketing", "WhatsApp Business & automation", "Chatbots", "CRM & system integration"] },
      { t: "Media & PR", i: ["Press releases", "Event coverage", "Live stream management", "Influencer marketing", "Seasonal campaigns"] }
    ]
  };

  // Dialect overrides: only the strings where dialect matters most.
  const DIALECTS = {
    EG: {
      hero_title: "بنبني حضورك الرقمي من الصفر",
      hero_lead: "سوشيال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة صفحات، كل حاجة في مكان واحد.",
      hero_cta: "اطلب عرض سعر", hero_secondary: "شوف أعمالنا",
      portfolio_lead: "شوف فيديوهات كل خدمة واختار اللي يناسبك.",
      s1_d: "محتوى شهري وتصميم ونشر وردود على الكومنتات والرسايل.",
      s2_d: "مواقع سريعة ومتجاوبة مع الموبايل، من الصفر أو تطوير الموجود.",
      s3_d: "فيديوهات تسويقية وإعلانية بسرعة وتكلفة أقل.",
      s4_d: "حملات على ميتا وتيك توك وسناب وجوجل مع تقارير أسبوعية.",
      s5_d: "محتوى ورسايل وتقارير وتنظيم حملات لصفحتك.",
      quote_lead: "اختار الباكج اللي يناسبك واملى بياناتك، وهيوصلنا طلبك على واتساب على طول.",
      f_submit: "ابعت الطلب على واتساب",
      f_note: "هيفتح واتساب ومعاه طلبك جاهز، وانت بس تبعته."
    },
    SA: {
      hero_title: "نبني حضورك الرقمي من الصفر",
      hero_lead: "سوشال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة صفحات، كل شي في مكان واحد.",
      hero_cta: "اطلب عرض سعر", hero_secondary: "شوف أعمالنا",
      portfolio_lead: "شوف فيديوهات كل خدمة وقل لنا وش يناسبك.",
      s1_d: "محتوى شهري وتصميم ونشر وردود على التعليقات والرسائل.",
      s2_d: "مواقع سريعة ومتجاوبة مع الجوال، من الصفر أو تطوير الموجود.",
      s3_d: "فيديوهات تسويقية وإعلانية بسرعة وتكلفة أقل.",
      s4_d: "حملات على ميتا وتيك توك وسناب وقوقل مع تقارير أسبوعية.",
      s5_d: "محتوى ورسائل وتقارير وتنظيم حملات لصفحتك.",
      quote_lead: "اختر الباقة اللي تناسبك واملا بياناتك، وبيوصلنا طلبك على واتساب مباشرة.",
      f_submit: "أرسل الطلب على واتساب",
      f_note: "راح يفتح واتساب ومعه طلبك جاهز، وأنت بس ترسله."
    },
    GULF: {
      hero_title: "نبني حضورك الرقمي من الصفر",
      hero_lead: "سوشيال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة صفحات، كل شي بمكان وحد.",
      hero_cta: "احصل على عرض سعر", hero_secondary: "شوف شغلنا",
      portfolio_lead: "شوف فيديوهات كل خدمة وخبرنا وش يناسبك.",
      s1_d: "محتوى شهري وتصميم ونشر وردود على التعليقات والرسايل.",
      s2_d: "مواقع سريعة ومتجاوبة مع الجوال، من الصفر أو تطوير الموجود.",
      s3_d: "فيديوهات تسويقية وإعلانية بسرعة وتكلفة أقل.",
      s4_d: "حملات على ميتا وتيك توك وسناب وقوقل مع تقارير أسبوعية.",
      s5_d: "محتوى ورسايل وتقارير وتنظيم حملات لصفحتك.",
      quote_lead: "اختر الباقة اللي تناسبك وعبي بياناتك، وبيوصلنا طلبك على واتساب مباشرة.",
      f_submit: "أرسل الطلب على واتساب",
      f_note: "بيفتح واتساب ومعه طلبك جاهز، وأنت بس ترسله."
    },
    LEV: {
      hero_title: "منبني حضورك الرقمي من الصفر",
      hero_lead: "سوشال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة صفحات، كلها بمكان وحد.",
      hero_cta: "اطلب عرض سعر", hero_secondary: "شوف شغلنا",
      portfolio_lead: "شوف فيديوهات كل خدمة واختار اللي بيناسبك.",
      s1_d: "محتوى شهري وتصميم ونشر وردود على التعليقات والرسايل.",
      s2_d: "مواقع سريعة ومتجاوبة مع الموبايل، من الصفر أو تطوير الموجود.",
      s3_d: "فيديوهات تسويقية وإعلانية بسرعة وتكلفة أقل.",
      s4_d: "حملات على ميتا وتيك توك وسناب وجوجل مع تقارير أسبوعية.",
      s5_d: "محتوى ورسايل وتقارير وتنظيم حملات لصفحتك.",
      quote_lead: "اختار الباقة اللي بتناسبك وعبّي بياناتك، ورح يوصلنا طلبك على واتساب مباشرة.",
      f_submit: "ابعت الطلب على واتساب",
      f_note: "رح يفتح واتساب ومعه طلبك جاهز، وإنت بس تبعته."
    }
  };

  // Countries: code, names, and which dialect pack they use.
  const COUNTRIES = [
    { c: "SA", ar: "السعودية", en: "Saudi Arabia", pack: "SA" },
    { c: "EG", ar: "مصر", en: "Egypt", pack: "EG" },
    { c: "AE", ar: "الإمارات", en: "UAE", pack: "GULF" },
    { c: "KW", ar: "الكويت", en: "Kuwait", pack: "GULF" },
    { c: "QA", ar: "قطر", en: "Qatar", pack: "GULF" },
    { c: "BH", ar: "البحرين", en: "Bahrain", pack: "GULF" },
    { c: "OM", ar: "عُمان", en: "Oman", pack: "GULF" },
    { c: "JO", ar: "الأردن", en: "Jordan", pack: "LEV" },
    { c: "LB", ar: "لبنان", en: "Lebanon", pack: "LEV" },
    { c: "SY", ar: "سوريا", en: "Syria", pack: "LEV" },
    { c: "PS", ar: "فلسطين", en: "Palestine", pack: "LEV" },
    { c: "IQ", ar: "العراق", en: "Iraq", pack: "MSA" },
    { c: "YE", ar: "اليمن", en: "Yemen", pack: "MSA" },
    { c: "MA", ar: "المغرب", en: "Morocco", pack: "MSA" },
    { c: "DZ", ar: "الجزائر", en: "Algeria", pack: "MSA" },
    { c: "TN", ar: "تونس", en: "Tunisia", pack: "MSA" },
    { c: "LY", ar: "ليبيا", en: "Libya", pack: "MSA" },
    { c: "SD", ar: "السودان", en: "Sudan", pack: "MSA" },
    { c: "OTHER", ar: "دولة أخرى", en: "Other", pack: "MSA" }
  ];

  window.T2_I18N = { BASE_AR, BASE_EN, DIALECTS, COUNTRIES };
})();
