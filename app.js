(function () {
  const { BASE_AR, BASE_EN, DIALECTS, COUNTRIES } = window.T2_I18N;
  const WA_NUMBER = "201090960743";
  const SVC_IDS = ["smm", "web", "ai", "ads", "pages"];
  const VIDEOS_PER_SERVICE = 3;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- State ----------
  let lang = localStorage.getItem("t2_lang") || "ar";
  let country = localStorage.getItem("t2_country") || null;

  function strings() {
    if (lang === "en") return BASE_EN;
    const c = COUNTRIES.find(x => x.c === country);
    const dialect = c ? DIALECTS[c.pack] : null;
    return Object.assign({}, BASE_AR, dialect || {});
  }
  const t = (k) => strings()[k];
  const countryName = (code) => {
    const c = COUNTRIES.find(x => x.c === code);
    return c ? (lang === "en" ? c.en : c.ar) : "-";
  };

  // ---------- Apply language & copy ----------
  function applyText() {
    const s = strings();
    document.documentElement.lang = lang === "en" ? "en" : "ar";
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    document.title = lang === "en" ? "T2 | Digital Marketing Agency" : "T2 | حلول التسويق الرقمي";
    document.querySelectorAll("[data-i]").forEach(el => {
      const v = s[el.getAttribute("data-i")];
      if (typeof v === "string") el.textContent = v;
    });
    document.getElementById("btn-lang").textContent = s.btn_lang;
    document.getElementById("btn-country").textContent =
      country ? countryName(country) : s.btn_country;

    // Form select options (service list)
    const svcSel = document.getElementById("svc");
    const current = svcSel.value;
    svcSel.innerHTML = s.svc_names.map((n, i) => `<option value="${i}">${n}</option>`).join("");
    svcSel.value = current || "0";
  }

  function renderServices() {
    const s = strings();
    document.getElementById("services-grid").innerHTML = [1, 2, 3, 4, 5].map(i => `
      <article class="card">
        <span class="num">0${i}</span>
        <h3>${s["s" + i + "_t"]}</h3>
        <p>${s["s" + i + "_d"]}</p>
      </article>`).join("");
    bindCardTilt();
  }

  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from({ length: VIDEOS_PER_SERVICE }, (_, n) => `
        <button class="vcard" type="button" data-src="videos/${id}/${n + 1}.mp4" data-label="${s.svc_names[idx]}">
          <video preload="metadata" muted playsinline src="videos/${id}/${n + 1}.mp4"></video>
          <span class="play"><span>▶</span><span class="tag">${n + 1}</span></span>
        </button>`).join("");
      return `<div class="pf-service"><h3>${s.svc_names[idx]}</h3><div class="videos">${cards}</div></div>`;
    }).join("");

    // If a video file is missing, show "coming soon" on its card
    wrap.querySelectorAll(".vcard video").forEach(v => {
      v.addEventListener("error", () => {
        const tag = v.parentElement.querySelector(".tag");
        tag.textContent = strings().portfolio_soon;
        v.remove();
      });
    });
    wrap.querySelectorAll(".vcard").forEach(btn => btn.addEventListener("click", () => openVideo(btn)));
  }

  function renderGroups() {
    const s = strings();
    document.getElementById("groups").innerHTML = s.groups.map(g => `
      <div class="group"><h3>${g.t}</h3><ul>${g.i.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("");
  }

  function renderAll() {
    applyText();
    renderServices();
    renderPortfolio();
    renderGroups();
  }

  // ---------- Video modal ----------
  const videoModal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const videoMsg = document.getElementById("video-msg");
  function openVideo(btn) {
    videoMsg.hidden = true;
    player.onerror = () => {
      videoMsg.textContent = strings().portfolio_soon;
      videoMsg.hidden = false;
    };
    player.src = btn.getAttribute("data-src");
    videoModal.hidden = false;
    player.play().catch(() => {});
  }
  function closeVideo() {
    player.pause();
    player.removeAttribute("src");
    player.load();
    videoModal.hidden = true;
  }
  document.getElementById("video-close").addEventListener("click", closeVideo);
  videoModal.addEventListener("click", (e) => { if (e.target === videoModal) closeVideo(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeVideo(); closeCountry(true); } });

  // ---------- Country picker ----------
  const countryModal = document.getElementById("country-modal");
  const countrySelect = document.getElementById("country-select");
  let countryCancelable = false;
  function fillCountrySelect() {
    const s = strings();
    countrySelect.innerHTML =
      `<option value="">${s.country_pick}</option>` +
      COUNTRIES.map(c => `<option value="${c.c}">${lang === "en" ? c.en : c.ar}</option>`).join("");
    if (country) countrySelect.value = country;
  }
  function openCountry(cancelable) {
    countryCancelable = cancelable;
    fillCountrySelect();
    countryModal.hidden = false;
  }
  function closeCountry(force) {
    if (!force && !country) return;
    countryModal.hidden = true;
  }
  document.getElementById("btn-country").addEventListener("click", () => openCountry(true));
  document.getElementById("country-go").addEventListener("click", () => {
    const v = countrySelect.value;
    if (!v) { countrySelect.focus(); return; }
    country = v;
    localStorage.setItem("t2_country", v);
    countryModal.hidden = true;
    renderAll();
  });
  countryModal.addEventListener("click", (e) => { if (e.target === countryModal && countryCancelable) closeCountry(true); });

  // ---------- Language toggle ----------
  document.getElementById("btn-lang").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("t2_lang", lang);
    renderAll();
    if (!country) fillCountrySelect();
  });

  // ---------- Mobile menu ----------
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("btn-menu");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  // ---------- Quote form → WhatsApp ----------
  const form = document.getElementById("quote-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = strings();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.replace(/[^\d+]/g, "");
    const err = form.querySelector(".err");
    if (!name || phone.replace(/\D/g, "").length < 8) {
      err.textContent = s.f_err;
      err.style.display = "block";
      return;
    }
    err.style.display = "none";

    const pkgSel = document.getElementById("pkg");
    const svcSel = document.getElementById("svc");
    const biz = document.getElementById("biz").value.trim() || "-";
    const notes = document.getElementById("notes").value.trim() || "-";
    const lines = [
      s.wa_header, "",
      `*${s.wa_pkg}:* ${pkgSel.options[pkgSel.selectedIndex].textContent}`,
      `*${s.wa_svc}:* ${svcSel.options[svcSel.selectedIndex].textContent}`,
      `*${s.wa_name}:* ${name}`,
      `*${s.wa_biz}:* ${biz}`,
      `*${s.wa_phone}:* ${phone}`,
      `*${s.wa_country}:* ${countryName(country)}`,
      `*${s.wa_notes}:* ${notes}`
    ];
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });

  // ---------- 3D: tilt on cards ----------
  function bindCardTilt() {
    if (reduce) return;
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 12}deg) translateZ(18px)`;
        card.style.boxShadow = "0 26px 50px rgba(20,33,61,.18)";
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; card.style.boxShadow = ""; });
    });
  }

  // ---------- 3D: logo tilt following the pointer ----------
  (function logoTilt() {
    const el = document.getElementById("logo-3d");
    if (!el || reduce) return;
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `rotateX(${-y * 22}deg) rotateY(${x * 28}deg)`;
    });
    hero.addEventListener("pointerleave", () => { el.style.transform = ""; });
  })();

  // ---------- 3D: particle background ----------
  (function particles() {
    if (!window.THREE) return;
    const canvas = document.getElementById("bg");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300);
    camera.position.z = 45;

    const count = 320;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 130;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 90;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 90;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xc9a227, size: 0.35, transparent: true, opacity: 0.75 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);
    resize();

    let scrollY = 0;
    window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

    (function loop() {
      requestAnimationFrame(loop);
      if (!reduce) points.rotation.y += 0.0007;
      points.position.y = scrollY * 0.012;
      renderer.render(scene, camera);
    })();
  })();

  // ---------- Init ----------
  renderAll();
  if (country && COUNTRIES.some(c => c.c === country)) {
    countryModal.hidden = true;
  } else {
    country = null;
    openCountry(false);
  }
})();
