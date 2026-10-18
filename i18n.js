/**
 * ============================================================================
 * T2 DIGITAL MARKETING AGENCY — COMPLETE MULTI-DIALECT & I18N ENGINE (i18n.js)
 * Complete localization & cultural copywriting packs for:
 * MSA, EN, SA (Saudi), AE (UAE), KW (Kuwait), GULF (QA/BH/OM),
 * EG (Egypt), LEV (LB/SY), JO (Jordan/PS), IQ (Iraq), MAG (MA/DZ/TN)
 * ============================================================================
 */
(function () {
  "use strict";

  // 1. الفصحى (Modern Standard Arabic - Default & General Arab Countries)
  const MSA = {
    nav_services: "خدماتنا",
    nav_portfolio: "أعمالنا",
    nav_all: "كل الحلول",
    nav_quote: "اطلب عرض سعر",
    btn_lang: "English",
    hero_badge: "T2 Digital Agency · شريكك الاستراتيجي للنمو الرقمي",
    hero_title: "نصنع حضورك الرقمي ونضاعف مبيعاتك باحترافية",
    hero_lead: "منظومة تسويق رقمي متكاملة تجمع بين إدارة السوشيال ميديا، تطوير المواقع، فيديوهات الذكاء الاصطناعي، والحملات الإعلانية الممولة في مكان واحد.",
    hero_cta: "اطلب عرض سعر الآن",
    hero_secondary: "شاهد سابقة أعمالنا",
    services_title: "خدماتنا الأساسية",
    services_lead: "اختر الخدمات التي يحتاجها مشروعك الآن، ويمكنك تحديد أكثر من خدمة لبناء باقتك.",
    s1_t: "إدارة السوشيال ميديا",
    s1_d: "خطة محتوى شهرية، تصميمات احترافية، نشر منتظم، وإدارة كاملة للتعليقات والرسائل.",
    s2_t: "إنشاء وتطوير المواقع",
    s2_d: "مواقع وتطبيقات ويب سريعة ومتجاوبة مع الجوال بمعايير عالمية وتجربة مستخدم فائقة.",
    s3_t: "فيديوهات الذكاء الاصطناعي (AI)",
    s3_d: "إنتاج فيديوهات تسويقية وإعلانية سينمائية بالذكاء الاصطناعي بسرعة قياسية وتكلفة أقل.",
    s4_t: "إعلانات ممولة عالية العائد",
    s4_d: "حملات إعلانية مدروسة على ميتا وتيك توك وسناب شات وجوجل مع تقارير أداء أسبوعية.",
    s5_t: "إدارة وتشغيل الصفحات",
    s5_d: "إدارة يومية شاملة لصفحاتك تشمل المحتوى والردود وتنظيم الحملات والتقارير الدورية.",
    portfolio_title: "نماذج من أعمالنا",
    portfolio_lead: "شاهد نماذج حقيقية من فيديوهات وأعمال كل قسم واختر ما يناسب طموحك.",
    portfolio_soon: "قريباً",
    close: "إغلاق",
    all_title: "دليل خدماتنا الشامل",
    all_lead: "حدد كافة الخدمات الفرعية التي يحتاجها مشروعك من القائمة ليصلك عرض سعر مفصل.",
    quote_title: "لنبدأ قصة نجاح مشروعك",
    quote_lead: "اختر الباقة، وحدد الخدمات، وأكمل بياناتك ليصلك عرضنا المفصل عبر واتساب مباشرة.",
    f_pkg: "اختر مستوى الباقة",
    f_name: "الاسم الكريم",
    f_biz: "اسم الشركة أو النشاط",
    f_phone: "رقم الواتساب",
    f_notes: "ملاحظات أو تفاصيل إضافية (اختياري)",
    f_selected: "الخدمات المختارة",
    f_none: "لم تختر أي خدمة بعد — اختر من الأعلى",
    pkg_basic: "الباقة الأساسية (Basic)",
    pkg_pro: "الباقة الاحترافية (Pro)",
    pkg_full: "الباقة الشاملة المتكاملة (Full VIP)",
    f_submit: "أرسل الطلب عبر واتساب",
    f_note: "🔒 سيفتح واتساب ومعه طلبك مرتباً وجاهزاً للإرسال المباشر.",
    f_err: "يرجى كتابة الاسم ورقم الواتساب بشكل صحيح للتواصل معك",
    f_err_svc: "يرجى اختيار خدمة واحدة على الأقل من قائمة الخدمات",
    order_go: "متابعة الطلب",
    order_count: "خدمات مختارة",
    country_pick: "اختر دولتك",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 ✨",
    wa_pkg: "الباقة المطلوبة",
    wa_svc: "الخدمات المختارة",
    wa_name: "الاسم",
    wa_biz: "النشاط التجاري",
    wa_phone: "رقم التواصل",
    wa_country: "الدولة",
    wa_notes: "ملاحظات",
    footer_rights: "جميع الحقوق محفوظة",
    footer_contact: "تواصل معنا عبر واتساب",
    svc_names: [
      "إدارة السوشيال ميديا",
      "إنشاء وتطوير المواقع",
      "فيديوهات الذكاء الاصطناعي",
      "الإعلانات الممولة",
      "إدارة الصفحات"
    ],
    groups: [
      {
        t: "الاستراتيجية وإدارة المحتوى",
        i: [
          "بناء استراتيجية السوشيال ميديا",
          "تخطيط المحتوى والتقويم الشهري",
          "كتابة المحتوى الإبداعي والكابشن",
          "تصميم المنشورات الاحترافية",
          "إنتاج الفيديوهات القصيرة (Reels/TikTok)",
          "إدارة التعليقات والرسائل (Community)",
          "أبحاث الكلمات المفتاحية والهاشتاقات",
          "تحليل المنافسين ودراسة السوق",
          "تقارير الأداء الشهرية والأسبوعية",
          "إدارة السمعة الرقمية والأزمات",
          "تحسين البروفايل والهايلايتس (Bio & Highlights)"
        ]
      },
      {
        t: "الإعلانات الممولة (Media Buying)",
        i: [
          "إعلانات ميتا (فيسبوك وإنستغرام)",
          "إعلانات تيك توك الممولة",
          "إعلانات سناب شات",
          "إعلانات جوجل ويوتيوب",
          "إعلانات منصة X ولينكدإن وبينترست",
          "حملات إعادة الاستهداف (Retargeting)",
          "حملات جمع بيانات العملاء (Lead Gen)",
          "حملات تحميل التطبيقات",
          "إعلانات المتاجر والكتالوج الدايناميك",
          "اختبارات الأداء المتعددة (A/B Testing)",
          "ربط البكسل وتتبع التحويلات (Conversion API)",
          "تحسين الإعلانات بالذكاء الاصطناعي"
        ]
      },
      {
        t: "الإنتاج المرئي والإبداعي",
        i: [
          "تصميم الجرافيك الإعلاني",
          "فيديوهات الموشن جرافيك",
          "المونتاج السينمائي للفيديوهات",
          "إنتاج فيديوهات بالذكاء الاصطناعي (AI)",
          "تصوير المنتجات الفوتوغرافي",
          "فيديوهات تجربة المستخدم (UGC)",
          "تصميم الستيكرات والـ GIFs",
          "التعليق الصوتي الاحترافي (Voiceover)",
          "إنتاج ومونتاج البودكاست والريلز"
        ]
      },
      {
        t: "الهوية البصرية والعلامة التجارية",
        i: [
          "تصميم الشعار الاحترافي (Logo)",
          "بناء دليل الهوية البصرية الكامل (Brand Book)",
          "تصميم قوالب السوشيال ميديا الموحدة"
        ]
      },
      {
        t: "المواقع والمتاجر والحلول التقنية",
        i: [
          "تصميم وبرمجة المواقع التعريفية والشركات",
          "تطوير وتحديث المواقع الحالية",
          "تصميم صفحات الهبوط البيعية (Landing Pages)",
          "إنشاء المتاجر الإلكترونية المتكاملة",
          "تحسين محركات البحث وتصدر النتائج (SEO)",
          "إنشاء وتوثيق جوجل بيزنس بروفايل",
          "إدارة خرائط جوجل ورفع التقييمات",
          "حملات التسويق عبر البريد الإلكتروني",
          "أتمتة واتساب بزنس والرد الآلي",
          "بناء بوتات المحادثة الذكية (AI Chatbots)",
          "ربط الأنظمة ببرامج إدارة العملاء (CRM)"
        ]
      },
      {
        t: "الإعلام والعلاقات العامة والمؤثرين",
        i: [
          "صياغة ونشر البيانات الصحفية",
          "التغطية الإعلامية للفعاليات والمعارض",
          "إدارة وتنظيم البث المباشر (Live)",
          "إدارة حملات التسويق عبر المؤثرين",
          "تخطيط وإطلاق الحملات الموسمية الكبرى"
        ]
      }
    ]
  };

  // 2. الإنجليزية (English - Global Agency Copywriting)
  const EN = {
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_all: "Full Catalog",
    nav_quote: "Get a Quote",
    btn_lang: "العربية",
    hero_badge: "T2 Digital Agency · Your Strategic Growth Partner",
    hero_title: "We Engineer Your Digital Presence & Scale Your Revenue",
    hero_lead: "Full-stack digital marketing: Social Media, High-Speed Websites, AI Video Production, Paid Ads, and Page Management — all under one roof.",
    hero_cta: "Get a Custom Quote",
    hero_secondary: "Explore Our Work",
    services_title: "Core Growth Services",
    services_lead: "Select the core services your business needs. You can combine multiple services.",
    s1_t: "Social Media Management",
    s1_d: "Monthly content calendars, luxury visuals, scheduling, and active community management.",
    s2_t: "Web Design & Development",
    s2_d: "Ultra-fast, mobile-first websites & landing pages built from scratch or redesigned to convert.",
    s3_t: "AI Video Production",
    s3_d: "High-converting marketing & commercial videos powered by AI — faster and more cost-effective.",
    s4_t: "Performance Paid Ads",
    s4_d: "ROI-driven ad campaigns across Meta, TikTok, Snapchat & Google with weekly analytics.",
    s5_t: "Full Page Management",
    s5_d: "End-to-end daily page operations, messaging, reporting, and campaign orchestration.",
    portfolio_title: "Featured Portfolio",
    portfolio_lead: "Watch real samples across each service category and pick what fits your brand.",
    portfolio_soon: "Coming Soon",
    close: "Close",
    all_title: "Complete Solutions Catalog",
    all_lead: "Check every specific deliverable you need below and receive a tailored proposal.",
    quote_title: "Let’s Launch Your Project",
    quote_lead: "Choose your tier, review your selected services, and send your brief directly to our WhatsApp.",
    f_pkg: "Select Package Tier",
    f_name: "Your Full Name",
    f_biz: "Company / Brand Name",
    f_phone: "WhatsApp Phone Number",
    f_notes: "Project Brief or Notes (Optional)",
    f_selected: "Selected Services",
    f_none: "No services selected yet — pick from above",
    pkg_basic: "Basic Growth Package",
    pkg_pro: "Professional Scale Package (Pro)",
    pkg_full: "Full-Stack Enterprise Package (VIP)",
    f_submit: "Send Brief via WhatsApp",
    f_note: "🔒 WhatsApp will open with your structured brief ready to send.",
    f_err: "Please enter your name and a valid WhatsApp number",
    f_err_svc: "Please select at least one service before submitting",
    order_go: "Complete Request",
    order_count: "services selected",
    country_pick: "Select Country",
    wa_header: "✨ New Project Quote Request from T2 Website ✨",
    wa_pkg: "Package Tier",
    wa_svc: "Selected Services",
    wa_name: "Client Name",
    wa_biz: "Brand / Business",
    wa_phone: "Phone / WhatsApp",
    wa_country: "Country",
    wa_notes: "Notes",
    footer_rights: "All rights reserved",
    footer_contact: "Chat on WhatsApp",
    svc_names: [
      "Social Media Management",
      "Web Design & Development",
      "AI Video Production",
      "Performance Paid Ads",
      "Page Management"
    ],
    groups: [
      {
        t: "Strategy & Content",
        i: [
          "Social media growth strategy",
          "Content planning & monthly calendar",
          "Creative copywriting & captions",
          "Branded post design",
          "Short-form video (Reels / TikTok / Shorts)",
          "Comment & DM community management",
          "Keyword & hashtag research",
          "Competitor & market analysis",
          "Weekly & monthly performance reports",
          "Crisis & brand reputation management",
          "Bio, profile & highlights optimization"
        ]
      },
      {
        t: "Paid Advertising (Media Buying)",
        i: [
          "Meta Ads (Facebook & Instagram)",
          "TikTok Ads",
          "Snapchat Ads",
          "Google Search & YouTube Ads",
          "X, LinkedIn & Pinterest Ads",
          "Dynamic Retargeting campaigns",
          "High-intent Lead Generation",
          "App install & engagement campaigns",
          "E-commerce catalog & shopping ads",
          "Creative & audience A/B testing",
          "Pixel & Conversion API tracking setup",
          "AI-optimized ad campaigns"
        ]
      },
      {
        t: "Creative & Video Production",
        i: [
          "Key visual & graphic design",
          "2D / 3D Motion graphics",
          "Pro video editing & color grading",
          "AI commercial video generation",
          "Product photography",
          "UGC creator videos",
          "Branded stickers & GIFs",
          "Professional voiceover",
          "Podcast production & viral clips"
        ]
      },
      {
        t: "Brand Identity",
        i: [
          "Logo design & mark creation",
          "Complete brand guidelines book",
          "Social media design systems & templates"
        ]
      },
      {
        t: "Web, E-Commerce & Automation",
        i: [
          "Custom corporate websites",
          "Website UI/UX redesign & speed optimization",
          "High-converting landing pages",
          "E-commerce store development (Shopify/Salla/Woo)",
          "Search Engine Optimization (SEO)",
          "Google Business Profile setup",
          "Google Maps & reviews management",
          "Automated email marketing flows",
          "WhatsApp Business API & automation",
          "AI customer support chatbots",
          "CRM & workflow integrations"
        ]
      },
      {
        t: "Media, PR & Influencers",
        i: [
          "Press release writing & distribution",
          "Live event digital coverage",
          "Live stream production & management",
          "Influencer marketing campaigns",
          "Major seasonal campaign launches"
        ]
      }
    ]
  };

  // 3. اللهجة المصرية الاحترافية (Egypt - Business Egyptian Dialect)
  const EG = {
    nav_services: "خدماتنا",
    nav_portfolio: "شغلنا",
    nav_all: "كل الخدمات",
    nav_quote: "اطلب عرض سعر",
    btn_lang: "English",
    hero_badge: "T2 Digital Agency · شريك نجاحك الرقمي في مصر 🇪🇬",
    hero_title: "بنبني حضورك الرقمي من الصفر ونضاعف مبيعاتك",
    hero_lead: "سوشيال ميديا، مواقع سريعة، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة بتجيب مبيعات حقيقية.. كل اللي البراند بتاعك محتاجه في مكان واحد.",
    hero_cta: "اطلب عرض سعر دلوقتي",
    hero_secondary: "شوف سابقة أعمالنا",
    services_title: "خدماتنا الأساسية",
    services_lead: "اختار الخدمات اللي محتاجها مشروعك، وتقدر تحدد أكتر من خدمة في نفس الباكج.",
    s1_t: "إدارة السوشيال ميديا",
    s1_d: "خطة محتوى شهرية، تصميمات قوية، نشر منتظم، وردود سريعة على الكومنتات والرسايل.",
    s2_t: "تصميم وتطوير المواقع",
    s2_d: "مواقع ومتاجر سريعة جداً ومتجاوبة مع الموبايل، بنبنيها من الصفر أو نطور موقعك الحالي.",
    s3_t: "فيديوهات بالذكاء الاصطناعي (AI)",
    s3_d: "فيديوهات إعلانية وتسويقية خطيرة بالذكاء الاصطناعي بتكلفة أقل وتنفيذ أسرع.",
    s4_t: "إعلانات ممولة بتبيع",
    s4_d: "حملات إعلانية مدروسة على فيسبوك وإنستجرام وتيك توك وسناب وجوجل مع تقارير أسبوعية.",
    s5_t: "إدارة وتشغيل الصفحات",
    s5_d: "إدارة كاملة لصفحتك من محتوى ورسايل وتقارير وتنظيم حملات عشان تفرغ إنت لإدارة شغلك.",
    portfolio_title: "سابقة أعمالنا",
    portfolio_lead: "اتفرج على فيديوهات كل خدمة على الطبيعة واختار الكوالتي اللي يليق بالبراند بتاعك.",
    portfolio_soon: "قريباً",
    close: "إغلاق",
    all_title: "كل خدمات وحلول T2",
    all_lead: "علم على كل الخدمات اللي محتاجها من القائمة تحت، وطلبك هيوصلنا كامل بالتفصيل.",
    quote_title: "يلا نبدأ نكبّر مشروعك",
    quote_lead: "اختار الباكج، وحدد الخدمات، واكتب بياناتك، وطلبك هيفتح جاهز على واتساب في ثانية.",
    f_pkg: "اختار الباكج",
    f_name: "اسمك الكريم",
    f_biz: "اسم البراند أو الشركة",
    f_phone: "رقم الواتساب",
    f_notes: "تفاصيل إضافية عن مشروعك (اختياري)",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "لسه ما اخترتش أي خدمة — علم على الخدمات من فوق",
    pkg_basic: "الباكج الأساسي (Basic)",
    pkg_pro: "الباكج الاحترافي (Pro)",
    pkg_full: "الباكج المتكامل الشامل (Full VIP)",
    f_submit: "ابعت الطلب على واتساب دلوقتي",
    f_note: "🔒 هيفتح معاك واتساب وفيه تفاصيل طلبك جاهزة، يا دوب هتدوس إرسال.",
    f_err: "يا ريت تكتب اسمك ورقم الواتساب صح عشان نقدر نتواصل معاك",
    f_err_svc: "اختار خدمة واحدة على الأقل عشان نجهزلك عرض السعر",
    order_go: "كمّل طلبك دلوقتي",
    order_count: "خدمات مختارة",
    country_pick: "اختار دولتك",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 ✨",
    wa_pkg: "الباكج",
    wa_svc: "الخدمات المطلوبة",
    wa_name: "الاسم",
    wa_biz: "اسم النشاط",
    wa_phone: "رقم العميل",
    wa_country: "الدولة",
    wa_notes: "ملاحظات",
    footer_rights: "كل الحقوق محفوظة",
    footer_contact: "كلمنا على واتساب",
    svc_names: [
      "إدارة السوشيال ميديا",
      "تصميم وتطوير المواقع",
      "فيديوهات الذكاء الاصطناعي",
      "الإعلانات الممولة",
      "إدارة الصفحات"
    ],
    groups: [
      {
        t: "الاستراتيجية والمحتوى",
        i: [
          "استراتيجية وخطة السوشيال ميديا",
          "تخطيط المحتوى والـ Content Calendar",
          "كتابة المحتوى الإبداعي والكابشن",
          "تصميم بوستات السوشيال ميديا",
          "فيديوهات الريلز والتيك توك القصيرة",
          "إدارة الكومنتات والرسايل (Moderation)",
          "دراسة الكلمات المفتاحية والهاشتاجات",
          "تحليل المنافسين والسوق",
          "تقارير أداء أسبوعية وشهرية",
          "إدارة الأزمات وسمعة البراند",
          "تظبيط البروفايل والبايو والهايلايتس"
        ]
      },
      {
        t: "الإعلانات الممولة (Media Buying)",
        i: [
          "إعلانات فيسبوك وإنستجرام (Meta)",
          "إعلانات تيك توك الممولة",
          "إعلانات سناب شات",
          "إعلانات جوجل ويوتيوب",
          "إعلانات X ولينكدإن وبينترست",
          "حملات إعادة الاستهداف (Retargeting)",
          "حملات تجميع بيانات العملاء (Lead Gen)",
          "حملات تحميل الأبلكيشن",
          "إعلانات المتاجر والكتالوج (Dynamic Ads)",
          "اختبارات A/B لأفضل سعر نتيجة",
          "تظبيط البكسل وتتبع المبيعات (CAPI)",
          "إعلانات مدعومة بالذكاء الاصطناعي"
        ]
      },
      {
        t: "الإنتاج الإبداعي والفيديو",
        i: [
          "تصميمات الجرافيك الإعلانية",
          "فيديوهات الموشن جرافيك",
          "مونتاج الفيديو الاحترافي",
          "فيديوهات إعلانية بالذكاء الاصطناعي (AI)",
          "تصوير المنتجات (Product Photography)",
          "فيديوهات ريفيوهات وتجارب (UGC)",
          "تصميم الاستيكرات والـ GIF",
          "تعليق صوتي احترافي (Voiceover)",
          "تصوير ومونتاج البودكاست والريلز"
        ]
      },
      {
        t: "الهوية البصرية والبراندينج",
        i: [
          "تصميم اللوجو الاحترافي",
          "دليل الهوية البصرية الكامل (Brand Identity)",
          "قوالب وتيمبلت السوشيال ميديا"
        ]
      },
      {
        t: "المواقع والمتاجر والحلول الذكية",
        i: [
          "عمل مواقع الشركات الاحترافية",
          "تطوير وتحديث المواقع الموجودة",
          "صفحات الهبوط البيعية (Landing Pages)",
          "إنشاء المتاجر الإلكترونية (Shopify / Woo)",
          "تهيئة المواقع لمحركات البحث (SEO)",
          "توثيق وتظبيط جوجل بيزنس بروفايل",
          "إدارة خرائط جوجل والتقييمات",
          "التسويق بالإيميل (Email Marketing)",
          "واتساب بزنس والرد التلقائي",
          "عمل شات بوت ذكي (Chatbot)",
          "ربط الموقع والصفحات بنظام CRM"
        ]
      },
      {
        t: "الميديا والإنفلونسرز والعلاقات العامة",
        i: [
          "كتابة ونشر البيانات الصحفية",
          "تغطية الإيفنتات والفعاليات",
          "إدارة اللايف والبث المباشر",
          "حملات التسويق مع الإنفلونسرز",
          "تجهيز وإدارة حملات المواسم والـ White Friday"
        ]
      }
    ]
  };

  // 4. اللهجة السعودية الاحترافية (Saudi Arabia - Authentic KSA Business Dialect)
  const SA = {
    nav_services: "خدماتنا",
    nav_portfolio: "أعمالنا",
    nav_all: "كل الخدمات",
    nav_quote: "اطلب عرض سعر",
    btn_lang: "English",
    hero_badge: "T2 Digital Agency · شريكك الأول للنمو الرقمي بالمملكة 🇸🇦",
    hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك باحترافية",
    hero_lead: "يا هلا بك في T2.. سوشال ميديا، مواقع ومتاجر، فيديوهات بالذكاء الاصطناعي، وحملات إعلانية تبيض الوجه.. كل اللي يحتاجه مشروعك بمكان واحد.",
    hero_cta: "ابشر بعزك — اطلب عرض سعر",
    hero_secondary: "شوف سابقة أعمالنا",
    services_title: "وش الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختر الخدمات اللي تبيها، وتقدر تحدد أكثر من خدمة ونفصّل لك الباقة اللي تناسبك.",
    s1_t: "إدارة السوشال ميديا",
    s1_d: "محتوى شهري إبداعي، تصاميم فخمة، نشر مستمر، وتفاعل كامل مع التعليقات والرسائل.",
    s2_t: "إنشاء وتطوير المواقع والمتاجر",
    s2_d: "مواقع ومتاجر سريعة ومتجاوبة مع الجوال، نبنيها من الصفر أو نطوّر موقعك الحالي.",
    s3_t: "فيديوهات بالذكاء الاصطناعي (AI)",
    s3_d: "فيديوهات تسويقية وإعلانية احترافية بالذكاء الاصطناعي بسرعة قياسية وتكلفة أقل.",
    s4_t: "حملات إعلانية ممولة",
    s4_d: "حملات مدروسة على سناب شات وتيك توك وميتا وقوقل مع تقارير أداء أسبوعية واضحة.",
    s5_t: "إدارة وتشغيل الحسابات",
    s5_d: "إدارة يومية كاملة لحساباتك من محتوى ورسائل وتقارير وتنظيم حملات.",
    portfolio_title: "نماذج من شغلنا",
    portfolio_lead: "شوف فيديوهات كل خدمة وعلّمنا وش اللي يناسب طموحك وعلامتك التجارية.",
    portfolio_soon: "قريباً",
    close: "إغلاق",
    all_title: "كل خدمات وحلول T2",
    all_lead: "حدد كل الخدمات اللي تبيها من القائمة، وبيوصلنا طلبك كامل ومفصّل.",
    quote_title: "خلنا نبدأ مشروعك الحين",
    quote_lead: "اختر الباقة، وحدد الخدمات، وعبّي بياناتك، وبيوصلك عرضنا على الواتساب مباشرة.",
    f_pkg: "اختر الباقة",
    f_name: "اسمك الكريم",
    f_biz: "اسم النشاط أو البراند",
    f_phone: "رقم الجوال (واتساب)",
    f_notes: "ملاحظات أو تفاصيل إضافية (اختياري)",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "ما اخترت أي خدمة لين الحين — حدد من الأعلى",
    pkg_basic: "الباقة الأساسية (Basic)",
    pkg_pro: "الباقة الاحترافية (Pro)",
    pkg_full: "الباقة المتكاملة الشاملة (Full VIP)",
    f_submit: "أرسل طلبك على واتساب الحين",
    f_note: "🔒 بيفتح معك الواتساب وطلبك جاهز ومرتب، بس اضغط إرسال.",
    f_err: "فضلاً اكتب اسمك ورقم الجوال عشان نتواصل معك",
    f_err_svc: "فضلاً اختر خدمة وحدة على الأقل",
    order_go: "كمّل طلبك الحين",
    order_count: "خدمات مختارة",
    country_pick: "اختر دولتك",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 (السعودية 🇸🇦) ✨",
    wa_pkg: "الباقة",
    wa_svc: "الخدمات المطلوبة",
    wa_name: "الاسم",
    wa_biz: "اسم النشاط",
    wa_phone: "رقم الجوال",
    wa_country: "الدولة",
    wa_notes: "ملاحظات",
    footer_rights: "جميع الحقوق محفوظة",
    footer_contact: "تواصل معنا واتساب",
    svc_names: [
      "إدارة السوشال ميديا",
      "إنشاء وتطوير المواقع",
      "فيديوهات الذكاء الاصطناعي",
      "الإعلانات الممولة",
      "إدارة الحسابات"
    ],
    groups: [
      {
        t: "الاستراتيجية وإدارة المحتوى",
        i: [
          "بناء استراتيجية السوشال ميديا",
          "تخطيط المحتوى والتقويم الشهري",
          "كتابة المحتوى الإبداعي والكابشن",
          "تصميم البوستات والمنشورات",
          "إنتاج الفيديوهات القصيرة (Reels / TikTok / Snap)",
          "إدارة الردود والرسائل والتفاعل",
          "أبحاث الكلمات المفتاحية والهاشتاقات",
          "تحليل المنافسين بالسوق السعودي",
          "التقارير الشهرية والأسبوعية",
          "إدارة السمعة والأزمات",
          "تضبيط البروفايل والبايو والهايلايتس"
        ]
      },
      {
        t: "الإعلانات الممولة (Media Buying)",
        i: [
          "إعلانات سناب شات الممولة",
          "إعلانات تيك توك الممولة",
          "إعلانات ميتا (إنستقرام وفيسبوك)",
          "إعلانات قوقل ويوتيوب",
          "إعلانات منصة X ولينكدإن",
          "حملات إعادة الاستهداف (Retargeting)",
          "حملات جذب العملاء المحتملين",
          "حملات تحميل التطبيقات",
          "إعلانات المتاجر والكتالوج (سلة / زد / شوبيفاي)",
          "اختبارات الأداء A/B Testing",
          "ربط البكسل وتتبع المبيعات والتحويلات",
          "إعلانات مدعومة بالذكاء الاصطناعي"
        ]
      },
      {
        t: "الإنتاج الإبداعي والمرئي",
        i: [
          "تصميم الجرافيك الإعلاني",
          "فيديوهات الموشن جرافيك",
          "المونتاج الاحترافي للفيديو",
          "إنتاج فيديوهات بالذكاء الاصطناعي (AI)",
          "تصوير المنتجات الاحترافي",
          "فيديوهات تجربة المستخدم (UGC)",
          "تصميم الستيكرات والـ GIF",
          "التعليق الصوتي الخليجي والعربي",
          "إنتاج ومونتاج البودكاست والمقاطع"
        ]
      },
      {
        t: "الهوية البصرية والبراند",
        i: [
          "تصميم الشعار (Logo)",
          "بناء دليل الهوية البصرية الكامل",
          "تصميم قوالب السوشال ميديا"
        ]
      },
      {
        t: "المواقع والمتاجر والحلول الرقمية",
        i: [
          "إنشاء المواقع التعريفية والشركات",
          "تطوير وتحديث المواقع الموجودة",
          "تصميم صفحات الهبوط (Landing Pages)",
          "إنشاء وتجهيز المتاجر الإلكترونية (سلة / زد / شوبيفاي)",
          "تحسين محركات البحث وتصدر قوقل (SEO)",
          "توثيق وتضبيط قوقل بزنس بروفايل",
          "إدارة خرائط قوقل ورفع التقييمات",
          "التسويق عبر الإيميل",
          "أتمتة واتساب بزنس والرد الآلي",
          "بناء شات بوت ذكي لخدمة العملاء",
          "ربط الأنظمة والـ CRM"
        ]
      },
      {
        t: "الإعلام والعلاقات العامة والمؤثرين",
        i: [
          "صياغة ونشر البيانات الصحفية",
          "تغطية الفعاليات والمعارض والمواسم",
          "إدارة البث المباشر (Live)",
          "التسويق عبر المشاهير والمؤثرين",
          "تجهيز حملات اليوم الوطني، يوم التأسيس، ورمضان"
        ]
      }
    ]
  };

  // 5. اللهجة الإماراتية الاحترافية (UAE - Authentic Emirati Business Dialect)
  const AE = Object.assign({}, SA, {
    hero_badge: "T2 Digital Agency · شريكك الاستراتيجي للنمو الرقمي في الإمارات 🇦🇪",
    hero_title: "نرتقي بحضورك الرقمي ونضاعف مبيعاتك بمعايير عالمية",
    hero_lead: "مرحبا الساع في T2.. منظومة تسويق رقمي متكاملة تجمع بين السوشال ميديا، المواقع الذكية، فيديوهات الذكاء الاصطناعي، والحملات الإعلانية في مكان واحد.",
    hero_cta: "فالك طيب — اطلب عرض سعر",
    hero_secondary: "طالع سابقة أعمالنا",
    services_title: "شو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختار الخدمات المطلوبة لمشروعك، وتقدر تحدد أكثر من خدمة في نفس الباقة.",
    portfolio_lead: "طالع فيديوهات كل خدمة وخبرنا شو اللي يناسب علامتك التجارية.",
    all_lead: "حدد كل اللي تحتاجه من القائمة، وبيوصلنا طلبك كامل ومفصّل.",
    quote_title: "خلنا نبدأ مشروعك الحين",
    quote_lead: "اختار الباقة، وحدد الخدمات، وسجّل بياناتك، وبيتواصل وياك فريقنا فوراً عبر واتساب.",
    f_submit: "طرّش الطلب عبر واتساب",
    f_note: "🔒 بيفتح وياك واتساب وطلبك جاهز ومرتب، بس اضغط إرسال.",
    f_err: "يرجى كتابة الاسم ورقم الواتساب عسب نتواصل وياك",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 (الإمارات 🇦🇪) ✨"
  });

  // 6. اللهجة الكويتية والخليجية (Kuwait / Qatar / Bahrain / Oman)
  const GULF = Object.assign({}, SA, {
    hero_badge: "T2 Digital Agency · شريكك الأول للنمو الرقمي بالخليج",
    hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك بأعلى مستوى",
    hero_lead: "يا هلا ومرحبا.. سوشال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات وإدارة حسابات، كل شي بمكان واحد.",
    hero_cta: "احصل على عرض سعر الحين",
    hero_secondary: "شوف أعمالنا",
    services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختر الخدمات اللي تحتاجها، وتقدر تختار أكثر من خدمة.",
    portfolio_lead: "شوف فيديوهات كل خدمة وخبرنا شنو يناسبك.",
    quote_lead: "اختر الباقة، وحدد الخدمات، وعبّي بياناتك، وراح يتواصل معاك فريقنا على الواتساب مباشرة.",
    f_submit: "دز الطلب على واتساب",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 ✨"
  });

  // 7. اللهجة الشامية والأردنية (Levant: Jordan, Lebanon, Syria, Palestine)
  const LEV = {
    nav_services: "خدماتنا",
    nav_portfolio: "شغلنا",
    nav_all: "كل الخدمات",
    nav_quote: "اطلب عرض سعر",
    btn_lang: "English",
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي والنجاح",
    hero_title: "منبني حضورك الرقمي من الصفر ومنضاعف مبيعاتك",
    hero_lead: "سوشال ميديا ومواقع وفيديوهات بالذكاء الاصطناعي وإعلانات ممولة وإدارة صفحات، كل شي بتحتاجه بمكان واحد.",
    hero_cta: "بلّش مشروعك معنا",
    hero_secondary: "شوف شغلنا",
    services_title: "شو الخدمات اللي بيحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي بتلزمك، وبتقدر تختار أكتر من خدمة سوا.",
    s1_t: "إدارة السوشال ميديا",
    s1_d: "محتوى شهري، تصاميم مميزة، نشر، وردود سريعة على التعليقات والرسايل.",
    s2_t: "تصميم وتطوير المواقع",
    s2_d: "مواقع سريعة ومتجاوبة مع الموبايل، من الصفر أو تطوير لموقعك الموجود.",
    s3_t: "فيديوهات بالذكاء الاصطناعي (AI)",
    s3_d: "فيديوهات تسويقية وإعلانية احترافية بسرعة وتكلفة أوفر.",
    s4_t: "إعلانات ممولة",
    s4_d: "حملات مدروسة على ميتا وتيك توك وسناب وجوجل مع تقارير أسبوعية.",
    s5_t: "إدارة الصفحات",
    s5_d: "إدارة يومية شاملة لمحتوى ورسايل وتقارير وحملات صفحتك.",
    portfolio_title: "نماذج من شغلنا",
    portfolio_lead: "شوف فيديوهات كل خدمة واختار اللي بيناسب شغلك.",
    portfolio_soon: "قريباً",
    close: "إغلاق",
    all_title: "كل خدمات وحلول T2",
    all_lead: "حدّد كل اللي بدك إياه من القائمة، وطلبك بيوصلنا كامل.",
    quote_title: "يلا نبلّش مشروعك",
    quote_lead: "اختار الباقة، وحدد الخدمات، وعبّي بياناتك، ورح يوصلنا طلبك عالواتساب مباشرة.",
    f_pkg: "الباقة",
    f_name: "اسمك الكريم",
    f_biz: "اسم النشاط أو الشركة",
    f_phone: "رقم الواتساب",
    f_notes: "ملاحظات إضافية (اختياري)",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "ما اخترت أي خدمة لهلأ — اختار من فوق",
    pkg_basic: "الباقة الأساسية (Basic)",
    pkg_pro: "الباقة الاحترافية (Pro)",
    pkg_full: "الباقة المتكاملة الشاملة (Full VIP)",
    f_submit: "ابعت الطلب عالواتساب",
    f_note: "🔒 رح يفتح واتساب ومعه طلبك جاهز، وإنت بس ابعته.",
    f_err: "يا ريت تكتب اسمك ورقم الواتساب عشان نتواصل معك",
    f_err_svc: "اختار خدمة وحدة على الأقل",
    order_go: "كمّل الطلب",
    order_count: "خدمات مختارة",
    country_pick: "اختار بلدك",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 ✨",
    wa_pkg: "الباقة",
    wa_svc: "الخدمات",
    wa_name: "الاسم",
    wa_biz: "اسم النشاط",
    wa_phone: "رقم العميل",
    wa_country: "البلد",
    wa_notes: "ملاحظات",
    footer_rights: "كل الحقوق محفوظة",
    footer_contact: "تواصل معنا عالواتساب",
    svc_names: [
      "إدارة السوشال ميديا",
      "تصميم وتطوير المواقع",
      "فيديوهات الذكاء الاصطناعي",
      "إعلانات ممولة",
      "إدارة الصفحات"
    ],
    groups: [
      {
        t: "الاستراتيجية والمحتوى",
        i: [
          "استراتيجية السوشال ميديا",
          "تخطيط المحتوى والتقويم الشهري",
          "كتابة المحتوى والكابشن",
          "تصميم البوستات",
          "الفيديوهات القصيرة (Reels & TikTok)",
          "إدارة التعليقات والرسايل",
          "أبحاث الكلمات والهاشتاغات",
          "تحليل المنافسين",
          "التقارير الشهرية والأسبوعية",
          "إدارة الأزمات والسمعة",
          "تحسين البروفايل والهايلايتس"
        ]
      },
      {
        t: "الإعلانات الممولة",
        i: [
          "إعلانات ميتا (فيسبوك وإنستغرام)",
          "إعلانات تيك توك",
          "إعلانات سناب شات",
          "إعلانات يوتيوب وجوجل",
          "إعلانات X ولينكدإن وبينترست",
          "حملات إعادة الاستهداف",
          "حملات العملاء المحتملين (Leads)",
          "حملات تحميل التطبيقات",
          "إعلانات المتاجر والكتالوج",
          "اختبار A/B للإعلانات",
          "إعداد البكسل وتتبع المبيعات",
          "إعلانات بالذكاء الاصطناعي"
        ]
      },
      {
        t: "الإنتاج الإبداعي",
        i: [
          "تصميم الجرافيك",
          "الموشن جرافيك",
          "المونتاج والفيديو",
          "فيديوهات الذكاء الاصطناعي",
          "تصوير المنتجات",
          "فيديوهات UGC",
          "الستيكرات والـ GIF",
          "التعليق الصوتي",
          "البودكاست ومقاطع الكليبس"
        ]
      },
      {
        t: "الهوية البصرية",
        i: [
          "تصميم اللوغو والشعار",
          "دليل الهوية البصرية الكامل",
          "قوالب السوشال ميديا"
        ]
      },
      {
        t: "المواقع والويب",
        i: [
          "إنشاء المواقع الاحترافية",
          "تطوير المواقع الموجودة",
          "صفحات الهبوط (Landing Pages)",
          "المتاجر الإلكترونية",
          "تحسين محركات البحث SEO",
          "جوجل بيزنس بروفايل",
          "إدارة خرائط جوجل والتقييمات",
          "التسويق بالإيميل",
          "واتساب بزنس والرسايل الآلية",
          "شات بوت ذكي",
          "ربط الأنظمة والـ CRM"
        ]
      },
      {
        t: "الإعلام والعلاقات العامة",
        i: [
          "البيانات الصحفية",
          "تغطية الفعاليات والإيفنتات",
          "إدارة البث المباشر",
          "التسويق مع المؤثرين",
          "الحملات الموسمية"
        ]
      }
    ]
  };

  // 8. اللهجة العراقية الاحترافية (Iraq - Business Iraqi Dialect)
  const IQ = Object.assign({}, GULF, {
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في العراق 🇮🇶",
    hero_title: "نبني حضورك الرقمي ونضاعف مبيعاتك باحترافية",
    hero_lead: "كل الهلا بيك في T2.. سوشيال ميديا، مواقع إلكترونية، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة، كل شي يحتاجه شغلك بمكان واحد.",
    hero_cta: "ابدأ مشروعك هسة",
    hero_secondary: "شوف شغلنا",
    services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي تريدها، وتكدر تختار أكثر من خدمة.",
    quote_title: "يلا نبدي مشروعك هسة",
    quote_lead: "اختار الباقة، وحدد الخدمات، واملي بياناتك، وراح يتواصل وياك فريقنا فوراً عالواتساب.",
    f_none: "بعدك ما اختاريت أي خدمة — اختار من فوك",
    f_submit: "دز الطلب عالواتساب هسة",
    wa_header: "✨ طلب عرض سعر جديد من موقع T2 (العراق 🇮🇶) ✨"
  });

  // 9. اللهجة المغاربية المهذبة للبيزنس (Morocco, Algeria, Tunisia)
  const MAG = Object.assign({}, MSA, {
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في المغرب العربي",
    hero_title: "كنطورو حضورك الرقمي ونضاعفو مبيعاتك باحترافية",
    hero_lead: "سوشيال ميديا، مواقع ومتاجر إلكترونية، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة.. كل ما يحتاجه مشروعك في مكان واحد.",
    hero_cta: "اطلب عرض سعر دابا",
    hero_secondary: "شوف أعمالنا",
    services_title: "شنو هي الخدمات اللي كيحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي كتناسبك، وتقدر تختار أكثر من خدمة."
  });

  // ربط جميع الحزم والدول
  const PACKS = { MSA, EN, EG, SA, AE, GULF, LEV, IQ, MAG };

  const COUNTRIES = [
    { c: "SA", ar: "السعودية", en: "Saudi Arabia", pack: "SA" },
    { c: "EG", ar: "مصر", en: "Egypt", pack: "EG" },
    { c: "AE", ar: "الإمارات", en: "UAE", pack: "AE" },
    { c: "KW", ar: "الكويت", en: "Kuwait", pack: "GULF" },
    { c: "QA", ar: "قطر", en: "Qatar", pack: "GULF" },
    { c: "BH", ar: "البحرين", en: "Bahrain", pack: "GULF" },
    { c: "OM", ar: "عُمان", en: "Oman", pack: "GULF" },
    { c: "JO", ar: "الأردن", en: "Jordan", pack: "LEV" },
    { c: "LB", ar: "لبنان", en: "Lebanon", pack: "LEV" },
    { c: "SY", ar: "سوريا", en: "Syria", pack: "LEV" },
    { c: "PS", ar: "فلسطين", en: "Palestine", pack: "LEV" },
    { c: "IQ", ar: "العراق", en: "Iraq", pack: "IQ" },
    { c: "YE", ar: "اليمن", en: "Yemen", pack: "GULF" },
    { c: "MA", ar: "المغرب", en: "Morocco", pack: "MAG" },
    { c: "DZ", ar: "الجزائر", en: "Algeria", pack: "MAG" },
    { c: "TN", ar: "تونس", en: "Tunisia", pack: "MAG" },
    { c: "LY", ar: "ليبيا", en: "Libya", pack: "MSA" },
    { c: "SD", ar: "السودان", en: "Sudan", pack: "MSA" },
    { c: "OTHER", ar: "دولة أخرى", en: "Other", pack: "MSA" }
  ];

  window.T2_I18N = { PACKS, COUNTRIES };
})();
