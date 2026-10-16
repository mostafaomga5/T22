(function () {
  const { PACKS, COUNTRIES } = window.T2_I18N;

  // ---------- Contact numbers ----------
  // Default number for all countries. Put a country's own number in WA_BY_COUNTRY (digits, intl format, no + or 00).
  const WA_DEFAULT = "201090960743";
  const WA_BY_COUNTRY = {
    SA: "", // Saudi number
    AE: "", // UAE number
  };

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
  let selected = [];
  try { selected = JSON.parse(localStorage.getItem("t2_sel") || "[]"); } catch (e) { selected = []; }
  if (!Array.isArray(selected)) selected = [];

  // ---------- Strings: language + dialect ----------
  function strings() {
    if (lang === "en") return PACKS.EN;
    const c = COUNTRIES.find(x => x.c === country);
    return PACKS[c ? c.pack : "MSA"] || PACKS.MSA;
  }
  const t = (k) => strings()[k];
  const countryObj = (code) => COUNTRIES.find(x => x.c === code);
  const countryName = (code) => {
    const c = countryObj(code);
    return c ? (lang === "en" ? c.en : c.ar) : "";
  };
  const waNumber = () => (country && WA_BY_COUNTRY[country]) || WA_DEFAULT;

  // ---------- Service selection ----------
  // ids: "c0".."c4" for core services, "g{group}_{item}" for the full list
  function labelFor(id) {
    const s = strings();
    if (id[0] === "c") return s["s" + (Number(id.slice(1)) + 1) + "_t"];
    const [g, i] = id.slice(1).split("_").map(Number);
    return s.groups[g] ? s.groups[g].i[i] : id;
  }
  function saveSelection() { localStorage.setItem("t2_sel", JSON.stringify(selected)); }
  function toggle(id) {
    const idx = selected.indexOf(id);
    if (idx >= 0) selected.splice(idx, 1); else selected.push(id);
    saveSelection();
    syncSelection();
  }
  function isOn(id) { return selected.indexOf(id) >= 0; }

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

  function renderCoreList() {
    const s = strings();
    document.getElementById("services-list").innerHTML = [0, 1, 2, 3, 4].map(i => {
      const id = "c" + i;
      return `
      <li class="pick tilt" data-id="${id}">
        <label>
          <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
          <span class="pick-num">0${i + 1}</span>
          <span class="pick-body"><h3>${s["s" + (i + 1) + "_t"]}</h3><p>${s["s" + (i + 1) + "_d"]}</p></span>
          <span class="tick" aria-hidden="true">✓</span>
        </label>
      </li>`;
    }).join("");
  }

  function renderAllList() {
    const s = strings();
    document.getElementById("groups").innerHTML = s.groups.map((g, gi) => `
      <div class="group tilt">
        <h3>${g.t}</h3>
        <ul class="chk">
          ${g.i.map((item, ii) => {
            const id = "g" + gi + "_" + ii;
            return `<li><label class="chk-row ${isOn(id) ? "on" : ""}">
              <input type="checkbox" class="sr" value="${id}" ${isOn(id) ? "checked" : ""}>
              <span class="box" aria-hidden="true">✓</span><span>${item}</span>
            </label></li>`;
          }).join("")}
        </ul>
      </div>`).join("");
  }

  function renderPortfolio() {
    const s = strings();
    const wrap = document.getElementById("portfolio-wrap");
    wrap.innerHTML = SVC_IDS.map((id, idx) => {
      const cards = Array.from({ length: VIDEOS_PER_SERVICE }, (_, n) => `
        <button class="vcard tilt" type="button" data-src="videos/${id}/${n + 1}.mp4">
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

  // Updates checkboxes, summary, order bar, and tilt bindings without rebuilding lists unnecessarily
  function syncSelection() {
    const s = strings();
    document.querySelectorAll('input[type="checkbox"][value]').forEach(cb => {
      cb.checked = isOn(cb.value);
      const row = cb.closest(".chk-row");
      if (row) row.classList.toggle("on", cb.checked);
      const pick = cb.closest(".pick");
      if (pick) pick.classList.toggle("on", cb.checked);
    });

    const summary = document.getElementById("sel-summary");
    summary.innerHTML = selected.length
      ? `<p class="sel-title">${s.f_selected} (${selected.length})</p><ul>${selected.map(id => `<li>${labelFor(id)}</li>`).join("")}</ul>`
      : `<p class="sel-title">${s.f_selected}</p><p class="sel-empty">${s.f_none}</p>`;

    const bar = document.getElementById("order-bar");
    bar.hidden = selected.length === 0;
    document.getElementById("order-count").textContent = `${selected.length} ${s.order_count}`;
    document.getElementById("order-go").textContent = s.order_go;
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

  // Event delegation for selection (survives re-renders)
  document.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"][value]')) toggle(e.target.value);
  });

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
      else chooseCountry(COUNTRIES[activeIdx].c);
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
    const err = form.querySelector(".err");
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.replace(/[^\d+]/g, "");

    if (!name || phone.replace(/\D/g, "").length < 8) {
      err.textContent = s.f_err; err.style.display = "block"; return;
    }
    if (selected.length === 0) {
      err.textContent = s.f_err_svc; err.style.display = "block"; return;
    }
    err.style.display = "none";

    const pkgSel = document.getElementById("pkg");
    const biz = document.getElementById("biz").value.trim() || "-";
    const notes = document.getElementById("notes").value.trim() || "-";
    const lines = [
      s.wa_header, "",
      `*${s.wa_pkg}:* ${pkgSel.options[pkgSel.selectedIndex].textContent}`,
      `*${s.wa_svc}:*`,
      ...selected.map(id => `• ${labelFor(id)}`),
      "",
      `*${s.wa_name}:* ${name}`,
      `*${s.wa_biz}:* ${biz}`,
      `*${s.wa_phone}:* ${phone}`,
      `*${s.wa_country}:* ${country ? countryName(country) : "-"}`,
      `*${s.wa_notes}:* ${notes}`
    ];
    window.open("https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });

  // ---------- 3D hover: tilt + light follow on hover ----------
  function bindTilt() {
    if (reduce) return;
    document.querySelectorAll(".tilt").forEach(el => {
      if (el.dataset.tilt) return;
      el.dataset.tilt = "1";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-y * 12}deg) rotateY(${x * 14}deg) translateZ(18px)`;
        el.style.setProperty("--mx", (x + 0.5) * 100 + "%");
        el.style.setProperty("--my", (y + 0.5) * 100 + "%");
        el.style.boxShadow = "0 28px 55px rgba(20,33,61,.22)";
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
        el.style.boxShadow = "";
      });
    });
  }

  // ---------- 3D: hero logo ----------
  function heroLogo() {
    const box = document.getElementById("hero-3d");
    if (!box || !window.THREE) return;
    const W = box.clientWidth || 400, H = box.clientHeight || 400;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    const fb = box.querySelector("img.fallback");
    if (fb) fb.remove();
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
