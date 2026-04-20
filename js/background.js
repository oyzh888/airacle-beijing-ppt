/**
 * background.js
 *
 * Layer 1 — bgCanvas (z-index:0, behind text):
 *   Stars + constellation lines (Three.js)
 *
 * Layer 2 — Cinematic Background System (CSS/GSAP):
 *   Unsplash images with Ken Burns effect + crossfade on slide change
 *
 * Layer 3 — Floating Typography (CSS):
 *   Decorative drifting large text elements
 *
 * + Ambient mesh blob parallax (CSS elements)
 */

// Shared mouse state
const _mouse = { x: 0, y: 0, nx: 0, ny: 0 };
document.addEventListener('mousemove', e => {
  _mouse.x = e.clientX; _mouse.y = e.clientY;
  _mouse.nx = e.clientX / innerWidth - .5;
  _mouse.ny = e.clientY / innerHeight - .5;
});

// ============================================================
// LAYER 1: STARFIELD (behind everything)
// ============================================================
(function initStarfield() {
  const c = document.getElementById('bgCanvas');
  if (!c) return;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
  cam.position.z = 1;
  const renderer = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  // Stars
  const N = 1500;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), sizes = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i*3] = (Math.random() - .5) * 700;
    pos[i*3+1] = (Math.random() - .5) * 700;
    pos[i*3+2] = (Math.random() - .5) * 700;
    const tc = new THREE.Color().setHSL(.55 + Math.random() * .2, .5 + Math.random() * .3, .4 + Math.random() * .4);
    col[i*3] = tc.r; col[i*3+1] = tc.g; col[i*3+2] = tc.b;
    sizes[i] = .5 + Math.random() * 2.5;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const starMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size; varying vec3 vColor; uniform float time;
      void main(){
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / length(mv.xyz)) * (0.8 + 0.2 * sin(time + position.x * 0.1));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if(d > 0.5) discard;
        gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d) * 0.7);
      }`,
    transparent: true, vertexColors: true, depthWrite: false
  });
  scene.add(new THREE.Points(geo, starMat));

  // Constellation lines
  const lg = new THREE.BufferGeometry(); const lp = [];
  const near = [];
  for (let i = 0; i < Math.min(250, N); i++) near.push(new THREE.Vector3(pos[i*3], pos[i*3+1], pos[i*3+2]));
  for (let i = 0; i < near.length; i++)
    for (let j = i + 1; j < near.length; j++)
      if (near[i].distanceTo(near[j]) < 45) lp.push(near[i].x, near[i].y, near[i].z, near[j].x, near[j].y, near[j].z);
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
  scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: .04 })));

  window.addEventListener('resize', () => { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

  let t = 0;
  (function anim() {
    requestAnimationFrame(anim);
    t += .004;
    starMat.uniforms.time.value = t;
    scene.rotation.y += .00012;
    scene.rotation.x += .00006;
    cam.position.x += (_mouse.nx * 2 - cam.position.x) * .01;
    cam.position.y += (-_mouse.ny * 2 - cam.position.y) * .01;
    cam.lookAt(scene.position);
    renderer.render(scene, cam);
  })();
})();

// ============================================================
// LAYER 2: CINEMATIC BACKGROUND SYSTEM (CSS + GSAP)
// ============================================================
(function initCinematicBg() {
  const container = document.getElementById('slideBgLayer');
  if (!container) return;

  const images = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop'
  ];

  const kbClasses = ['kb1', 'kb2', 'kb3', 'kb4'];
  let currentIndex = 0;

  // Create a slide-bg div for each slide
  images.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'slide-bg ' + kbClasses[i % kbClasses.length] + (i === 0 ? ' active' : '');
    div.style.backgroundImage = 'url(' + url + ')';
    div.dataset.index = i;
    container.appendChild(div);
  });

  const bgDivs = container.querySelectorAll('.slide-bg');

  // Global switch function
  function switchSlideBg(index) {
    if (index === currentIndex || index < 0 || index >= bgDivs.length) return;
    bgDivs.forEach((bg, i) => {
      gsap.killTweensOf(bg);
      bg.classList.toggle('active', i === index);
      gsap.set(bg, { opacity: i === index ? 1 : 0, scale: 1, clearProps: 'transform' });
    });
    currentIndex = index;
  }

  // Expose globally
  window.switchSlideBg = switchSlideBg;

  // Auto-detect slide changes via MutationObserver on .slide elements
  function observeSlides() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type === 'attributes' && m.attributeName === 'class') {
          const el = m.target;
          if (el.classList.contains('slide') && el.classList.contains('active')) {
            const idx = parseInt(el.dataset.i, 10);
            if (!isNaN(idx)) switchSlideBg(idx);
          }
        }
      });
    });

    slides.forEach(function(slide) {
      observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
    });
  }

  // Slides may not exist yet (loaded dynamically), so wait for them
  if (document.querySelectorAll('.slide').length > 0) {
    observeSlides();
  } else {
    const deckObserver = new MutationObserver(function(mutations, obs) {
      if (document.querySelectorAll('.slide').length > 0) {
        obs.disconnect();
        observeSlides();
      }
    });
    deckObserver.observe(document.body, { childList: true, subtree: true });
  }
})();

// ============================================================
// LAYER 3: FLOATING TYPOGRAPHY (decorative drifting text)
// ============================================================
(function initFloatingText() {
  const container = document.getElementById('floatingTextLayer');
  if (!container) return;

  const words = [
    { text: 'AI', size: '14vw', opacity: 0.025 },
    { text: 'AIRACLE', size: '10vw', opacity: 0.02 },
    { text: '智能', size: '12vw', opacity: 0.03 },
    { text: 'GLOBAL', size: '9vw', opacity: 0.022 },
    { text: '创新', size: '11vw', opacity: 0.028 },
    { text: 'FUTURE', size: '8vw', opacity: 0.02 },
    { text: '数据', size: '10vw', opacity: 0.025 },
    { text: 'NEURAL', size: '9vw', opacity: 0.022 }
  ];

  const driftAnims = ['floatDrift1', 'floatDrift2', 'floatDrift3', 'floatDrift4'];
  const elements = [];

  words.forEach(function(w, i) {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = w.text;
    el.style.fontSize = w.size;
    el.style.opacity = w.opacity;
    // Distribute across the viewport
    el.style.top = (10 + Math.random() * 70) + '%';
    el.style.left = (-5 + Math.random() * 90) + '%';
    // CSS drift animation
    var duration = 30 + Math.random() * 30;
    var delay = Math.random() * -20;
    el.style.animation = driftAnims[i % driftAnims.length] + ' ' + duration + 's ease-in-out ' + delay + 's infinite';
    container.appendChild(el);
    elements.push({ el: el, factor: 8 + i * 4 });
  });

  // Mouse parallax for floating text
  (function updateParallax() {
    elements.forEach(function(item) {
      var tx = _mouse.nx * item.factor;
      var ty = _mouse.ny * item.factor;
      item.el.style.marginLeft = tx + 'px';
      item.el.style.marginTop = ty + 'px';
    });
    requestAnimationFrame(updateParallax);
  })();
})();

// ============================================================
// AMBIENT BLOB PARALLAX (CSS elements)
// ============================================================
(function initBlobParallax() {
  const blobs = document.querySelectorAll('.mesh-blob');
  if (!blobs.length) return;
  (function upd() {
    blobs.forEach((b, i) => {
      const f = (i + 1) * 25;
      b.style.transform = `translate(${_mouse.nx*f}px,${_mouse.ny*f}px)`;
    });
    requestAnimationFrame(upd);
  })();
})();
