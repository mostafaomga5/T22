(function () {
  "use strict";

  const { PACKS, COUNTRIES } = window.T2_I18N || { PACKS: { MSA: {} }, COUNTRIES: [] };
  const WA_DEFAULT = "201090960743";
  const WA_BY_COUNTRY = { SA: "", AE: "", EG: "201090960743" };
  const PHONE_META = {
    SA: "+966 5X XXX XXXX", AE: "+971 5X XXX XXXX", EG: "+20 10X XXX XXXX",
    KW: "+965 XXXX XXXX", QA: "+974 XXXX XXXX", BH: "+973 XXXX XXXX", OM: "+968 XXXX XXXX",
    JO: "+962 7X XXX XXXX", LB: "+961 XX XXX XXX", SY: "+963 9XX XXX XXX", PS: "+970 59X XXX XXX",
    IQ: "+964 7XX XXX XXXX", YE: "+967 7XX XXX XXX", MA: "+212 6XX-XXXXXX",
    DZ: "+213 5XX XX XX XX", TN: "+216 XX XXX XXX", LY: "+218 9X-XXXXXXX",
    SD: "+249 9X XXX XXXX", OTHER: "+XX XXX XXX XXXX"
  };
  const SVC_IDS = ["smm", "web", "ai", "ads", "pages"];
  const SVC_ICONS = ["i-smm", "i-web", "i-ai", "i-ads", "i-pages"];
  const VIDEOS_PER_SERVICE = 3;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  // ============ State ============
  let lang = localStorage.getItem("t2_lang") || "ar";
  let country = localStorage.getItem("t2_country") || null;
  if (!COUNTRIES.some(c => c.c === country)) country = null;
  let selected = []; // ✅ In-memory only → resets on refresh

  // ============ Strings ============
  function strings() {
    if (lang === "en") return PACKS.EN || {};
    const c = COUNTRIES.find(x => x.c === country);
    return (c && PACKS[c.pack]) || PACKS.MSA || {};
  }
  const countryName = (code) => {
    const c = COUNTRIES.find(x => x.c === code);
    return c ? (lang === "en" ? c.en : c.ar) : "";
  };
  const waNumber = () => (country && WA_BY_COUNTRY[country]) || WA_DEFAULT;
  const flagURL = (code, size = 40) => code === "OTHER"
    ? `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%23d4af37"/><text x="20" y="26" text-anchor="middle" font-size="18" font-weight="bold" fill="white">?</text></svg>`
    : `https://flagcdn.com/w${size}/${code.toLowerCase()}.png`;

  // ============ Selection ============
  function labelFor(id) {
    const s = strings();
    if (id[0] === "c") return s["s" + (Number(id.slice(1)) + 1) + "_t"] || id;
    const [g, i] = id.slice(1).split("_").map(Number);
    return (s.groups && s.groups[g] && s.groups[g].i) ? s.groups[g].i[i] : id;
  }
  function toggle(id) {
    const idx = selected.indexOf(id);
    if (idx >= 0) selected.splice(idx, 1);
    else selected.push(id);
    syncSelection();
  }
  function isOn(id) { return selected.indexOf(id) >= 0; }

  // ============ Apply text ============
  function applyText() {
    const s = strings();
    const isEn = lang === "en";
    document.documentElement.lang = isEn ? "en" : "ar";
    document.documentElement.dir = isEn ? "ltr" : "rtl";
    document.title = isEn ? "T2 | Digital Marketing & AI" : "T2 | حلول التسويق الرقمي";

    document.querySelectorAll("[data-i]").forEach(el => {
      const v = s[el.getAttribute("data-i")];
      if (typeof v === "string") el.textContent = v;
    });

    const badge = document.querySelector(".eyebrow span:last-child");
    if (badge && s.hero_badge) badge.textContent = s.hero_badge;

    const phone = document.getElementById("phone");
    if (phone) phone.placeholder = PHONE_META[country] || PHONE_META.EG;

    const langBtn = document.getElementById("btn-lang");
    if (langBtn && s.btn_lang) langBtn.textContent = s.btn_lang;

    const fw = document.getElementById("footer-wa");
    if (fw) fw.href = "https://wa.me/" + waNumber();
  }

  // ============ Dropdown ============
  function renderDropdown() {
    const s = strings();
    const btn = document.getElementById("cdd-btn");
    const list = document.getElementById("cdd-list");
    if (!btn || !list) return;

    const flagEl = document.getElementById("cdd-flag");
    const labelEl = document.getElementById("cdd-label");
    if (country) {
      flagEl.innerHTML = `<img src="${flagURL(country, 40)}" alt="">`;
      labelEl.textContent = countryName(country);
    } else {
      flagEl.innerHTML = `<svg width="16" height="16"><use href="#i-globe"/></svg>`;
      labelEl.textContent = s.country_pick || "الدولة";
    }

    list.innerHTML = COUNTRIES.map(c => `
      <li data-code="${c.c}" aria-selected="${c.c === country}" role="option">
        <img src="${flagURL(c.c, 40)}" alt="" loading="lazy">
        <span>${lang === "en" ? c.en : c.ar}</span>
      </li>
    `).join("");
  }

  // ============ Services ============
  function renderCoreList() {
    const s = strings();
    const el = document.getElementById("services-list");
    if (!el) return;
    el.innerHTML = [0,1,2,3,4].map(i => {
      const id = "c" + i;
      return `
        <li class="pick ${isOn(id) ? "on" : ""}" data-id="${id}">
          <label>
            <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
            <div class="pick-icon">
              <svg width="26" height="26"><use href="#${SVC_ICONS[i]}"/></svg>
            </div>
            <span class="pick-check"><svg><use href="#i-check"/></svg></span>
            <h3>${s["s" + (i + 1) + "_t"] || ""}</h3>
            <p>${s["s" + (i + 1) + "_d"] || ""}</p>
          </label>
        </li>`;
    }).join("");
    bindSpotlight();
  }

  function renderAllList() {
    const s = strings();
    const el = document.getElementById("groups");
    if (!el || !Array.isArray(s.groups)) return;
    el.innerHTML = s.groups.map((g, gi) => `
      <div class="group reveal">
        <h3>${g.t}</h3>
        <ul class="chk">
          ${g.i.map((item, ii) => {
            const id = "g" + gi + "_" + ii;
            return `<li>
              <label class="chk-row ${isOn(id) ? "on" : ""}">
                <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
                <span class="box"><svg><use href="#i-check"/></svg></span>
                <span>${item}</span>
              </label>
            </li>`;
          }).join("")}
        </ul>
      </div>
    `).join("");
  }

  // ============ Portfolio ============
  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    if (!wrap || !Array.isArray(s.svc_names)) return;
    const soon = s.portfolio_soon || "قريباً";

    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from({ length: VIDEOS_PER_SERVICE }, (_, n) => `
        <button class="vcard" type="button" data-src="videos/${id}/${n + 1}.mp4" aria-label="${s.svc_names[idx]} ${n + 1}">
          <video preload="metadata" muted playsinline loop src="videos/${id}/${n + 1}.mp4"></video>
          <span class="play">
            <span class="play-icon"><svg><use href="#i-play"/></svg></span>
            <span class="tag">#0${n + 1}</span>
          </span>
        </button>
      `).join("");
      return `<div class="pf-service reveal"><h3>${s.svc_names[idx]}</h3><div class="videos">${cards}</div></div>`;
    }).join("");

    wrap.querySelectorAll(".vcard").forEach(card => {
      const video = card.querySelector("video");
      const icon = card.querySelector(".play-icon");
      const tag = card.querySelector(".tag");
      const markSoon = () => {
        if (card.dataset.soon === "true") return;
        card.classList.add("is-soon");
        card.dataset.soon = "true";
        if (icon) icon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`;
        if (tag) tag.textContent = soon;
        if (video) video.remove();
      };
      if (video) {
        video.addEventListener("loadedmetadata", () => {
          if (video.videoWidth > video.videoHeight) card.classList.add("landscape");
        });
        video.addEventListener("error", markSoon, true);
        if (!isTouch) {
          card.addEventListener("pointerenter", () => {
            if (card.dataset.soon !== "true" && video.readyState >= 2) {
              video.muted = true; video.play().catch(() => {});
            }
          });
          card.addEventListener("pointerleave", () => {
            if (card.dataset.soon !== "true") { video.pause(); video.currentTime = 0; }
          });
        }
      }
      card.addEventListener("click", () => {
        if (card.dataset.soon === "true") return;
        openVideo(card);
      });
    });
  }

  // ============ Sync ============
  function syncSelection() {
    const s = strings();
    document.querySelectorAll('input[type="checkbox"][value]').forEach(cb => {
      cb.checked = isOn(cb.value);
      const row = cb.closest(".chk-row"); if (row) row.classList.toggle("on", cb.checked);
      const pick = cb.closest(".pick"); if (pick) pick.classList.toggle("on", cb.checked);
    });

    const sum = document.getElementById("sel-summary");
    if (sum) {
      sum.innerHTML = selected.length
        ? `<p class="sel-title">${s.f_selected} (${selected.length})</p>
           <ul>${selected.map(id => `<li>${labelFor(id)}</li>`).join("")}</ul>`
        : `<p class="sel-title">${s.f_selected}</p><p class="sel-empty">${s.f_none}</p>`;
    }

    const bar = document.getElementById("order-bar");
    if (bar) {
      bar.hidden = selected.length === 0;
      const c = document.getElementById("order-count");
      const g = document.getElementById("order-go");
      if (c) c.textContent = `${selected.length} ${s.order_count}`;
      if (g) g.textContent = s.order_go;
    }
  }

  function renderAll() {
    applyText();
    renderDropdown();
    renderCoreList();
    renderAllList();
    renderPortfolio();
    syncSelection();
    initReveal();
    initCounters();
  }

  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][value]')) toggle(e.target.value);
  });

  // ============ Dropdown events ============
  const cdd = document.getElementById("cdd");
  const cddBtn = document.getElementById("cdd-btn");
  const cddList = document.getElementById("cdd-list");

  function closeDD() { cdd?.classList.remove("open"); cddBtn?.setAttribute("aria-expanded", "false"); }
  function openDD() { cdd?.classList.add("open"); cddBtn?.setAttribute("aria-expanded", "true"); }

  cddBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    cdd.classList.contains("open") ? closeDD() : openDD();
  });
  cddList?.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    chooseCountry(li.dataset.code);
  });
  document.addEventListener("click", (e) => {
    if (cdd && !cdd.contains(e.target)) closeDD();
  });

  function chooseCountry(code) {
    country = code;
    localStorage.setItem("t2_country", code);
    if (code && code !== "OTHER" && lang === "en") {
      lang = "ar"; localStorage.setItem("t2_lang", "ar");
    }
    closeDD();
    renderAll();
  }

  // ============ Language ============
  document.getElementById("btn-lang")?.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("t2_lang", lang);
    renderAll();
    splitHeroTitle();
  });

  // ============ Menu ============
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("btn-menu");
  menuBtn?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  // ============ Video modal ============
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const msg = document.getElementById("video-msg");
  function openVideo(btn) {
    if (!modal || !player) return;
    if (msg) msg.hidden = true;
    player.onerror = () => { if (msg) { msg.textContent = strings().portfolio_soon; msg.hidden = false; } };
    player.src = btn.dataset.src;
    modal.hidden = false;
    player.play().catch(() => {});
  }
  function closeVideo() {
    if (!modal || !player) return;
    player.pause(); player.removeAttribute("src"); player.load();
    modal.hidden = true;
  }
  document.getElementById("video-close")?.addEventListener("click", closeVideo);
  modal?.addEventListener("click", e => { if (e.target === modal) closeVideo(); });

  // ============ Form → WhatsApp ============
  const form = document.getElementById("quote-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = strings();
    const err = document.getElementById("form-err");
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.replace(/[^\d+]/g, "");

    if (!name || phone.replace(/\D/g, "").length < 8) {
      if (err) { err.textContent = s.f_err; err.classList.add("show"); }
      return;
    }
    if (selected.length === 0) {
      if (err) { err.textContent = s.f_err_svc; err.classList.add("show"); }
      return;
    }
    err?.classList.remove("show");

    const pkgSel = document.getElementById("pkg");
    const biz = document.getElementById("biz").value.trim() || "-";
    const notes = document.getElementById("notes").value.trim() || "-";
    const cname = country ? countryName(country) : "-";

    // ✨ رسالة منسقة بالفريمات
    const msgLines = [
      "╔══════════════════════════╗",
      "      T2 DIGITAL AGENCY",
      "        NEW PROJECT BRIEF",
      "╚══════════════════════════╝",
      "",
      "┌──────────────────────────┐",
      "│  CLIENT INFORMATION",
      "└──────────────────────────┘",
      `◆ Name      : ${name}`,
      `◆ Business  : ${biz}`,
      `◆ WhatsApp  : ${phone}`,
      `◆ Country   : ${cname}`,
      `◆ Package   : ${pkgSel.options[pkgSel.selectedIndex].textContent}`,
      "",
      "┌──────────────────────────┐",
      `│  SELECTED SERVICES (${selected.length})`,
      "└──────────────────────────┘",
      ...selected.map((id, i) => `  ${String(i + 1).padStart(2, "0")}. ${labelFor(id)}`),
      "",
      "┌──────────────────────────┐",
      "│  ADDITIONAL NOTES",
      "└──────────────────────────┘",
      notes,
      "",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "Sent via T2 Website ✦",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    ];

    window.open("https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(msgLines.join("\n")), "_blank", "noopener");

    // Reset after send
    setTimeout(() => {
      selected = [];
      form.reset();
      syncSelection();
    }, 900);
  });

  // ============ Split text animation ============
  function splitHeroTitle() {
    const el = document.querySelector(".hero-title");
    if (!el || reduceMotion) return;
    const text = el.textContent.trim();
    el.innerHTML = text.split(" ").map(word =>
      `<span class="split-word"><span class="split-char">${word}</span></span>`
    ).join(" ");
    el.querySelectorAll(".split-char").forEach((c, i) => {
      c.style.transitionDelay = (i * 0.04) + "s";
    });
    requestAnimationFrame(() => el.classList.add("split-in"));
  }

  // ============ Counters ============
  function initCounters() {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.count;
        const dur = 1800;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(n => obs.observe(n));
  }

  // ============ Reveal ============
  function initReveal() {
    const els = document.querySelectorAll(".reveal:not(.visible)");
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
  }

  // ============ Spotlight on cards ============
  function bindSpotlight() {
    if (isTouch) return;
    document.querySelectorAll(".pick").forEach(el => {
      if (el.dataset.sp) return;
      el.dataset.sp = "1";
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
        el.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
      });
    });
  }

  // ============ Magnetic buttons ============
  function initMagnetic() {
    if (isTouch || reduceMotion) return;
    document.querySelectorAll(".magnetic").forEach(btn => {
      btn.addEventListener("pointermove", e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.15;
        const y = (e.clientY - r.top - r.height / 2) * 0.15;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  // ============ Custom Cursor ============
  function initCursor() {
    if (isTouch) return;
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
    const dot = cursor.querySelector(".cursor-dot");
    const ring = cursor.querySelector(".cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("pointermove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
    });

    function animate() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    }
    animate();

    document.querySelectorAll("a, button, .pick, .vcard, .cw-item, .chk-row").forEach(el => {
      el.addEventListener("pointerenter", () => cursor.classList.add("hover"));
      el.addEventListener("pointerleave", () => cursor.classList.remove("hover"));
    });

    // Rebind on dynamic content
    setTimeout(() => {
      document.querySelectorAll(".pick, .vcard, .chk-row, .cw-item").forEach(el => {
        el.addEventListener("pointerenter", () => cursor.classList.add("hover"));
        el.addEventListener("pointerleave", () => cursor.classList.remove("hover"));
      });
    }, 500);
  }

  // ============ Preloader ============
  function initPreloader() {
    const pl = document.getElementById("preloader");
    const fill = document.getElementById("pl-bar-fill");
    const pct = document.getElementById("pl-pct");
    if (!pl) return;
    let p = 0;
    const int = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) { p = 100; clearInterval(int); setTimeout(() => pl.classList.add("done"), 400); }
      if (fill) fill.style.width = p + "%";
      if (pct) pct.textContent = Math.floor(p);
    }, 130);
  }

  // ============ Scroll progress + header ============
  const header = document.getElementById("site-header");
  const progress = document.getElementById("scroll-progress");
  const toTop = document.getElementById("back-to-top");
  function onScroll() {
    const s = window.scrollY || document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (progress) progress.style.width = (h > 0 ? (s / h) * 100 : 0) + "%";
    header?.classList.toggle("scrolled", s > 20);
    toTop?.classList.toggle("show", s > 450);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.getElementById("year").textContent = new Date().getFullYear();

  // ============ Country wheel overlay ============
  const cwOverlay = document.getElementById("cw-overlay");
  const cwFlag = document.getElementById("cw-wheel-flag");
  const cwLabel = document.getElementById("cw-wheel-label");
  const cwGrid = document.getElementById("cw-grid");

  function buildCountryGrid() {
    if (!cwGrid) return;
    cwGrid.innerHTML = COUNTRIES.map(c => `
      <button class="cw-item" data-code="${c.c}" type="button">
        <img src="${flagURL(c.c, 40)}" alt="" loading="lazy">
        <span>${c.ar}</span>
      </button>
    `).join("");
    cwGrid.addEventListener("click", e => {
      const btn = e.target.closest(".cw-item");
      if (!btn) return;
      country = btn.dataset.code;
      localStorage.setItem("t2_country", country);
      if (country !== "OTHER" && lang === "en") { lang = "ar"; localStorage.setItem("t2_lang", lang); }
      cwOverlay.hidden = true;
      document.body.style.overflow = "";
      renderAll();
      setTimeout(() => initCursor(), 300);
    });
  }

  function spinWheel() {
    if (!cwFlag || !cwLabel) return;
    const codes = COUNTRIES.filter(c => c.c !== "OTHER").map(c => c.c);
    let step = 0;
    const total = 24 + Math.floor(Math.random() * 10);
    let delay = 55;

    function tick() {
      const code = codes[step % codes.length];
      cwFlag.querySelector("img").src = flagURL(code, 160);
      cwFlag.classList.remove("cycling");
      void cwFlag.offsetWidth;
      cwFlag.classList.add("cycling");

      const obj = COUNTRIES.find(x => x.c === code);
      if (cwLabel) cwLabel.textContent = obj ? obj.ar : "";

      step++;
      if (step > total - 8) delay += 60;
      if (step < total) setTimeout(tick, delay);
      else if (cwLabel) cwLabel.textContent = "اختر دولتك ↓";
    }
    tick();
  }

  // ============ Three.js Hero ============
  function initHero3D() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE || reduceMotion) return;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
    catch (e) { return; }

    const W = box.clientWidth || 480, H = box.clientHeight || 480;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    cam.position.z = 7.8;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xfff6de, 1.4); keyLight.position.set(5, 6, 8); scene.add(keyLight);
    const gold = new THREE.PointLight(0xd4af37, 1.8, 22); gold.position.set(-4, -2, 5); scene.add(gold);
    const rim = new THREE.PointLight(0x3a5db8, 0.7, 25); rim.position.set(3, -5, -4); scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    // Background wireframe globe
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(2.7, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true, transparent: true, opacity: 0.09 })
    );
    scene.add(globe);

    // Orbital rings
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.012, 12, 90), ringMat);
    ring1.rotation.x = Math.PI * 0.42; scene.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.008, 12, 90), ringMat);
    ring2.rotation.x = Math.PI * 0.28; ring2.rotation.z = Math.PI * 0.5; scene.add(ring2);

    // Floating geometry
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.92, roughness: 0.15 });
    const navyMat = new THREE.MeshStandardMaterial({ color: 0x1a2646, metalness: 0.7, roughness: 0.35 });
    const floats = [];
    const shapes = [
      [new THREE.IcosahedronGeometry(0.32, 0), goldMat, [2.1, 1.1, 0.2]],
      [new THREE.OctahedronGeometry(0.28, 0), navyMat, [-2.2, -1.2, 0.4]],
      [new THREE.TorusKnotGeometry(0.22, 0.06, 64, 8), goldMat, [1.8, -1.7, 0.6]],
      [new THREE.TetrahedronGeometry(0.3, 0), navyMat, [-1.9, 1.6, 0.3]],
    ];
    shapes.forEach(([geo, mat, pos]) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(pos[0], pos[1], pos[2]);
      m.userData = { baseY: pos[1], offset: Math.random() * Math.PI * 2 };
      group.add(m);
      floats.push(m);
    });

    // 3D Logo (extruded layers) — loaded from logo.png
    const texLoader = new THREE.TextureLoader();
    let logoLoaded = false;
    texLoader.load("logo.png", (tex) => {
      const fb = box.querySelector(".hero-3d-fallback");
      if (fb) fb.remove();
      box.appendChild(renderer.domElement);

      const geo = new THREE.PlaneGeometry(2.6, 2.6);
      const layers = 20, depth = 0.32;
      for (let i = 0; i < layers; i++) {
        const front = i === layers - 1, back = i === 0;
        const mat = (front || back)
          ? new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.32, roughness: 0.32, metalness: 0.55 })
          : new THREE.MeshStandardMaterial({ color: 0xd4af37, transparent: true, alphaTest: 0.42, roughness: 0.32, metalness: 0.9 });
        const m = new THREE.Mesh(geo, mat);
        m.position.z = (i / (layers - 1)) * depth - depth / 2;
        group.add(m);
      }
      logoLoaded = true;
    }, undefined, () => {
      // Fallback: 3D text logo
      const canvas = document.createElement("canvas");
      canvas.width = 512; canvas.height = 512;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#0a0f1e";
      ctx.font = "900 380px Cairo, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("T2", 256, 280);
      const tex = new THREE.CanvasTexture(canvas);
      const geo = new THREE.PlaneGeometry(2.8, 2.8);
      const layers = 18, depth = 0.35;
      for (let i = 0; i < layers; i++) {
        const front = i === layers - 1;
        const mat = front
          ? new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.3, roughness: 0.3, metalness: 0.6 })
          : new THREE.MeshStandardMaterial({ color: 0xd4af37, transparent: true, alphaTest: 0.35, roughness: 0.3, metalness: 0.9 });
        const m = new THREE.Mesh(geo, mat);
        m.position.z = (i / (layers - 1)) * depth - depth / 2;
        group.add(m);
      }
      const fb = box.querySelector(".hero-3d-fallback");
      if (fb) fb.remove();
      box.appendChild(renderer.domElement);
      logoLoaded = true;
    });

    // Mouse parallax
    let tx = 0, ty = 0, rx = 0, ry = 0;
    const hero = document.querySelector(".hero");
    hero?.addEventListener("pointermove", e => {
      const r = box.getBoundingClientRect();
      ty = ((e.clientX - (r.left + r.width / 2)) / r.width) * 0.9;
      tx = ((e.clientY - (r.top + r.height / 2)) / r.height) * 0.6;
      gold.position.x = ty * 6;
      gold.position.y = -tx * 6;
    });
    hero?.addEventListener("pointerleave", () => { tx = 0; ty = 0; });

    window.addEventListener("resize", () => {
      const w = box.clientWidth, h = box.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    });

    const clock = new THREE.Clock();
    (function loop() {
      requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      rx += (tx - rx) * 0.06; ry += (ty - ry) * 0.06;

      group.rotation.x = rx;
      group.rotation.y = ry + Math.sin(t * 0.6) * 0.12;
      group.position.y = Math.sin(t * 1.1) * 0.1;

      globe.rotation.y = t * 0.08;
      globe.rotation.x = Math.sin(t * 0.2) * 0.15;
      ring1.rotation.z = t * 0.16;
      ring2.rotation.z = -t * 0.12;

      floats.forEach((f, i) => {
        f.rotation.x = t * 0.3 + i;
        f.rotation.y = t * 0.4 + i;
        f.position.y = f.userData.baseY + Math.sin(t * 1.2 + f.userData.offset) * 0.25;
      });

      renderer.render(scene, cam);
    })();
  }

  // ============ Background Particles ============
  function initParticles() {
    const canvas = document.getElementById("bg");
    if (!canvas || !window.THREE) return;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false }); }
    catch (e) { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 300);
    cam.position.z = 45;

    function createLayer(count, color, size, opacity) {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i*3] = (Math.random() - 0.5) * 140;
        pos[i*3+1] = (Math.random() - 0.5) * 95;
        pos[i*3+2] = (Math.random() - 0.5) * 95;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      return new THREE.Points(geo, new THREE.PointsMaterial({ color, size, transparent: true, opacity, blending: THREE.AdditiveBlending }));
    }
    const gold = createLayer(280, 0xd4af37, 0.35, 0.7);
    const navy = createLayer(160, 0x3a5db8, 0.25, 0.4);
    scene.add(gold, navy);

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);
    resize();

    let sy = 0;
    window.addEventListener("scroll", () => { sy = window.scrollY; }, { passive: true });

    (function loop() {
      requestAnimationFrame(loop);
      if (!reduceMotion) {
        gold.rotation.y += 0.0006;
        navy.rotation.y -= 0.0004;
      }
      gold.position.y = sy * 0.012;
      navy.position.y = sy * 0.007;
      renderer.render(scene, cam);
    })();
  }

  // ============ Init ============
  document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    renderAll();
    splitHeroTitle();
    initHero3D();
    initParticles();
    initMagnetic();
    initCursor();
    initReveal();

    if (!country) {
      const cw = document.getElementById("cw-overlay");
      if (cw) {
        cw.hidden = false;
        document.body.style.overflow = "hidden";
        buildCountryGrid();
        spinWheel();
      }
    }
  });
})();
