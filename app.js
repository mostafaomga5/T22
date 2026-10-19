/**
 * ============================================================================
 * T2 DIGITAL MARKETING AGENCY — LARGE STAGE & SMART ASSET ENGINE (app.js)
 * ============================================================================
 */
(function () {
  "use strict";

  const I18N = window.T2_I18N || { PACKS: { MSA: {}, EN: {} }, COUNTRIES: [], COUNTRY_VIBES: {} };
  const { PACKS, COUNTRIES, COUNTRY_VIBES } = I18N;

  const WA_DEFAULT = "201090960743";
  const SVC_IDS = ["smm", "web", "ai", "ads", "pages"];
  const SVC_ICONS = ["📱", "💻", "🤖", "📈", "⚡"];
  const VIDEOS_PER_SERVICE = 3;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ============================================================================
  // 🌟 دليل الصور والستيكرات الكبيرة (دعم شامل باللغة العربية والإنجليزية والامتدادات) 🌟
  // ============================================================================
  const COUNTRY_ASSETS = {
    SA: {
      bgCandidates: ["السعودية-خلفية.png", "السعودية-خلفية.webp", "saudi-bg.png"],
      characterCandidates: ["السعودية-شخصية.png", "السعودية-شخصية.webp", "saudi-character.png"],
      sideStickers: [
        { candidates: ["السعودية-ستيكر-01.png", "saudi-sticker-01.png"], title: "هوية السوق السعودي" },
        { candidates: ["السعودية-ستيكر-02.png", "saudi-sticker-02.png"], title: "نمو المبيعات" },
        { candidates: ["السعودية-ستيكر-03.png", "saudi-sticker-03.png"], title: "تريند المملكة" }
      ],
      serviceIcons: [
        ["السعودية-ستيكر-04.png", "saudi-sticker-04.png"],
        ["السعودية-ستيكر-01.png", "saudi-sticker-01.png"],
        ["السعودية-ستيكر-05.png", "saudi-sticker-05.png"],
        ["السعودية-ستيكر-02.png", "saudi-sticker-02.png"],
        ["السعودية-ستيكر-03.png", "saudi-sticker-03.png"]
      ]
    },
    AE: {
      bgCandidates: ["الإمارات-خلفية.webp", "الامارات-خلفية.webp", "uae-bg.webp"],
      characterCandidates: ["الإمارات-شخصية.webp", "الامارات-شخصية.webp", "uae-character.webp"],
      sideStickers: [
        { candidates: ["الإمارات-ستيكر-01.webp", "الامارات-ستيكر-01.webp", "uae-sticker-01.webp"], title: "أبراج دبي" },
        { candidates: ["الإمارات-ستيكر-02.webp", "الامارات-ستيكر-02.webp", "uae-sticker-02.webp"], title: "فخامة التراث" },
        { candidates: ["الإمارات-ستيكر-06.webp", "الامارات-ستيكر-06.webp", "uae-sticker-06.webp"], title: "مضاعفة الأرباح" }
      ],
      serviceIcons: [
        ["الإمارات-ستيكر-04.webp", "الامارات-ستيكر-04.webp", "uae-sticker-04.webp"],
        ["الإمارات-ستيكر-01.webp", "الامارات-ستيكر-01.webp", "uae-sticker-01.webp"],
        ["الإمارات-ستيكر-05.webp", "الامارات-ستيكر-05.webp", "uae-sticker-05.webp"],
        ["الإمارات-ستيكر-06.webp", "الامارات-ستيكر-06.webp", "uae-sticker-06.webp"],
        ["الإمارات-ستيكر-03.webp", "الامارات-ستيكر-03.webp", "uae-sticker-03.webp"]
      ]
    }
  };

  // نظام تتبع وإيجاد أصح مسار للصورة على سيرفر GitHub
  window.__t2FallbackImg = function (imgEl) {
    const list = (imgEl.getAttribute("data-srcs") || "").split("|").filter(Boolean);
    const idx = Number(imgEl.getAttribute("data-idx") || "0") + 1;
    if (idx < list.length) {
      imgEl.setAttribute("data-idx", String(idx));
      imgEl.src = list[idx];
    } else {
      const parent = imgEl.closest(".side-sticker-card, .side-character-card, .showcase-card");
      if (parent) parent.style.display = "none";
    }
  };

  function buildSmartImgTag(candidates, altText) {
    if (!candidates || !candidates.length) return "";
    const first = candidates[0];
    const joined = candidates.join("|");
    return `<img src="${first}" data-srcs="${joined}" data-idx="0" alt="${altText || ""}" onerror="window.__t2FallbackImg(this)">`;
  }

  const PHONE_META = {
    SA: "+966 5X XXX XXXX",
    AE: "+971 5X XXX XXXX",
    EG: "+20 10X XXX XXXX",
    KW: "+965 XXXX XXXX",
    QA: "+974 XXXX XXXX",
    BH: "+973 XXXX XXXX",
    OM: "+968 XXXX XXXX",
    JO: "+962 7X XXX XXXX",
    LB: "+961 XX XXX XXX",
    IQ: "+964 7XX XXX XXXX",
    MA: "+212 6XX-XXXXXX",
    OTHER: "+XX XXX XXX XXXX"
  };

  try {
    localStorage.removeItem("t2_sel");
    localStorage.removeItem("t2_country");
    localStorage.removeItem("t2_lang");
    sessionStorage.clear();
  } catch (e) {}

  let lang = "ar";
  let country = null;
  let selected = [];

  function resetAllSelectionsAndForm() {
    selected = [];
    const form = document.getElementById("quote-form");
    if (form) form.reset();

    document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.checked = false;
    });

    const err = document.getElementById("form-err");
    if (err) err.style.display = "none";

    syncSelection();
  }

  window.addEventListener("pageshow", resetAllSelectionsAndForm);

  function strings() {
    if (lang === "en") return PACKS.EN || {};
    const cObj = COUNTRIES.find((x) => x.c === country);
    const packKey = cObj ? cObj.pack : "MSA";
    return Object.assign({}, PACKS.MSA || {}, PACKS[packKey] || {});
  }

  const countryObj = (code) => COUNTRIES.find((x) => x.c === code);

  function labelFor(id) {
    const s = strings();
    if (id[0] === "c") return s["s" + (Number(id.slice(1)) + 1) + "_t"] || id;
    const [g, i] = id.slice(1).split("_").map(Number);
    return s.groups && s.groups[g] && s.groups[g].i ? s.groups[g].i[i] : id;
  }

  function toggle(id) {
    const idx = selected.indexOf(id);
    if (idx >= 0) selected.splice(idx, 1);
    else selected.push(id);
    syncSelection();
  }

  function isOn(id) {
    return selected.indexOf(id) >= 0;
  }

  // ---------- عرض الصور الضخمة في مسرح الجانب والشريط تحت الهيرو ----------
  function renderCountryVisualAssets() {
    const podium = document.getElementById("side-stickers-podium");
    const strip = document.getElementById("country-showcase-strip");
    const stripInner = document.getElementById("showcase-inner");
    const companion = document.getElementById("floating-companion");
    const heroBg = document.getElementById("hero-country-bg");

    if (!podium) return;

    const assets = country && COUNTRY_ASSETS[country];

    if (heroBg) {
      if (assets && assets.bgCandidates && assets.bgCandidates.length) {
        const bgImg = new Image();
        let bgIdx = 0;
        const tryLoadBg = () => {
          if (bgIdx >= assets.bgCandidates.length) {
            heroBg.style.backgroundImage = "none";
            return;
          }
          bgImg.src = assets.bgCandidates[bgIdx];
        };
        bgImg.onload = () => {
          heroBg.style.backgroundImage = `url("${bgImg.src}")`;
        };
        bgImg.onerror = () => {
          bgIdx++;
          tryLoadBg();
        };
        tryLoadBg();
      } else {
        heroBg.style.backgroundImage = "none";
      }
    }

    if (!assets) {
      const vibe = (country && COUNTRY_VIBES[country]) || COUNTRY_VIBES.DEFAULT;
      podium.innerHTML = `
        <div class="side-sticker-card side-pos-0">🎬 <span>Reels & TikTok</span></div>
        <div class="side-sticker-card side-pos-1">📈 <span>ROAS +480%</span></div>
        <div class="side-sticker-card side-pos-2"><span>${vibe ? vibe.floatBadge : "🚀 Top Trend"}</span></div>
      `;
      if (strip) strip.hidden = true;
      if (companion) companion.hidden = true;
      return;
    }

    // بناء الستيكرات الكبيرة البارزة في الجانب
    const stickerCards = assets.sideStickers
      .map(
        (st, i) => `
      <div class="side-sticker-card side-pos-${i}">
        ${buildSmartImgTag(st.candidates, st.title)}
        <span>${st.title}</span>
      </div>`
      )
      .join("");

    // بناء الشخصية الرئيسية الضخمة
    const charCard = assets.characterCandidates
      ? `<div class="side-character-card">
           ${buildSmartImgTag(assets.characterCandidates, "المستشار الرقمي")}
         </div>`
      : "";

    podium.innerHTML = stickerCards + charCard;

    if (strip && stripInner) {
      strip.hidden = false;
      stripInner.innerHTML = assets.sideStickers
        .map(
          (st) => `
        <div class="showcase-card">
          ${buildSmartImgTag(st.candidates, st.title)}
          <span>${st.title}</span>
        </div>`
        )
        .join("");
    }

    if (companion && assets.characterCandidates) {
      companion.hidden = false;
      companion.innerHTML = buildSmartImgTag(assets.characterCandidates, "");
    }
  }

  function initCountryWheelGate() {
    const gate = document.getElementById("country-gate");
    const wheelRing = document.getElementById("wheel-ring");
    const centerIcon = document.getElementById("wheel-center-icon");
    const grid = document.getElementById("gate-countries");
    const openBtn = document.getElementById("open-wheel-btn");
    const enBtn = document.getElementById("gate-en-btn");

    if (!gate || !grid) return;

    if (wheelRing) {
      const wheelCountries = COUNTRIES.slice(0, 10);
      const radius = 64;
      wheelRing.innerHTML = wheelCountries
        .map((c, idx) => {
          const angle = (idx / wheelCountries.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return `<span class="wheel-flag-node" style="transform: translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)">${c.flag}</span>`;
        })
        .join("");
    }

    grid.innerHTML = COUNTRIES.map(
      (c) => `
      <button type="button" class="gate-country-btn" data-code="${c.c}">
        <span class="flag">${c.flag}</span>
        <span>${c.ar}</span>
      </button>`
    ).join("");

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".gate-country-btn");
      if (!btn) return;
      const code = btn.getAttribute("data-code");
      const chosen = countryObj(code);

      if (centerIcon && chosen) {
        centerIcon.textContent = chosen.flag;
        centerIcon.style.transform = "scale(1.22)";
      }
      if (wheelRing) wheelRing.classList.add("spinning-fast");

      setTimeout(() => {
        country = code;
        lang = "ar";
        renderAll();
        gate.classList.add("hidden");
        if (wheelRing) wheelRing.classList.remove("spinning-fast");
        if (centerIcon) centerIcon.style.transform = "";
      }, 320);
    });

    if (enBtn) {
      enBtn.addEventListener("click", () => {
        country = country || "OTHER";
        lang = "en";
        renderAll();
        gate.classList.add("hidden");
      });
    }

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        gate.classList.remove("hidden");
      });
    }
  }

  function applyTextAndCulture() {
    const s = strings();
    const isEn = lang === "en";
    const cObj = countryObj(country);

    document.documentElement.lang = isEn ? "en" : "ar";
    document.documentElement.dir = isEn ? "ltr" : "rtl";

    document.querySelectorAll("[data-i]").forEach((el) => {
      const key = el.getAttribute("data-i");
      if (typeof s[key] === "string") el.textContent = s[key];
    });

    const flagEl = document.getElementById("current-flag");
    const labelEl = document.getElementById("current-country-label");
    if (flagEl) flagEl.textContent = cObj ? cObj.flag : "🌍";
    if (labelEl) {
      labelEl.textContent = cObj ? (isEn ? cObj.en : cObj.ar) : s.country_pick;
    }

    const vibeBar = document.getElementById("country-vibe-bar");
    const vibe = (country && COUNTRY_VIBES[country]) || COUNTRY_VIBES.DEFAULT;
    if (vibeBar && vibe) {
      vibeBar.innerHTML = vibe.chips
        .map((chipText) => `<span class="vibe-chip">${chipText}</span>`)
        .join("");
    }

    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      phoneInput.placeholder = PHONE_META[country] || PHONE_META.EG;
    }

    const langBtn = document.getElementById("btn-lang");
    if (langBtn && s.btn_lang) langBtn.textContent = s.btn_lang;

    renderCountryVisualAssets();
  }

  // ---------- كروت الخدمات الأساسية بأيقونات 3D ضخمة مخصصة للدولة ----------
  function renderCoreList() {
    const s = strings();
    const listEl = document.getElementById("services-list");
    if (!listEl) return;

    const assets = country && COUNTRY_ASSETS[country];

    listEl.innerHTML = [0, 1, 2, 3, 4]
      .map((i) => {
        const id = "c" + i;
        const customIconCandidates = assets && assets.serviceIcons && assets.serviceIcons[i];
        const iconContent = customIconCandidates
          ? buildSmartImgTag(customIconCandidates, s["s" + (i + 1) + "_t"])
          : SVC_ICONS[i];

        return `
      <li class="pick ${isOn(id) ? "on" : ""}" data-id="${id}">
        <label>
          <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
          <span class="pick-icon-box">${iconContent}</span>
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
      <div class="group">
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

  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    if (!wrap || !Array.isArray(s.svc_names)) return;

    const soonLabel = s.portfolio_soon || "عرض تفاعلي · قريباً";

    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from(
        { length: VIDEOS_PER_SERVICE },
        (_, n) => `
        <button class="vcard" type="button" data-src="videos/${id}/${n + 1}.mp4" aria-label="${s.svc_names[idx]} ${n + 1}">
          <video preload="metadata" muted playsinline loop src="videos/${id}/${n + 1}.mp4"></video>
          <span class="play">
            <span class="play-icon">${SVC_ICONS[idx]}</span>
            <span class="tag">${s.svc_names[idx]} #0${n + 1}</span>
          </span>
        </button>`
      ).join("");

      return `
        <div class="pf-service">
          <h3>${SVC_ICONS[idx]} ${s.svc_names[idx]}</h3>
          <div class="videos">${cards}</div>
        </div>`;
    }).join("");

    wrap.querySelectorAll(".vcard").forEach((card) => {
      const video = card.querySelector("video");
      const tag = card.querySelector(".tag");

      const markSoon = () => {
        if (card.dataset.soon === "true") return;
        card.classList.add("is-soon");
        card.setAttribute("data-soon", "true");
        if (tag) tag.textContent = soonLabel;
        if (video) video.remove();
      };

      if (video) {
        video.addEventListener("loadedmetadata", () => {
          if (video.videoWidth > video.videoHeight) card.classList.add("landscape");
        });
        video.addEventListener("error", markSoon, true);
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
    applyTextAndCulture();
    renderCoreList();
    renderAllList();
    renderPortfolio();
    syncSelection();
  }

  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][value]')) {
      toggle(e.target.value);
    }
  });

  const clearBtn = document.getElementById("clear-sel-btn");
  if (clearBtn) clearBtn.addEventListener("click", resetAllSelectionsAndForm);

  const orderResetBtn = document.getElementById("order-reset");
  if (orderResetBtn) orderResetBtn.addEventListener("click", resetAllSelectionsAndForm);

  const btnLang = document.getElementById("btn-lang");
  if (btnLang) {
    btnLang.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      renderAll();
    });
  }

  // ---------- إرسال رسالة واتساب بالبراويز والفواصل + تصفير الموقع ----------
  const form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const s = strings();
      const err = document.getElementById("form-err");
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();

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
      const pkgText = pkgSel.options[pkgSel.selectedIndex].textContent;
      const biz = document.getElementById("biz").value.trim() || "غير محدد";
      const notes = document.getElementById("notes").value.trim() || "لا توجد ملاحظات إضافية";
      const cObj = countryObj(country);
      const countryText = cObj ? `${cObj.flag} ${cObj.ar}` : "غير محدد";

      const coreChosen = selected.filter((id) => id.startsWith("c")).map((id) => labelFor(id));
      const subChosen = selected.filter((id) => id.startsWith("g")).map((id) => labelFor(id));

      const dateStr = new Date().toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      const formattedMessage = [
        "╔══════════════════════════╗",
        "   🌟 *T2 DIGITAL MARKETING AGENCY* 🌟",
        "        *طلب خطة وعرض سعر جديد*",
        "╚══════════════════════════╝",
        "",
        "┌─── 👤 *بيانات العميل* ───┐",
        `  • *الاسم:* ${name}`,
        `  • *النشاط / البراند:* ${biz}`,
        `  • *رقم الواتساب:* ${phone}`,
        `  • *الدولة:* ${countryText}`,
        `  • *تاريخ الطلب:* ${dateStr}`,
        "└────────────────────┘",
        "",
        "///===================///",
        "",
        "┌─── 📦 *الباقة المختارة* ───┐",
        `  💎 *${pkgText}*`,
        "└────────────────────┘",
        "",
        `┌─── 🚀 *الخدمات المطلوبة (${selected.length})* ───┐`,
        ...(coreChosen.length
          ? [
              "  📌 *الخدمات الأساسية:*",
              ...coreChosen.map((item, idx) => `     ${idx + 1}. ${item}`)
            ]
          : []),
        ...(subChosen.length
          ? [
              "",
              "  ✨ *الخدمات التفصيلية الإضافية:*",
              ...subChosen.map((item, idx) => `     ${idx + 1}. ${item}`)
            ]
          : []),
        "└────────────────────┘",
        "",
        "///===================///",
        "",
        "┌─── 📝 *ملاحظات وتفاصيل المشروع* ───┐",
        `  ${notes}`,
        "└────────────────────┘",
        "",
        "══════════════════════════",
        "✅ *تم الإرسال عبر المنصة التفاعلية لـ T2*"
      ].join("\n");

      window.open(
        "https://wa.me/" + WA_DEFAULT + "?text=" + encodeURIComponent(formattedMessage),
        "_blank",
        "noopener"
      );

      setTimeout(() => {
        resetAllSelectionsAndForm();
      }, 400);
    });
  }

  const videoModal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");

  function openVideo(btn) {
    if (!videoModal || !player) return;
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

  function heroLogo() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (e) {
      return;
    }

    const W = box.clientWidth || 320;
    const H = box.clientHeight || 320;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    camera.position.z = 7.4;

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const keyLight = new THREE.DirectionalLight(0xfff8e7, 1.25);
    keyLight.position.set(4, 5, 7);
    scene.add(keyLight);

    const goldLight = new THREE.PointLight(0xc9a227, 1.8, 20);
    goldLight.position.set(-3, -2, 4);
    scene.add(goldLight);

    const group = new THREE.Group();
    scene.add(group);

    const ringGeo1 = new THREE.TorusGeometry(2.15, 0.022, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.85, roughness: 0.2 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    scene.add(ring1);

    new THREE.TextureLoader().load("logo.png", (tex) => {
      const fb = box.querySelector("img.fallback");
      if (fb) fb.remove();
      box.appendChild(renderer.domElement);

      const geo = new THREE.PlaneGeometry(3.1, 3.1);
      const layers = 22;
      const depth = 0.28;

      for (let i = 0; i < layers; i++) {
        const isEdge = i === 0 || i === layers - 1;
        const mat = new THREE.MeshStandardMaterial({
          map: tex,
          color: isEdge ? 0xffffff : 0xc9a227,
          transparent: true,
          alphaTest: 0.3,
          roughness: 0.28,
          metalness: 0.65
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.z = (i / (layers - 1)) * depth - depth / 2;
        group.add(mesh);
      }
    });

    const clock = new THREE.Clock();
    (function loop() {
      requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      group.rotation.y = Math.sin(t * 0.8) * 0.26;
      group.rotation.x = Math.cos(t * 0.6) * 0.1;
      group.position.y = Math.sin(t * 1.3) * 0.12;
      ring1.rotation.z = t * 0.3;
      renderer.render(scene, camera);
    })();
  }

  document.addEventListener("DOMContentLoaded", () => {
    resetAllSelectionsAndForm();
    initCountryWheelGate();
    renderAll();
    if (window.THREE) {
      heroLogo();
    }
  });
})();
