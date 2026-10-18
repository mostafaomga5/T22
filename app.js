/**
 * ============================================================================
 * T2 DIGITAL MARKETING AGENCY — CORE APPLICATION & 3D SPATIAL ENGINE (app.js)
 * Features:
 * 1. Dynamic Country-by-Country Dialect Engine (SA, AE, EG, KW, QA, LEV, MAG...)
 * 2. Smart Auto-Aspect Portfolio Video Engine (9:16 & 16:9 + 3D "Coming Soon")
 * 3. Real-Time Three.js 3D Extruded Logo with Dynamic Mouse Specular Lighting
 * 4. Interactive 3D Gold Dust Particle Field + Smooth Tilt & Spotlight Physics
 * ============================================================================
 */
(function () {
  "use strict";

  const I18N = window.T2_I18N || { PACKS: { MSA: {}, EN: {} }, COUNTRIES: [] };
  const { PACKS, COUNTRIES } = I18N;

  // ---------- 1. Contact Numbers & Country Meta ----------
  const WA_DEFAULT = "201090960743";
  const WA_BY_COUNTRY = {
    SA: "", // ضع رقم الواتساب السعودي هنا إن وجد (بدون +)
    AE: "", // ضع رقم الواتساب الإماراتي هنا إن وجد (بدون +)
    EG: "201090960743"
  };

  const FLAGS = {
    SA: "🇸🇦", EG: "🇪🇬", AE: "🇦🇪", KW: "🇰🇼", QA: "🇶🇦", BH: "🇧🇭", OM: "🇴🇲",
    JO: "🇯🇴", LB: "🇱🇧", SY: "🇸🇾", PS: "🇵🇸", IQ: "🇮🇶", YE: "🇾🇪", MA: "🇲🇦",
    DZ: "🇩🇿", TN: "🇹🇳", LY: "🇱🇾", SD: "🇸🇩", OTHER: "🌍"
  };

  const PHONE_META = {
    SA: { code: "+966", placeholder: "+966 5X XXX XXXX" },
    AE: { code: "+971", placeholder: "+971 5X XXX XXXX" },
    EG: { code: "+20",  placeholder: "+20 10X XXX XXXX" },
    KW: { code: "+965", placeholder: "+965 XXXX XXXX" },
    QA: { code: "+974", placeholder: "+974 XXXX XXXX" },
    BH: { code: "+973", placeholder: "+973 XXXX XXXX" },
    OM: { code: "+968", placeholder: "+968 XXXX XXXX" },
    JO: { code: "+962", placeholder: "+962 7X XXX XXXX" },
    LB: { code: "+961", placeholder: "+961 XX XXX XXX" },
    SY: { code: "+963", placeholder: "+963 9XX XXX XXX" },
    PS: { code: "+970", placeholder: "+970 59X XXX XXX" },
    IQ: { code: "+964", placeholder: "+964 7XX XXX XXXX" },
    YE: { code: "+967", placeholder: "+967 7XX XXX XXX" },
    MA: { code: "+212", placeholder: "+212 6XX-XXXXXX" },
    DZ: { code: "+213", placeholder: "+213 5XX XX XX XX" },
    TN: { code: "+216", placeholder: "+216 XX XXX XXX" },
    LY: { code: "+218", placeholder: "+218 9X-XXXXXXX" },
    SD: { code: "+249", placeholder: "+249 9X XXX XXXX" },
    OTHER: { code: "+", placeholder: "+XX XXX XXX XXXX" }
  };

  // ---------- 2. Smart Country-by-Country Dialect Overrides ----------
  // يضمن تغيير لهجة الموقع بدقة لكل دولة حتى لو كان ملف i18n.js يستخدم حزماً عامة
  const COUNTRY_DIALECT_OVERRIDES = {
    SA: {
      hero_badge: "T2 Digital Agency · شريكك الأول للنمو الرقمي بالمملكة 🇸🇦",
      hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك باحترافية",
      hero_lead: "يا هلا بك في T2.. منظومة تسويق رقمي متكاملة تجمع بين الإبداع، الحملات الممولة الدقيقة، وتطوير المواقع وإنتاج فيديوهات الذكاء الاصطناعي اللي تبيض الوجه.",
      hero_cta: "ابشر بعزك — ابدأ مشروعك الحين",
      hero_secondary: "شوف سابقة أعمالنا",
      services_title: "وش الخدمات اللي يحتاجها مشروعك؟",
      services_lead: "حدد الخدمات اللي تبيها وفصّل باقتك على مقاس طموحك بكل سهولة.",
      portfolio_title: "نماذج من شغلنا وإبداعاتنا",
      portfolio_lead: "شغل احترافي يضمن لعلامتك التجارية الصدارة والتميز بالسوق السعودي.",
      all_title: "كل خدمات وحلول T2 الرقمية",
      all_lead: "استكشف كافة الأقسام والخدمات اللي نقدمها عشان نكبر شغلك ونضاعف أرباحك.",
      quote_title: "اطلب خطتك وعرض السعر الحين",
      quote_lead: "عبّي بياناتك وبيتواصل معك فريقنا فوراً على الواتساب بكل التفاصيل.",
      f_submit: "أرسل طلبك عبر واتساب الحين",
      order_go: "كمّل طلبك الحين"
    },
    AE: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في الإمارات 🇦🇪",
      hero_title: "نرتقي بحضورك الرقمي ونضاعف مبيعاتك بمعايير عالمية",
      hero_lead: "مرحبا الساع في T2.. منظومة تسويق رقمي متكاملة تجمع بين الإبداع، الإعلانات الممولة، وتطوير المواقع وإنتاج الفيديوهات بالذكاء الاصطناعي.",
      hero_cta: "فالك طيب — ابدأ مشروعك الحين",
      hero_secondary: "طالع سابقة أعمالنا",
      services_title: "شو الخدمات اللي يحتاجها مشروعك؟",
      services_lead: "اختار الخدمات المطلوبة ورتّب باقتك المخصصة لمشروعك بكل سهولة.",
      portfolio_title: "نماذج من أعمالنا المميزة",
      portfolio_lead: "جودة تنفيذ عالمية تضمن لعلامتك التجارية التميز في السوق الإماراتي.",
      all_title: "كافة خدمات وحلول T2 الرقمية",
      all_lead: "تعرّف على كل الحلول المتخصصة اللي نقدمها لتطوير أعمالك.",
      quote_title: "احصل على خطة وعرض سعر مخصص",
      quote_lead: "سجّل بياناتك وبيتواصل وياك فريقنا فوراً عبر واتساب بالتفاصيل الكاملة.",
      f_submit: "طرّش الطلب عبر واتساب",
      order_go: "كمّل الطلب الحين"
    },
    EG: {
      hero_badge: "T2 Digital Agency · شريك نجاحك الرقمي في مصر 🇪🇬",
      hero_title: "بنبني حضورك الرقمي ونضاعف مبيعاتك باحترافية",
      hero_lead: "أهلاً بيك في T2.. منظومة تسويق رقمي متكاملة بتجمع بين الإبداع، الإعلانات الممولة الصح، وتصميم المواقع وفيديوهات الذكاء الاصطناعي اللي بتجيب نتيجة.",
      hero_cta: "ابدأ مشروعك دلوقتي",
      hero_secondary: "شوف سابقة أعمالنا",
      services_title: "اختار الخدمات اللي محتاجها مشروعك",
      services_lead: "حدد الخدمات اللي تناسبك وكون باقتك المخصصة في ثواني.",
      portfolio_title: "نماذج من شغلنا على أرض الواقع",
      portfolio_lead: "كوالتي تنفيذ عالي يضمن للبراند بتاعك التميز وسط المنافسين.",
      all_title: "كل خدمات وحلول T2 الرقمية",
      all_lead: "اكتشف كل الأقسام والخدمات اللي بنقدمها عشان نكبّر البيزنس بتاعك.",
      quote_title: "اطلب خطة تسويق وعرض سعر مخصص ليك",
      quote_lead: "سيب بياناتك وفريقنا هيتواصل معاك فوراً على الواتساب بكل التفاصيل.",
      f_submit: "ابعت الطلب على واتساب دلوقتي",
      order_go: "كمّل طلبك دلوقتي"
    },
    KW: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في الكويت 🇰🇼",
      hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك بأعلى مستوى",
      hero_lead: "يا هلا ومرحبا.. منظومة تسويق رقمي متكاملة تجمع بين الإبداع، الإعلانات القوية، وتطوير المواقع وفيديوهات الذكاء الاصطناعي.",
      hero_cta: "ابدأ مشروعك الحين",
      hero_secondary: "شوف أعمالنا",
      services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
      services_lead: "اختار الخدمات اللي تبيها وفصّل باقتك بكل سهولة.",
      quote_title: "احصل على خطة وعرض سعر مخصص",
      quote_lead: "سجّل بياناتك وراح يتواصل معاك فريقنا فوراً على الواتساب.",
      f_submit: "دز الطلب على واتساب"
    },
    QA: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في قطر 🇶🇦",
      hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك باحترافية",
      hero_lead: "يا هلا ومرحبا.. حلول تسويق رقمي متكاملة من إدارة السوشيال ميديا والمواقع لين فيديوهات الذكاء الاصطناعي والإعلانات.",
      hero_cta: "ابدأ مشروعك الحين",
      services_title: "شنو الخدمات اللي يحتاجها مشروعك؟"
    },
    BH: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في البحرين 🇧🇭",
      services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
      hero_cta: "ابدأ مشروعك الحين"
    },
    OM: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في سلطنة عُمان 🇴🇲",
      hero_cta: "ابدأ مشروعك الحين"
    },
    JO: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في الأردن 🇯🇴",
      hero_title: "منطوّر حضورك الرقمي ومنضاعف مبيعاتك باحترافية",
      hero_lead: "يا هلا فيك.. منظومة تسويق رقمي متكاملة بتجمع بين الإبداع، الإعلانات الممولة، وتطوير المواقع وفيديوهات الذكاء الاصطناعي.",
      hero_cta: "بلّش مشروعك هسا",
      hero_secondary: "شوف أعمالنا",
      services_title: "شو الخدمات اللي بيحتاجها مشروعك؟",
      services_lead: "حدّد الخدمات المطلوبة ورتّب باقتك المخصصة بكل سهولة.",
      quote_lead: "عبّي بياناتك وراح يتواصل معك فريقنا فوراً عالواتساب بالتفاصيل الكاملة."
    },
    LB: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في لبنان 🇱🇧",
      hero_title: "منطوّر حضورك الرقمي ومنضاعف مبيعاتك باحترافية",
      hero_cta: "بلّش مشروعك هلّق",
      services_title: "شو الخدمات يلّي بيحتاجها مشروعك؟"
    },
    SY: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي 🇸🇾",
      hero_cta: "بلّش مشروعك هلّق",
      services_title: "شو الخدمات يلّي بيحتاجها مشروعك؟"
    },
    PS: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في فلسطين 🇵🇸",
      hero_cta: "بلّش مشروعك هلّق",
      services_title: "شو الخدمات اللي بيحتاجها مشروعك؟"
    },
    IQ: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في العراق 🇮🇶",
      hero_title: "نطوّر حضورك الرقمي ونضاعف مبيعاتك باحترافية",
      hero_lead: "كل الهلا بيك.. منظومة تسويق رقمي متكاملة تجمع بين الإبداع، الإعلانات الممولة، وتطوير المواقع وفيديوهات الذكاء الاصطناعي.",
      hero_cta: "ابدأ مشروعك هسة",
      services_title: "شنو الخدمات اللي يحتاجها مشروعك؟",
      quote_lead: "املي بياناتك وراح يتواصل وياك فريقنا فوراً عالواتساب."
    },
    MA: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في المغرب 🇲🇦",
      hero_title: "كنطورو حضورك الرقمي وكنضاعفو مبيعاتك باحترافية",
      hero_cta: "بدا مشروعك دابا",
      services_title: "شنو هي الخدمات اللي كيحتاجها مشروعك؟"
    },
    DZ: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في الجزائر 🇩🇿",
      hero_cta: "ابدا مشروعك درك",
      services_title: "واش هي الخدمات اللي يحتاجها مشروعك؟"
    },
    TN: {
      hero_badge: "T2 Digital Agency · شريكك للنمو الرقمي في تونس 🇹🇳",
      hero_cta: "ابدا مشروعك توّا",
      services_title: "شنية الخدمات اللي يستحقها مشروعك؟"
    }
  };

  const SVC_IDS = ["smm", "web", "ai", "ads", "pages"];
  const VIDEOS_PER_SERVICE = 3;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- 3. State Management ----------
  let lang = localStorage.getItem("t2_lang") || "ar";
  let country = localStorage.getItem("t2_country") || null;
  if (!COUNTRIES.some((c) => c.c === country)) country = null;

  let selected = [];
  try {
    selected = JSON.parse(localStorage.getItem("t2_sel") || "[]");
  } catch (e) {
    selected = [];
  }
  if (!Array.isArray(selected)) selected = [];

  // ---------- 4. Strings: Language + Country-Specific Dialect ----------
  function strings() {
    if (lang === "en") return PACKS.EN || {};
    const c = COUNTRIES.find((x) => x.c === country);
    const basePack = (c && PACKS[c.pack]) || PACKS[country] || PACKS.MSA || {};
    const countryOverrides = (country && COUNTRY_DIALECT_OVERRIDES[country]) || {};
    return Object.assign({}, PACKS.MSA || {}, basePack, countryOverrides);
  }

  const countryObj = (code) => COUNTRIES.find((x) => x.c === code);
  const countryName = (code) => {
    const c = countryObj(code);
    return c ? (lang === "en" ? c.en : c.ar) : "";
  };
  const waNumber = () => (country && WA_BY_COUNTRY[country]) || WA_DEFAULT;

  // ---------- 5. Service Selection Logic ----------
  function labelFor(id) {
    const s = strings();
    if (id[0] === "c") return s["s" + (Number(id.slice(1)) + 1) + "_t"] || id;
    const [g, i] = id.slice(1).split("_").map(Number);
    return s.groups && s.groups[g] && s.groups[g].i ? s.groups[g].i[i] : id;
  }

  function saveSelection() {
    localStorage.setItem("t2_sel", JSON.stringify(selected));
  }

  function toggle(id) {
    const idx = selected.indexOf(id);
    if (idx >= 0) selected.splice(idx, 1);
    else selected.push(id);
    saveSelection();
    syncSelection();
  }

  function isOn(id) {
    return selected.indexOf(id) >= 0;
  }

  // ---------- 6. UI Rendering & Dialect Application ----------
  function applyText() {
    const s = strings();
    const isEn = lang === "en";

    document.documentElement.lang = isEn ? "en" : "ar";
    document.documentElement.dir = isEn ? "ltr" : "rtl";
    document.title = isEn
      ? "T2 | Digital Marketing & AI Solutions"
      : "T2 | حلول التسويق الرقمي المتكاملة";

    // تحديث جميع العناصر التي تحمل data-i
    document.querySelectorAll("[data-i]").forEach((el) => {
      const key = el.getAttribute("data-i");
      const val = s[key];
      if (typeof val === "string") el.textContent = val;
    });

    // تحديث الشارة الترحيبية حسب الدولة واللغة
    const badgeText = document.querySelector(".hero-badge span:last-child");
    if (badgeText) {
      if (isEn) {
        badgeText.textContent = country
          ? `T2 Digital Agency · Your Growth Partner in ${countryName(country)}`
          : "T2 Digital Agency · Your Digital Growth Partner";
      } else {
        badgeText.textContent =
          s.hero_badge || "T2 Digital Agency · شريكك للنمو الرقمي";
      }
    }

    // تحديث placeholder مفتاح الهاتف حسب الدولة المختارة
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      const meta = PHONE_META[country] || PHONE_META.EG;
      phoneInput.placeholder = meta.placeholder;
    }

    const langBtn = document.getElementById("btn-lang");
    if (langBtn && s.btn_lang) langBtn.textContent = s.btn_lang;

    const footerWa = document.getElementById("footer-wa");
    if (footerWa) footerWa.href = "https://wa.me/" + waNumber();

    const videoClose = document.getElementById("video-close");
    if (videoClose && s.close) videoClose.setAttribute("aria-label", s.close);
  }

  function renderDropdown() {
    const s = strings();
    const btn = document.getElementById("cdd-btn");
    const list = document.getElementById("cdd-list");
    if (!btn || !list) return;

    btn.querySelector(".flag").textContent = country ? FLAGS[country] || "🌍" : "🌍";
    btn.querySelector(".label").textContent = country
      ? countryName(country)
      : s.country_pick || (lang === "en" ? "Select Country" : "اختر الدولة");
    btn.classList.toggle("pulse", !country);

    list.innerHTML = COUNTRIES.map(
      (c) => `
      <li role="option" data-code="${c.c}" aria-selected="${c.c === country}">
        <span class="flag">${FLAGS[c.c] || "🌍"}</span>
        <span>${lang === "en" ? c.en : c.ar}</span>
      </li>`
    ).join("");
  }

  function renderCoreList() {
    const s = strings();
    const listEl = document.getElementById("services-list");
    if (!listEl) return;

    listEl.innerHTML = [0, 1, 2, 3, 4]
      .map((i) => {
        const id = "c" + i;
        return `
      <li class="pick tilt ${isOn(id) ? "on" : ""}" data-id="${id}">
        <label>
          <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
          <span class="pick-num">0${i + 1}</span>
          <span class="pick-body">
            <h3>${s["s" + (i + 1) + "_t"] || ""}</h3>
            <p>${s["s" + (i + 1) + "_d"] || ""}</p>
          </span>
          <span class="tick" aria-hidden="true">✓</span>
        </label>
      </li>`;
      })
      .join("");
  }

  function renderAllList() {
    const s = strings();
    const groupsEl = document.getElementById("groups");
    if (!groupsEl || !Array.isArray(s.groups)) return;

    groupsEl.innerHTML = s.groups
      .map(
        (g, gi) => `
      <div class="group tilt">
        <h3>${g.t}</h3>
        <ul class="chk">
          ${g.i
            .map((item, ii) => {
              const id = "g" + gi + "_" + ii;
              return `<li>
                <label class="chk-row ${isOn(id) ? "on" : ""}">
                  <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
                  <span class="box" aria-hidden="true">✓</span>
                  <span>${item}</span>
                </label>
              </li>`;
            })
            .join("")}
        </ul>
      </div>`
      )
      .join("");
  }

  // ---------- 7. Smart Portfolio Video Engine ----------
  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    if (!wrap || !Array.isArray(s.svc_names)) return;

    const soonLabel =
      s.portfolio_soon || (lang === "en" ? "Coming Soon" : "قريباً");

    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from(
        { length: VIDEOS_PER_SERVICE },
        (_, n) => `
        <button class="vcard tilt" type="button" data-src="videos/${id}/${n + 1}.mp4" aria-label="${s.svc_names[idx]} ${n + 1}">
          <video preload="metadata" muted playsinline loop src="videos/${id}/${n + 1}.mp4"></video>
          <span class="play">
            <span class="play-icon">▶</span>
            <span class="tag">#0${n + 1}</span>
          </span>
        </button>`
      ).join("");

      return `
        <div class="pf-service">
          <h3>${s.svc_names[idx]}</h3>
          <div class="videos">${cards}</div>
        </div>`;
    }).join("");

    wrap.querySelectorAll(".vcard").forEach((card) => {
      const video = card.querySelector("video");
      const playIcon = card.querySelector(".play-icon");
      const tag = card.querySelector(".tag");

      const markSoon = () => {
        if (card.dataset.soon === "true") return;
        card.classList.add("is-soon");
        card.setAttribute("data-soon", "true");
        if (playIcon) playIcon.textContent = "⏳";
        if (tag) tag.textContent = soonLabel;
        if (video) video.remove();
      };

      if (video) {
        // التعرف التلقائي على أبعاد الفيديو (أفقي 16:9 أو عمودي 9:16)
        video.addEventListener("loadedmetadata", () => {
          if (video.videoWidth && video.videoHeight && video.videoWidth > video.videoHeight) {
            card.classList.add("landscape");
          }
        });

        // تحويل الكارت إلى 3D "قريباً" في حال عدم وجود الفيديو بعد
        video.addEventListener("error", markSoon, true);

        // معاينة صامتة سلسة عند مرور الماوس
        card.addEventListener("pointerenter", () => {
          if (card.dataset.soon !== "true" && video.readyState >= 2) {
            video.muted = true;
            video.play().catch(() => {});
          }
        });

        card.addEventListener("pointerleave", () => {
          if (card.dataset.soon !== "true") {
            video.pause();
            video.currentTime = 0;
          }
        });
      }

      card.addEventListener("click", () => {
        if (card.dataset.soon === "true") return;
        openVideo(card);
      });
    });
  }

  function syncSelection() {
    const s = strings();
    document.querySelectorAll('input[type="checkbox"][value]').forEach((cb) => {
      cb.checked = isOn(cb.value);
      const row = cb.closest(".chk-row");
      if (row) row.classList.toggle("on", cb.checked);
      const pick = cb.closest(".pick");
      if (pick) pick.classList.toggle("on", cb.checked);
    });

    const summary = document.getElementById("sel-summary");
    if (summary) {
      summary.innerHTML = selected.length
        ? `<p class="sel-title">${s.f_selected} (${selected.length})</p>
           <ul>${selected.map((id) => `<li>${labelFor(id)}</li>`).join("")}</ul>`
        : `<p class="sel-title">${s.f_selected}</p>
           <p class="sel-empty">${s.f_none}</p>`;
    }

    const bar = document.getElementById("order-bar");
    if (bar) {
      bar.hidden = selected.length === 0;
      const countEl = document.getElementById("order-count");
      const goEl = document.getElementById("order-go");
      if (countEl) countEl.textContent = `${selected.length} ${s.order_count}`;
      if (goEl) goEl.textContent = s.order_go;
    }
  }

  function renderAll() {
    applyText();
    renderDropdown();
    renderCoreList();
    renderAllList();
    renderPortfolio();
    syncSelection();
    bindTilt();
  }

  // Event delegation for checkboxes
  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][value]')) {
      toggle(e.target.value);
    }
  });

  // ---------- 8. Country Dropdown (Instant Dialect Switcher) ----------
  const cdd = document.getElementById("cdd");
  const cddBtn = document.getElementById("cdd-btn");
  const cddList = document.getElementById("cdd-list");
  let activeIdx = -1;

  function highlight() {
    const items = cddList.querySelectorAll("li");
    items.forEach((li, i) => li.classList.toggle("active", i === activeIdx));
    if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  function openDD() {
    cdd.classList.add("open");
    cddBtn.setAttribute("aria-expanded", "true");
    activeIdx = Math.max(0, COUNTRIES.findIndex((c) => c.c === country));
    highlight();
  }

  function closeDD() {
    cdd.classList.remove("open");
    cddBtn.setAttribute("aria-expanded", "false");
  }

  function chooseCountry(code) {
    country = code;
    localStorage.setItem("t2_country", code);

    // إذا اختار الزائر دولة عربية، يتم تفعيل اللغة العربية تلقائياً لتظهر لهجة الدولة فوراً
    if (code && code !== "OTHER" && lang === "en") {
      lang = "ar";
      localStorage.setItem("t2_lang", "ar");
    }

    closeDD();
    renderAll();
    cddBtn.focus();
  }

  if (cddBtn && cddList) {
    cddBtn.addEventListener("click", () =>
      cdd.classList.contains("open") ? closeDD() : openDD()
    );

    cddList.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (li) chooseCountry(li.getAttribute("data-code"));
    });

    cddBtn.addEventListener("keydown", (e) => {
      const isOpen = cdd.classList.contains("open");
      if (e.key === "Escape") {
        closeDD();
        return;
      }
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        if (!isOpen) {
          openDD();
          return;
        }
        if (e.key === "ArrowDown") {
          activeIdx = (activeIdx + 1) % COUNTRIES.length;
          highlight();
        } else if (e.key === "ArrowUp") {
          activeIdx = (activeIdx - 1 + COUNTRIES.length) % COUNTRIES.length;
          highlight();
        } else if (COUNTRIES[activeIdx]) {
          chooseCountry(COUNTRIES[activeIdx].c);
        }
      }
    });

    document.addEventListener("pointerdown", (e) => {
      if (!cdd.contains(e.target)) closeDD();
    });
  }

  // ---------- 9. Language Toggle ----------
  const btnLang = document.getElementById("btn-lang");
  if (btnLang) {
    btnLang.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem("t2_lang", lang);
      renderAll();
    });
  }

  // ---------- 10. Cinema Video Modal ----------
  const videoModal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const videoMsg = document.getElementById("video-msg");

  function openVideo(btn) {
    if (!videoModal || !player) return;
    if (videoMsg) videoMsg.hidden = true;
    player.onerror = () => {
      if (videoMsg) {
        videoMsg.textContent = strings().portfolio_soon;
        videoMsg.hidden = false;
      }
    };
    player.src = btn.getAttribute("data-src");
    videoModal.hidden = false;
    player.play().catch(() => {});
  }

  function closeVideo() {
    if (!videoModal || !player) return;
    player.pause();
    player.removeAttribute("src");
    player.load();
    videoModal.hidden = true;
  }

  const videoCloseBtn = document.getElementById("video-close");
  if (videoCloseBtn) videoCloseBtn.addEventListener("click", closeVideo);
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideo();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVideo();
      closeDD();
    }
  });

  // ---------- 11. Mobile Menu ----------
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("btn-menu");
  if (nav && menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ---------- 12. Quote Form → WhatsApp Integration ----------
  const form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const s = strings();
      const err = form.querySelector(".err");
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.replace(/[^\d+]/g, "");

      if (!name || phone.replace(/\D/g, "").length < 8) {
        err.textContent = s.f_err;
        err.style.display = "block";
        return;
      }
      if (selected.length === 0) {
        err.textContent = s.f_err_svc;
        err.style.display = "block";
        return;
      }
      err.style.display = "none";

      const pkgSel = document.getElementById("pkg");
      const biz = document.getElementById("biz").value.trim() || "-";
      const notes = document.getElementById("notes").value.trim() || "-";

      const lines = [
        s.wa_header,
        "",
        `*${s.wa_pkg}:* ${pkgSel.options[pkgSel.selectedIndex].textContent}`,
        `*${s.wa_svc} (${selected.length}):*`,
        ...selected.map((id) => `• ${labelFor(id)}`),
        "",
        `*${s.wa_name}:* ${name}`,
        `*${s.wa_biz}:* ${biz}`,
        `*${s.wa_phone}:* ${phone}`,
        `*${s.wa_country}:* ${country ? FLAGS[country] + " " + countryName(country) : "-"}`,
        `*${s.wa_notes}:* ${notes}`
      ];

      window.open(
        "https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(lines.join("\n")),
        "_blank",
        "noopener"
      );
    });
  }

  // ---------- 13. 3D Spatial Tilt + Spotlight Physics ----------
  function bindTilt() {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    document.querySelectorAll(".tilt, .stat-item").forEach((el) => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = "1";

      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1000px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(14px)`;
        el.style.setProperty("--mx", ((x + 0.5) * 100).toFixed(1) + "%");
        el.style.setProperty("--my", ((y + 0.5) * 100).toFixed(1) + "%");
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ---------- 14. 3D Three.js Hero Logo (Luxury Extruded Metallic Mesh) ----------
  function heroLogo() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch (e) {
      return; // يبقى الشعار الـ 3D الاحتياطي في حال عدم دعم WebGL
    }

    const W = box.clientWidth || 420;
    const H = box.clientHeight || 420;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
    camera.position.z = 7.4;

    // إضاءة ثلاثية الأبعاد احترافية (Ambient + Key + Gold Rim Light)
    scene.add(new THREE.AmbientLight(0xffffff, 0.85));

    const keyLight = new THREE.DirectionalLight(0xfff8e7, 1.15);
    keyLight.position.set(4, 5, 7);
    scene.add(keyLight);

    const goldLight = new THREE.PointLight(0xc9a227, 1.6, 18);
    goldLight.position.set(-3, -2, 4);
    scene.add(goldLight);

    const group = new THREE.Group();
    scene.add(group);

    // حلقة مدارية ثلاثية الأبعاد ذهبية حول اللوجو
    const ringGeo = new THREE.TorusGeometry(2.15, 0.018, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.85,
      roughness: 0.2,
      transparent: true,
      opacity: 0.55
    });
    const haloRing = new THREE.Mesh(ringGeo, ringMat);
    haloRing.rotation.x = Math.PI * 0.38;
    scene.add(haloRing);

    // تحميل اللوجو وبناء الطبقات ثلاثية الأبعاد (24 طبقة مجسمة)
    new THREE.TextureLoader().load(
      "logo.png",
      (tex) => {
        const fb = box.querySelector("img.fallback");
        if (fb) fb.remove();
        box.appendChild(renderer.domElement);

        const geo = new THREE.PlaneGeometry(3.45, 3.45);
        const layers = 24;
        const depth = 0.28;

        for (let i = 0; i < layers; i++) {
          const isFront = i === layers - 1;
          const isBack = i === 0;
          const mat =
            isFront || isBack
              ? new THREE.MeshStandardMaterial({
                  map: tex,
                  transparent: true,
                  alphaTest: 0.3,
                  roughness: 0.28,
                  metalness: 0.55
                })
              : new THREE.MeshStandardMaterial({
                  map: tex,
                  color: 0xc9a227,
                  transparent: true,
                  alphaTest: 0.35,
                  roughness: 0.35,
                  metalness: 0.75
                });

          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.z = (i / (layers - 1)) * depth - depth / 2;
          group.add(mesh);
        }
      },
      undefined,
      () => {
        // في حال فتح الموقع محلياً بدون سيرفر ومنع المتصفح للـ Texture، يظل شعار الـ 3D CSS ظاهراً بأناقة
      }
    );

    let tx = 0, ty = 0, rx = 0, ry = 0;
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("pointermove", (e) => {
        const r = box.getBoundingClientRect();
        ty = ((e.clientX - (r.left + r.width / 2)) / r.width) * 0.85;
        tx = ((e.clientY - (r.top + r.height / 2)) / r.height) * 0.55;
        goldLight.position.x = ty * 5;
        goldLight.position.y = -tx * 5;
      });
      hero.addEventListener("pointerleave", () => {
        tx = 0;
        ty = 0;
      });
    }

    window.addEventListener("resize", () => {
      const w = box.clientWidth || W;
      const h = box.clientHeight || H;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });

    const clock = new THREE.Clock();
    (function loop() {
      requestAnimationFrame(loop);
      const time = clock.getElapsedTime();
      rx += (tx - rx) * 0.08;
      ry += (ty - ry) * 0.08;

      group.rotation.x = rx;
      group.rotation.y = ry + (reduce ? 0 : Math.sin(time * 0.65) * 0.18);
      group.position.y = reduce ? 0 : Math.sin(time * 1.15) * 0.12;

      if (!reduce) {
        haloRing.rotation.z = time * 0.22;
        haloRing.rotation.y = Math.sin(time * 0.5) * 0.15;
      }

      renderer.render(scene, camera);
    })();
  }

  // ---------- 15. 3D Background Particles (Dual-Depth Gold & Navy Dust) ----------
  function particles() {
    const canvas = document.getElementById("bg");
    if (!canvas || !window.THREE) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    } catch (e) {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300);
    camera.position.z = 45;

    const createLayer = (count, color, size, opacity) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 140;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 95;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 95;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity });
      return new THREE.Points(geo, mat);
    };

    const goldPoints = createLayer(260, 0xc9a227, 0.38, 0.72);
    const navyPoints = createLayer(140, 0x14213d, 0.28, 0.35);
    scene.add(goldPoints);
    scene.add(navyPoints);

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);
    resize();

    let scrollY = 0;
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    }, { passive: true });

    (function loop() {
      requestAnimationFrame(loop);
      if (!reduce) {
        goldPoints.rotation.y += 0.00065;
        navyPoints.rotation.y -= 0.0004;
      }
      goldPoints.position.y = scrollY * 0.012;
      navyPoints.position.y = scrollY * 0.007;
      renderer.render(scene, camera);
    })();
  }

  // ---------- 16. Initialize Everything ----------
  renderAll();
  if (window.THREE) {
    heroLogo();
    particles();
  }
  if (!country) openDD();
})();
