/**
 * ============================================================================
 * T2 DIGITAL MARKETING AGENCY — 3D INTERACTIVE ENGINE & ZERO-CACHE STATE (app.js)
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

  // ---------- 1. مسح أي ذاكرة قديمة معلقة عشان يبدأ الموقع من جديد دائماً ----------
  try {
    localStorage.removeItem("t2_sel");
    localStorage.removeItem("t2_country");
    localStorage.removeItem("t2_lang");
    sessionStorage.clear();
  } catch (e) {}

  let lang = "ar";
  let country = null;
  let selected = [];

  // ---------- 2. دالة تصفير الاختيارات والنماذج بالكامل ----------
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

  // ضمان التصفير حتى لو المتصفح رجع للصفحة بزر الـ Back (bfcache)
  window.addEventListener("pageshow", () => {
    resetAllSelectionsAndForm();
  });

  // ---------- 3. جلب النصوص واللهجة الصحيحة بدون أي تضارب ----------
  function strings() {
    if (lang === "en") return PACKS.EN || {};
    const cObj = COUNTRIES.find((x) => x.c === country);
    const packKey = cObj ? cObj.pack : "MSA";
    return Object.assign({}, PACKS.MSA || {}, PACKS[packKey] || {});
  }

  const countryObj = (code) => COUNTRIES.find((x) => x.c === code);
  const countryName = (code) => {
    const c = countryObj(code);
    return c ? (lang === "en" ? c.en : c.ar) : "";
  };

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

  // ---------- 4. بناء عجلة الدول ثلاثية الأبعاد (3D Country Wheel Gate) ----------
  function initCountryWheelGate() {
    const gate = document.getElementById("country-gate");
    const wheelRing = document.getElementById("wheel-ring");
    const centerIcon = document.getElementById("wheel-center-icon");
    const grid = document.getElementById("gate-countries");
    const openBtn = document.getElementById("open-wheel-btn");
    const enBtn = document.getElementById("gate-en-btn");

    if (!gate || !grid) return;

    // توزيع أعلام الدول على محيط العجلة الدوارة
    if (wheelRing) {
      const wheelCountries = COUNTRIES.slice(0, 10);
      const radius = 68;
      wheelRing.innerHTML = wheelCountries
        .map((c, idx) => {
          const angle = (idx / wheelCountries.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return `<span class="wheel-flag-node" style="transform: translate(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px))">${c.flag}</span>`;
        })
        .join("");
    }

    // بناء أزرار الدول
    grid.innerHTML = COUNTRIES.map(
      (c) => `
      <button type="button" class="gate-country-btn ${c.c === country ? "selected" : ""}" data-code="${c.c}">
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
      if (wheelRing) {
        wheelRing.classList.add("spinning-fast");
      }

      setTimeout(() => {
        selectCountryAndTransform(code, "ar");
        gate.classList.add("hidden");
        if (wheelRing) wheelRing.classList.remove("spinning-fast");
        if (centerIcon) centerIcon.style.transform = "";
      }, 360);
    });

    if (enBtn) {
      enBtn.addEventListener("click", () => {
        selectCountryAndTransform(country || "OTHER", "en");
        gate.classList.add("hidden");
      });
    }

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        gate.classList.remove("hidden");
      });
    }
  }

  function selectCountryAndTransform(code, targetLang) {
    country = code;
    if (targetLang) lang = targetLang;
    renderAll();
  }

  // ---------- 5. تحديث النصوص والهوية المحلية المتجاوبة مع الدولة ----------
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

    // تحديث زر الدولة في الهيدر
    const flagEl = document.getElementById("current-flag");
    const labelEl = document.getElementById("current-country-label");
    if (flagEl) flagEl.textContent = cObj ? cObj.flag : "🌍";
    if (labelEl) {
      labelEl.textContent = cObj
        ? isEn
          ? cObj.en
          : cObj.ar
        : s.country_pick;
    }

    // تحديث شريط الهوية المحلية والأيقونات الخاصة بكل دولة
    const vibeBar = document.getElementById("country-vibe-bar");
    const floatBadge = document.getElementById("country-float-badge");
    const vibe = (country && COUNTRY_VIBES[country]) || COUNTRY_VIBES.DEFAULT;

    if (vibeBar && vibe) {
      vibeBar.innerHTML = vibe.chips
        .map((chipText) => `<span class="vibe-chip">${chipText}</span>`)
        .join("");
    }
    if (floatBadge && vibe) {
      floatBadge.innerHTML = `<span>${vibe.floatBadge}</span>`;
    }

    // تحديث مفتاح الهاتف
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      phoneInput.placeholder = PHONE_META[country] || PHONE_META.EG;
    }

    const langBtn = document.getElementById("btn-lang");
    if (langBtn && s.btn_lang) langBtn.textContent = s.btn_lang;
  }

  // ---------- 6. بناء كروت الخدمات الـ 3D ----------
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
          <span class="pick-icon-box">${SVC_ICONS[i]}</span>
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

  // ---------- 7. بناء البورتفوليو ثلاثي الأبعاد ----------
  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    if (!wrap || !Array.isArray(s.svc_names)) return;

    const soonLabel = s.portfolio_soon || "عرض تفاعلي · قريباً";

    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from(
        { length: VIDEOS_PER_SERVICE },
        (_, n) => `
        <button class="vcard tilt" type="button" data-src="videos/${id}/${n + 1}.mp4" aria-label="${s.svc_names[idx]} ${n + 1}">
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
          if (video.videoWidth > video.videoHeight) {
            card.classList.add("landscape");
          }
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
    bindTilt();
  }

  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][value]')) {
      toggle(e.target.value);
    }
  });

  // أزرار مسح الاختيارات الفوري
  const clearBtn = document.getElementById("clear-sel-btn");
  if (clearBtn) clearBtn.addEventListener("click", resetAllSelectionsAndForm);

  const orderResetBtn = document.getElementById("order-reset");
  if (orderResetBtn) orderResetBtn.addEventListener("click", resetAllSelectionsAndForm);

  // تبديل اللغة
  const btnLang = document.getElementById("btn-lang");
  if (btnLang) {
    btnLang.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      renderAll();
    });
  }

  // ---------- 8. إرسال رسالة واتساب منسقة بالبراويز والفواصل + تصفير الموقع بعدها ----------
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

      // تصفير جميع الاختيارات والحقول فوراً بعد الطلب عشان يرجع الموقع من جديد
      setTimeout(() => {
        resetAllSelectionsAndForm();
      }, 400);
    });
  }

  // ---------- 9. مشغل الفيديو والموبايل منيو ----------
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
  }

  // ---------- 10. حركات الـ 3D للكروت مع الماوس والـ Scroll ----------
  function bindTilt() {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    document.querySelectorAll(".tilt").forEach((el) => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = "1";

      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1000px) rotateX(${(-y * 12).toFixed(2)}deg) rotateY(${(x * 14).toFixed(2)}deg) translateZ(16px)`;
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ---------- 11. مجسم الـ 3D الرئيسي في الهيرو (Three.js) ----------
  function heroLogo() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (e) {
      return;
    }

    const W = box.clientWidth || 420;
    const H = box.clientHeight || 420;
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

    // حلقتان مداريتان ثلاثيتا الأبعاد تدلان على التفاعل الرقمي والسوشيال ميديا
    const ringGeo1 = new THREE.TorusGeometry(2.25, 0.022, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.85, roughness: 0.2 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.55, 0.014, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({ color: 0x14213d, metalness: 0.7, roughness: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI * 0.28;
    scene.add(ring2);

    new THREE.TextureLoader().load("logo.png", (tex) => {
      const fb = box.querySelector("img.fallback");
      if (fb) fb.remove();
      box.appendChild(renderer.domElement);

      const geo = new THREE.PlaneGeometry(3.3, 3.3);
      const layers = 24;
      const depth = 0.3;

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
      group.rotation.y = Math.sin(t * 0.8) * 0.28;
      group.rotation.x = Math.cos(t * 0.6) * 0.12;
      group.position.y = Math.sin(t * 1.3) * 0.14;
      ring1.rotation.z = t * 0.3;
      ring2.rotation.x = -t * 0.22;
      renderer.render(scene, camera);
    })();
  }

  // ---------- 12. التشغيل الأولي ----------
  document.addEventListener("DOMContentLoaded", () => {
    resetAllSelectionsAndForm();
    initCountryWheelGate();
    renderAll();
    if (window.THREE) {
      heroLogo();
    }
  });
})();
