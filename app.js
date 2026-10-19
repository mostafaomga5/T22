/**
 * ============================================================================
 * T2 DIGITAL MARKETING AGENCY — AUTHENTIC MULTI-DIALECT & CULTURE ENGINE (i18n.js)
 * ============================================================================
 */
(function () {
  "use strict";

  // 1. الفصحى (Modern Standard Arabic)
  const MSA = {
    nav_services: "خدماتنا",
    nav_portfolio: "أعمالنا",
    nav_all: "كل الحلول",
    nav_quote: "اطلب عرض سعر",
    btn_lang: "English",
    hero_badge: "T2 Digital Agency · شريكك الاستراتيجي للنمو الرقمي",
    hero_title: "نصنع حضورك الرقمي ونضاعف مبيعاتك باحترافية",
    hero_lead: "منظومة تسويق رقمي متكاملة تجمع بين إدارة السوشيال ميديا، تطوير المواقع، فيديوهات الذكاء الاصطناعي، والحملات الإعلانية الممولة في مكان واحد.",
    hero_cta: "ابدأ مشروعك الآن",
    hero_secondary: "شاهد سابقة أعمالنا",
    stat_1: "حملة ومشروع ناجح",
    stat_2: "متوسط مضاعفة المبيعات",
    stat_3: "أحدث تقنيات الميديا",
    services_title: "خدماتنا الأساسية",
    services_lead: "اضغط على الكروت ثلاثية الأبعاد لتحديد الخدمات التي يحتاجها مشروعك الآن.",
    s1_t: "إدارة السوشيال ميديا",
    s1_d: "خطة محتوى شهرية، تصميمات احترافية، تصوير ومونتاج ريلز، وإدارة كاملة للتعليقات والرسائل.",
    s2_t: "إنشاء وتطوير المواقع والمتاجر",
    s2_d: "مواقع ومتاجر إلكترونية سريعة ومتجاوبة مع الجوال بمعايير عالمية وتجربة مستخدم تضاعف المبيعات.",
    s3_t: "فيديوهات الذكاء الاصطناعي (AI)",
    s3_d: "إنتاج إعلانات وفيديوهات تسويقية سينمائية بالذكاء الاصطناعي بسرعة قياسية وجودة مبهرة.",
    s4_t: "إعلانات ممولة عالية العائد",
    s4_d: "إدارة حملات إعلانية مدروسة على ميتا وتيك توك وسناب شات وجوجل مع تقارير أداء دقيقة.",
    s5_t: "إدارة وتشغيل الصفحات والمنصات",
    s5_d: "تشغيل يومي شامل لحساباتك يشمل النشر والردود وتنظيم الحملات والتقارير الدورية.",
    portfolio_title: "نماذج من أعمالنا الإبداعية",
    portfolio_lead: "شاهد نماذج من فيديوهات وإبداعات كل قسم واختر المستوى الذي يليق بعلامتك التجارية.",
    portfolio_soon: "عرض تفاعلي · قريباً",
    close: "إغلاق",
    all_title: "دليل خدمات وحلول T2 الشامل",
    all_lead: "حدد كافة الخدمات الفرعية التي يحتاجها مشروعك من القائمة ليصلك عرض سعر مفصل.",
    quote_title: "احصل على خطتك وعرض السعر الآن",
    quote_lead: "اختر الباقة، وحدد الخدمات، وأكمل بياناتك ليصلك عرضنا المنسق عبر واتساب مباشرة.",
    f_pkg: "اختر مستوى الباقة",
    f_name: "الاسم الكريم *",
    f_biz: "اسم الشركة أو النشاط التجاري",
    f_phone: "رقم الواتساب *",
    f_notes: "تفاصيل إضافية أو ملاحظات حول مشروعك",
    f_selected: "الخدمات المختارة في طلبك",
    f_none: "لم تختر أي خدمة بعد — اضغط على الخدمات من الأعلى لإضافتها",
    f_clear: "🔄 مسح الاختيارات والبدء من جديد",
    pkg_basic: "الباقة الأساسية للانطلاق (Basic)",
    pkg_pro: "الباقة الاحترافية للنمو (Pro)",
    pkg_full: "الباقة الشاملة المتكاملة (Full VIP)",
    f_submit: "إرسال الطلب المنسق عبر واتساب",
    f_note: "🔒 سيفتح واتساب ومعه طلبك منسقاً بالكامل وجاهزاً للإرسال، ثم يعود الموقع جديداً.",
    f_err: "يرجى كتابة الاسم ورقم الواتساب بشكل صحيح للتواصل معك",
    f_err_svc: "يرجى اختيار خدمة واحدة على الأقل من الأعلى قبل إرسال الطلب",
    order_go: "إتمام الطلب الآن",
    order_count: "خدمات مختارة",
    country_pick: "اختر دولتك",
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
          "إعلانات منصة X ولينكدإن",
          "حملات إعادة الاستهداف (Retargeting)",
          "حملات جمع بيانات العملاء (Lead Gen)",
          "إعلانات المتاجر والكتالوج الدايناميك",
          "ربط البكسل وتتبع التحويلات (Conversion API)"
        ]
      },
      {
        t: "الإنتاج المرئي والذكاء الاصطناعي",
        i: [
          "تصميم الجرافيك الإعلاني",
          "فيديوهات الموشن جرافيك",
          "المونتاج السينمائي للفيديوهات",
          "إنتاج فيديوهات بالذكاء الاصطناعي (AI)",
          "فيديوهات تجربة المستخدم (UGC)",
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
          "تصميم صفحات الهبوط البيعية (Landing Pages)",
          "إنشاء المتاجر الإلكترونية المتكاملة",
          "تحسين محركات البحث وتصدر النتائج (SEO)",
          "إنشاء وتوثيق جوجل بيزنس بروفايل",
          "أتمتة واتساب بزنس والرد الآلي",
          "بناء بوتات المحادثة الذكية (AI Chatbots)"
        ]
      }
    ]
  };

  // 2. اللهجة السعودية الأصيلة (KSA - Authentic Saudi Business Dialect)
  const SA = Object.assign({}, MSA, {
    nav_services: "خدماتنا",
    nav_portfolio: "أعمالنا",
    nav_all: "كل الحلول",
    nav_quote: "اطلب عرض سعر",
    hero_badge: "T2 Digital Agency · شريكك الأول للنمو الرقمي بالمملكة 🇸🇦",
    hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك بشغل يبيّض الوجه",
    hero_lead: "يا هلا بك في T2.. منظومة تسويق رقمي متكاملة للسوق السعودي تجمع بين إدارة السوشال ميديا، متاجر سلة وزد، فيديوهات الذكاء الاصطناعي، وحملات سناب وتيك توك الممولة.",
    hero_cta: "ابشر بعزك — ابدأ مشروعك الحين",
    hero_secondary: "شوف سابقة أعمالنا",
    services_title: "وش الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اضغط على الكروت وحدد الخدمات اللي تبيها، وفصّل باقتك على مقاس طموحك.",
    s1_t: "إدارة حسابات السوشال ميديا",
    s1_d: "خطة محتوى شهرية، تصاميم فخمة، ريلز وتيك توك وسناب، وتفاعل كامل مع المتابعين والرسائل.",
    s2_t: "تصميم المواقع ومتاجر (سلة / زد / شوبيفاي)",
    s2_d: "نبني لك موقع أو متجر إلكتروني سريع ومتجاوب مع الجوال ومربوط ببوابات الدفع والشحن بالمملكة.",
    s3_t: "فيديوهات بالذكاء الاصطناعي (AI)",
    s3_d: "إنتاج إعلانات وفيديوهات تسويقية احترافية بالذكاء الاصطناعي بسرعة قياسية وتكلفة أوفر.",
    s4_t: "حملات إعلانية ممولة (سناب / تيك توك / ميتا / قوقل)",
    s4_d: "حملات إعلانية مدروسة تستهدف عميلك الصح بالسوق السعودي وتضاعف مبيعاتك مع تقارير أسبوعية.",
    s5_t: "إدارة وتشغيل الحسابات الشاملة",
    s5_d: "نتولى عنك إدارة حساباتك بالكامل يومياً من محتوى ورسائل وتقارير عشان تتفرغ لتطوير تجارتك.",
    portfolio_title: "نماذج من شغلنا وإبداعاتنا",
    portfolio_lead: "شوف جودة التنفيذ اللي تضمن لعلامتك التجارية الصدارة بالسوق السعودي.",
    all_title: "كل خدمات وحلول T2 الرقمية",
    all_lead: "حدد كل الخدمات الإضافية اللي يحتاجها مشروعك من القائمة تحت.",
    quote_title: "خلنا نبدأ مشروعك الحين",
    quote_lead: "اختر الباقة، وعبّي بياناتك، وبيوصلك عرض السعر المفصل على الواتساب فوراً.",
    f_pkg: "اختر مستوى الباقة",
    f_name: "اسمك الكريم *",
    f_biz: "اسم البراند أو المتجر / الشركة",
    f_phone: "رقم الجوال (واتساب) *",
    f_notes: "تفاصيل إضافية عن مشروعك أو أهدافك",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "ما اخترت أي خدمة لين الحين — اضغط على الخدمات فوق لإضافتها",
    f_clear: "🔄 مسح الاختيارات والبدء من جديد",
    f_submit: "أرسل طلبك المنسق عبر واتساب الحين",
    f_err: "فضلاً اكتب اسمك ورقم الجوال بشكل صحيح عشان نتواصل معك",
    f_err_svc: "فضلاً اختر خدمة وحدة على الأقل قبل إرسال الطلب",
    order_go: "كمّل طلبك الحين"
  });

  // 3. اللهجة المصرية الاحترافية (Egypt - Authentic Egyptian Agency Dialect)
  const EG = Object.assign({}, MSA, {
    nav_services: "خدماتنا",
    nav_portfolio: "سابقة أعمالنا",
    nav_all: "كل الخدمات",
    nav_quote: "اطلب عرض سعر",
    hero_badge: "T2 Digital Agency · شريك نجاحك الرقمي في مصر 🇪🇬",
    hero_title: "بنبني حضورك الرقمي صح ونضاعف مبيعاتك بأرقام حقيقية",
    hero_lead: "أهلاً بيك في T2.. منظومة تسويق رقمي متكاملة بتجمع بين إدارة السوشيال ميديا، الميديا باينج والإعلانات الممولة، تصميم المواقع والمتاجر، وفيديوهات الذكاء الاصطناعي اللي بتخطف العين.",
    hero_cta: "ابدأ مشروعك دلوقتي",
    hero_secondary: "اتفرج على شغلنا",
    services_title: "اختار الخدمات اللي محتاجها مشروعك",
    services_lead: "اضغط على الكروت الـ 3D وحدد الخدمات اللي تناسبك وجمع باقتك في ثواني.",
    s1_t: "إدارة السوشيال ميديا والمحتوى",
    s1_d: "كونتنت كاليندر شهري، تصميمات احترافية، ريلز وتيك توك، ومودريشن سريع على الكومنتات والرسايل.",
    s2_t: "تصميم وتطوير المواقع والمتاجر",
    s2_d: "مواقع ومتاجر إلكترونية سريعة جداً ومتجاوبة مع الموبايل ومصممة عشان تحول الزوار لعملاء.",
    s3_t: "فيديوهات بالذكاء الاصطناعي (AI Reels & Ads)",
    s3_d: "إنتاج فيديوهات إعلانية وتسويقية سينمائية بالذكاء الاصطناعي في وقت قياسي وبأعلى كوالتي.",
    s4_t: "إعلانات ممولة وميديا باينج (Meta / TikTok / Google)",
    s4_d: "حملات إعلانية مبنية على أرقام وداتا حقيقية عشان تحقق أعلى عائد على الإعلانات (ROAS).",
    s5_t: "إدارة وتشغيل الصفحات بالكامل",
    s5_d: "بنشيل عنك إدارة الصفحات يومياً من نشر وردود وتقارير عشان تركز إنت في تكبير البيزنس بتاعك.",
    portfolio_title: "نماذج من شغلنا على أرض الواقع",
    portfolio_lead: "اتفرج على كوالتي الفيديوهات والشغل اللي يخلي البراند بتاعك في حتة تانية.",
    all_title: "دليل خدمات وحلول T2 الكامل",
    all_lead: "علم على كل الخدمات الفرعية اللي محتاجها مشروعك وهنجهزلك عرض سعر مفصل ليها.",
    quote_title: "يلا نبدأ نكبّر البيزنس بتاعك",
    quote_lead: "اختار الباكج، وكمل بياناتك، وطلبك هيتفتح جاهز ومنسق على واتساب في ثانية.",
    f_pkg: "اختار مستوى الباكج",
    f_name: "اسمك الكريم *",
    f_biz: "اسم البراند أو الشركة",
    f_phone: "رقم الموبايل / واتساب *",
    f_notes: "تفاصيل إضافية عن مشروعك (اختياري)",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "لسه ما اخترتش أي خدمة — اضغط على الكروت فوق عشان تضيف خدماتك",
    f_clear: "🔄 مسح الاختيارات والبدء من جديد",
    f_submit: "ابعت الطلب المنسق على واتساب دلوقتي",
    f_err: "يا ريت تكتب اسمك ورقم الواتساب صح عشان نقدر نتواصل معاك",
    f_err_svc: "اختار خدمة واحدة على الأقل من فوق عشان نبعتلك عرض السعر",
    order_go: "كمّل طلبك دلوقتي"
  });

  // 4. اللهجة الإماراتية الاحترافية (UAE - Authentic Emirati Business Dialect)
  const AE = Object.assign({}, SA, {
    hero_badge: "T2 Digital Agency · شريكك الاستراتيجي للنمو الرقمي في الإمارات 🇦🇪",
    hero_title: "نرتقي بحضورك الرقمي ونضاعف مبيعاتك بمعايير عالمية",
    hero_lead: "مرحبا الساع في T2.. منظومة تسويق رقمي متكاملة تجمع بين إدارة السوشال ميديا، المواقع والمتاجر الذكية، فيديوهات الذكاء الاصطناعي، والحملات الإعلانية عالية العائد.",
    hero_cta: "فالك طيب — ابدأ مشروعك الحين",
    hero_secondary: "طالع سابقة أعمالنا",
    services_title: "شو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختار الخدمات المطلوبة لمشروعك من الكروت ورتّب باقتك المخصصة بكل سهولة.",
    portfolio_lead: "طالع نماذج أعمالنا اللي تضمن لعلامتك التجارية التميز في السوق الإماراتي.",
    quote_lead: "اختار الباقة وسجّل بياناتك، وبيتواصل وياك فريقنا فوراً عبر واتساب بالتفاصيل الكاملة.",
    f_submit: "طرّش الطلب المنسق عبر واتساب",
    f_err: "يرجى كتابة الاسم ورقم الواتساب عسب نتواصل وياك"
  });

  // 5. اللهجة الكويتية والخليجية (Kuwait / Qatar / Bahrain / Oman)
  const GULF = Object.assign({}, SA, {
    hero_badge: "T2 Digital Agency · شريكك الأول للنمو الرقمي بالخليج",
    hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك بأعلى مستوى",
    hero_lead: "يا هلا ومرحبا في T2.. إدارة سوشال ميديا، تصميم مواقع ومتاجر، فيديوهات بالذكاء الاصطناعي، وحملات إعلانية قوية بمكان واحد.",
    hero_cta: "ابدأ مشروعك الحين",
    hero_secondary: "شوف أعمالنا",
    services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي تبيها وفصّل باقتك بكل سهولة.",
    quote_lead: "سجّل بياناتك وراح يتواصل معاك فريقنا فوراً على الواتساب بكل التفاصيل.",
    f_submit: "دز الطلب المنسق على واتساب"
  });

  // 6. اللهجة الشامية والأردنية (Jordan, Lebanon, Syria, Palestine)
  const LEV = Object.assign({}, MSA, {
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي والنجاح",
    hero_title: "منطوّر حضورك الرقمي ومنضاعف مبيعاتك باحترافية",
    hero_lead: "يا هلا فيك بـ T2.. سوشال ميديا، مواقع ومتاجر إلكترونية، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة بتجيب نتائج حقيقية.",
    hero_cta: "بلّش مشروعك معنا",
    hero_secondary: "شوف أعمالنا",
    services_title: "شو الخدمات اللي بيحتاجها مشروعك؟",
    services_lead: "حدّد الخدمات المطلوبة من الكروت ورتّب باقتك المخصصة بكل سهولة.",
    quote_title: "يلا نبلّش مشروعك",
    quote_lead: "اختار الباقة وعبّي بياناتك ورح يتواصل معك فريقنا فوراً عالواتساب.",
    f_selected: "الخدمات اللي اخترتها",
    f_none: "ما اخترت أي خدمة لهلأ — اختار من الكروت فوق",
    f_submit: "ابعت الطلب المنسق عالواتساب",
    order_go: "كمّل الطلب"
  });

  // 7. اللهجة العراقية (Iraq)
  const IQ = Object.assign({}, GULF, {
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في العراق 🇮🇶",
    hero_title: "نبني حضورك الرقمي ونضاعف مبيعاتك باحترافية",
    hero_lead: "كل الهلا بيك في T2.. إدارة سوشيال ميديا، مواقع إلكترونية، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة قوية بمكان واحد.",
    hero_cta: "ابدأ مشروعك هسة",
    services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي تريدها وتكدر تحدد أكثر من خدمة لبناء باقتك.",
    quote_title: "يلا نبدي مشروعك هسة",
    quote_lead: "املي بياناتك وراح يتواصل وياك فريقنا فوراً عالواتساب.",
    f_none: "بعدك ما اختاريت أي خدمة — اختار من فوك",
    f_submit: "دز الطلب المنسق عالواتساب هسة"
  });

  // 8. اللهجة المغاربية (Morocco, Algeria, Tunisia)
  const MAG = Object.assign({}, MSA, {
    hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في المغرب العربي",
    hero_title: "كنطورو حضورك الرقمي وكنضاعفو مبيعاتك باحترافية",
    hero_lead: "سوشيال ميديا، مواقع ومتاجر إلكترونية، فيديوهات بالذكاء الاصطناعي، وإعلانات ممولة.. كل ما يحتاجه مشروعك في مكان واحد.",
    hero_cta: "اطلب عرض سعر دابا",
    services_title: "شنو هي الخدمات اللي كيحتاجها مشروعك؟",
    services_lead: "اختار الخدمات اللي كتناسبك وتقدر تختار أكثر من خدمة."
  });

  // 9. English
  const EN = {
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_all: "Full Catalog",
    nav_quote: "Get a Quote",
    btn_lang: "العربية",
    hero_badge: "T2 Digital Agency · Your Strategic Growth Partner",
    hero_title: "We Engineer Your 3D Digital Presence & Scale Your Revenue",
    hero_lead: "Full-stack digital marketing: Social Media, High-Speed Websites, AI Video Production, Paid Ads, and Page Management — all under one roof.",
    hero_cta: "Start Your Project",
    hero_secondary: "Explore Our Work",
    stat_1: "Successful Campaigns",
    stat_2: "Average ROAS Growth",
    stat_3: "Next-Gen AI & 3D Media",
    services_title: "Core Growth Services",
    services_lead: "Click the 3D cards to select the services your brand needs.",
    s1_t: "Social Media Management",
    s1_d: "Monthly content calendars, luxury visuals, Reels/TikTok production, and community management.",
    s2_t: "Web & E-Commerce Development",
    s2_d: "Ultra-fast, mobile-first websites & stores built to convert visitors into buyers.",
    s3_t: "AI Video Production",
    s3_d: "High-converting marketing & commercial videos powered by AI — faster and cinematic.",
    s4_t: "Performance Paid Ads",
    s4_d: "ROI-driven ad campaigns across Meta, TikTok, Snapchat & Google with weekly analytics.",
    s5_t: "Full Page Management",
    s5_d: "End-to-end daily page operations, messaging, reporting, and campaign orchestration.",
    portfolio_title: "Featured Creative Portfolio",
    portfolio_lead: "Watch real samples across each service category and pick what fits your brand.",
    portfolio_soon: "Interactive Preview · Soon",
    close: "Close",
    all_title: "Complete Solutions Catalog",
    all_lead: "Check every specific deliverable you need below to include in your proposal.",
    quote_title: "Let’s Launch Your Project",
    quote_lead: "Choose your tier, review your selected services, and send your formatted brief via WhatsApp.",
    f_pkg: "Select Package Tier",
    f_name: "Your Full Name *",
    f_biz: "Company / Brand Name",
    f_phone: "WhatsApp Phone Number *",
    f_notes: "Project Brief or Notes (Optional)",
    f_selected: "Selected Services",
    f_none: "No services selected yet — click the cards above to add",
    f_clear: "🔄 Reset All Selections",
    pkg_basic: "Basic Growth Package",
    pkg_pro: "Professional Scale Package (Pro)",
    pkg_full: "Full-Stack Enterprise Package (VIP)",
    f_submit: "Send Formatted Brief via WhatsApp",
    f_note: "🔒 WhatsApp will open with your structured brief ready to send, and the form will reset.",
    f_err: "Please enter your name and a valid WhatsApp number",
    f_err_svc: "Please select at least one service before submitting",
    order_go: "Complete Request",
    order_count: "services selected",
    country_pick: "Select Country",
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
          "X & LinkedIn Ads",
          "Dynamic Retargeting campaigns",
          "High-intent Lead Generation",
          "E-commerce catalog & shopping ads",
          "Pixel & Conversion API tracking setup"
        ]
      },
      {
        t: "Creative & AI Video Production",
        i: [
          "Key visual & graphic design",
          "2D / 3D Motion graphics",
          "Pro video editing & color grading",
          "AI commercial video generation",
          "UGC creator videos",
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
          "High-converting landing pages",
          "E-commerce store development (Shopify/Salla/Zid/Woo)",
          "Search Engine Optimization (SEO)",
          "Google Business Profile setup",
          "WhatsApp Business API & automation",
          "AI customer support chatbots"
        ]
      }
    ]
  };

  // أيقونات وهوية السوق المحلي المتجاوبة مع كل دولة (Country Dynamic Icons & Market Vibe)
  const COUNTRY_VIBES = {
    SA: {
      floatBadge: "🇸🇦 تريند المملكة · رؤية 2030",
      chips: ["🛍️ متاجر سلة وزد", "👻 إعلانات سناب شات", "🎵 تيك توك السعودية", "💳 مدى و Apple Pay"]
    },
    EG: {
      floatBadge: "🇪🇬 تريند السوق المصري",
      chips: ["📱 إعلانات ميتا وتيك توك", "🛒 شوبيفاي و ووكومرس", "🎬 ريلز ومحتوى فيرال", "⚡ نمو مبيعات سريع"]
    },
    AE: {
      floatBadge: "🇦🇪 دبي وأبوظبي ميديـا",
      chips: ["🏙️ براندنج فاخر", "👻 سناب وإنستغرام", "🛍️ شوبيفاي الإمارات", "🤖 حلول الذكاء الاصطناعي"]
    },
    KW: {
      floatBadge: "🇰🇼 تريند السوق الكويتي",
      chips: ["👻 سناب وإنستغرام الكويت", "🛍️ متاجر إلكترونية", "🎬 إنتاج ريلز احترافي"]
    },
    QA: {
      floatBadge: "🇶🇦 السوق القطري الرقمي",
      chips: ["👻 إعلانات سناب وتيك توك", "🏢 مواقع شركات فخمة", "🤖 فيديوهات AI"]
    },
    JO: {
      floatBadge: "🇯🇴 السوق الأردني الرقمي",
      chips: ["📱 ميتا وتيك توك الأردن", "🛒 متاجر ومواقع", "📈 حملات مبيعات"]
    },
    IQ: {
      floatBadge: "🇮🇶 تريند السوق العراقي",
      chips: ["📱 فيسبوك وإنستغرام وتيك توك", "🎬 ريلز وإعلانات ممولة", "🛍️ متاجر إلكترونية"]
    },
    MA: {
      floatBadge: "🇲🇦 السوق المغربي الرقمي",
      chips: ["🛒 التجارة الإلكترونية", "📱 إعلانات ميتا وتيك توك", "🎬 إنتاج فيديو احترافي"]
    },
    DEFAULT: {
      floatBadge: "🚀 نمو رقمي متكامل",
      chips: ["📱 إدارة سوشيال ميديا", "🤖 فيديوهات بالذكاء الاصطناعي", "📈 إعلانات ممولة", "💻 مواقع ومتاجر"]
    }
  };

  const PACKS = { MSA, EN, EG, SA, AE, GULF, LEV, IQ, MAG };

  const COUNTRIES = [
    { c: "SA", ar: "السعودية", en: "Saudi Arabia", pack: "SA", flag: "🇸🇦" },
    { c: "EG", ar: "مصر", en: "Egypt", pack: "EG", flag: "🇪🇬" },
    { c: "AE", ar: "الإمارات", en: "UAE", pack: "AE", flag: "🇦🇪" },
    { c: "KW", ar: "الكويت", en: "Kuwait", pack: "GULF", flag: "🇰🇼" },
    { c: "QA", ar: "قطر", en: "Qatar", pack: "GULF", flag: "🇶🇦" },
    { c: "BH", ar: "البحرين", en: "Bahrain", pack: "GULF", flag: "🇧🇭" },
    { c: "OM", ar: "عُمان", en: "Oman", pack: "GULF", flag: "🇴🇲" },
    { c: "JO", ar: "الأردن", en: "Jordan", pack: "LEV", flag: "🇯🇴" },
    { c: "LB", ar: "لبنان", en: "Lebanon", pack: "LEV", flag: "🇱🇧" },
    { c: "PS", ar: "فلسطين", en: "Palestine", pack: "LEV", flag: "🇵🇸" },
    { c: "SY", ar: "سوريا", en: "Syria", pack: "LEV", flag: "🇸🇾" },
    { c: "IQ", ar: "العراق", en: "Iraq", pack: "IQ", flag: "🇮🇶" },
    { c: "YE", ar: "اليمن", en: "Yemen", pack: "GULF", flag: "🇾🇪" },
    { c: "MA", ar: "المغرب", en: "Morocco", pack: "MAG", flag: "🇲🇦" },
    { c: "DZ", ar: "الجزائر", en: "Algeria", pack: "MAG", flag: "🇩🇿" },
    { c: "TN", ar: "تونس", en: "Tunisia", pack: "MAG", flag: "🇹🇳" },
    { c: "LY", ar: "ليبيا", en: "Libya", pack: "MSA", flag: "🇱🇾" },
    { c: "SD", ar: "السودان", en: "Sudan", pack: "MSA", flag: "🇸🇩" },
    { c: "OTHER", ar: "دولة أخرى", en: "Other Country", pack: "MSA", flag: "🌍" }
  ];

  window.T2_I18N = { PACKS, COUNTRIES, COUNTRY_VIBES };
})();
