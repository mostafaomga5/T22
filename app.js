(function () {
  const { BASE_AR, BASE_EN, DIALECTS, COUNTRIES } = window.T2_I18N;

  // ---------- Contact numbers ----------
  // Default number used for every country unless a country has its own number below.
  // Format: international, digits only, no + and no 00.
  const WA_DEFAULT = "201090960743";
  const WA_BY_COUNTRY = {
    SA: "", // Saudi number (empty = use default)
    AE: "", // UAE number
    // add others here, e.g. KW: "965xxxxxxxx"
  };

  // ---------- Flags ----------
  const FLAGS = {
    SA: "🇸🇦", EG: "🇪🇬", AE: "🇦🇪", KW: "🇰🇼", QA: "🇶🇦", BH: "🇧🇭", OM: "🇴🇲",
    JO: "🇯🇴", LB: "🇱🇧", SY: "🇸🇾", PS: "🇵🇸", IQ: "🇮🇶", YE: "🇾🇪", MA: "🇲🇦",
    DZ: "🇩🇿", TN: "🇹🇳", LY: "🇱🇾", SD: "🇸🇩", OTHER: "🌍"
  };

  const SVC_IDS = ["smm", "web", "ai", "ads", "pages"];
  const VIDEOS_PER_SERVICE = 3;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- State ----------
  let lang = localStorage.getItem("t2_lang") || "ar";
  let country = localStorage.getItem("t2_country") || null;
  if (!COUNTRIES.some(c => c.c === country)) country = null;

  // ---------- Strings: language + dialect, applied globally ----------
  function strings() {
    if (lang === "en") return BASE_EN;
    const c = COUNTRIES.find(x => x.c === country);
    const dialect = c ? DIALECTS[c.pack] : null;
    return Object.assign({}, BASE_AR, dialect || {});
  }
  const t = (k) => strings()[k];
  const countryObj = (code) => COUNTRIES.find(x => x.c === code);
  const countryName = (code) => {
    const c = countryObj(code);
    return c ? (lang === "en" ? c.en : c.ar) : "";
  };
  const waNumber = () => (country && WA_BY_COUNTRY[country]) || WA_DEFAULT;

  // ---------- Apply everything ----------
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
    document.getElementById("footer-wa").href = "https://wa.me/" + waNumber();
    document.getElementById("video-close").setAttribute("aria-label", s.close);
  }

  function renderDropdown() {
    const s = strings();
    const btn = document.getElementById("cdd-btn");
    const list = document.getElementById("cdd-list");
    btn.querySelector(".flag").textContent = country ? FLAGS[country] : "🌍";
    btn.querySelector(".label").textContent = country ? countryName(country) : s.country_pick;
    btn.classList.toggle("pulse", !country);
    list.innerHTML = COUNTRIES.map(c => `
      <li role="option" data-code="${c.c}" aria-selected="${c.c === country}">
        <span class="flag">${FLAGS[c.c] || "🌍"}</span><span>${lang === "en" ? c.en : c.ar}</span>
      </li>`).join("");
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
        <button class="vcard" type="button" data-src="videos/${id}/${n + 1}.mp4">
          <video preload="metadata" muted playsinline src="videos/${id}/${n + 1}.mp4"></video>
          <span class="play"><span>▶</span><span class="tag">${n + 1}</span></span>
        </button>`).join("");
      return `<div class="pf-service"><h3>${s.svc_names[idx]}</h3><div class="videos">${cards}</div></div>`;
    }).join("");

    wrap.querySelectorAll(".vcard video").forEach(v => {
      v.addEventListener("error", () => {
        v.parentElement.querySelector(".tag").textContent = strings().portfolio_soon;
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

  function renderServiceOptions() {
    const s = strings();
    const sel = document.getElementById("svc");
    const current = sel.value || "0";
    sel.innerHTML = s.svc_names.map((n, i) => `<option value="${i}">${n}</option>`).join("");
    sel.value = current;
  }

  function renderAll() {
    applyText();
    renderDropdown();
    renderServices();
    renderPortfolio();
    renderGroups();
    renderServiceOptions();
  }

  // ---------- Country dropdown (no overlay) ----------
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
    activeIdx = Math.max(0, COUNTRIES.findIndex(c => c.c === country));
    highlight();
  }
  function closeDD() {
    cdd.classList.remove("open");
    cddBtn.setAttribute("aria-expanded", "false");
  }
  function chooseCountry(code) {
    country = code;
    localStorage.setItem("t2_country", code);
    closeDD();
    renderAll();
    cddBtn.focus();
  }

  cddBtn.addEventListener("click", () => (cdd.classList.contains("open") ? closeDD() : openDD()));
  cddList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) chooseCountry(li.getAttribute("data-code"));
  });
  cddBtn.addEventListener("keydown", (e) => {
    const isOpen = cdd.classList.contains("open");
    if (e.key === "Escape") { closeDD(); return; }
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      if (!isOpen) { openDD(); return; }
      if (e.key === "ArrowDown") { activeIdx = (activeIdx + 1) % COUNTRIES.length; highlight(); }
      else if (e.key === "ArrowUp") { activeIdx = (activeIdx - 1 + COUNTRIES.length) % COUNTRIES.length; highlight(); }
      else { chooseCountry(COUNTRIES[activeIdx].c); }
    }
  });
  document.addEventListener("pointerdown", (e) => { if (!cdd.contains(e.target)) closeDD(); });

  // ---------- Language toggle ----------
  document.getElementById("btn-lang").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("t2_lang", lang);
    renderAll();
  });

  // ---------- Video modal ----------
  const videoModal = document.getElementById("video-modal");
  const player = document.getElementById("video-player");
  const videoMsg = document.getElementById("video-msg");
  function openVideo(btn) {
    videoMsg.hidden = true;
    player.onerror = () => { videoMsg.textContent = strings().portfolio_soon; videoMsg.hidden = false; };
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
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeVideo(); closeDD(); } });

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
      `*${s.wa_country}:* ${country ? countryName(country) : "-"}`,
      `*${s.wa_notes}:* ${notes}`
    ];
    window.open("https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });

  // ---------- 3D: service cards tilt ----------
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

  // ---------- 3D: hero logo (extruded layers, real depth) ----------
  function heroLogo() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE) return;

    const W = box.clientWidth || 400, H = box.clientHeight || 400;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    box.querySelector("img.fallback").remove();
    box.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    camera.position.z = 7.2;
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 0.9);
    key.position.set(3, 4, 6);
    scene.add(key);

    const tex = new THREE.TextureLoader().load("logo.png");
    const geo = new THREE.PlaneGeometry(3.4, 3.4);
    const group = new THREE.Group();
    const layers = 16, depth = 1.0;
    for (let i = 0; i < layers; i++) {
      const front = i === layers - 1;
      const mat = front
        ? new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.35, roughness: 0.35, metalness: 0.45 })
        : new THREE.MeshBasicMaterial({ map: tex, color: 0xb8901f, transparent: true, alphaTest: 0.35 });
      const m = new THREE.Mesh(geo, mat);
      m.position.z = (i / (layers - 1)) * depth - depth / 2;
      group.add(m);
    }
    scene.add(group);

    let tx = 0, ty = 0, rx = 0, ry = 0;
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = box.getBoundingClientRect();
      ty = ((e.clientX - (r.left + r.width / 2)) / r.width) * 0.9;
      tx = ((e.clientY - (r.top + r.height / 2)) / r.height) * 0.6;
    });
    hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; });

    window.addEventListener("resize", () => {
      const w = box.clientWidth || W, h = box.clientHeight || H;
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
      group.rotation.y = ry + (reduce ? 0 : Math.sin(time * 0.6) * 0.15);
      group.position.y = reduce ? 0 : Math.sin(time * 1.1) * 0.12;
      renderer.render(scene, camera);
    })();
  }

  // ---------- 3D: background particles ----------
  function particles() {
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
    const points = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc9a227, size: 0.35, transparent: true, opacity: 0.7 }));
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
  }

  // ---------- Init ----------
  renderAll();
  if (window.THREE) { heroLogo(); particles(); }
  if (!country) openDD();
})();
