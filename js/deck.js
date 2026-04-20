/**
 * Slide Deck Engine
 * - GSAP transitions (scale + blur + slide)
 * - Counter animations
 * - Progress bars
 * - Character split animation
 * - Keyboard / Touch / Wheel navigation
 *
 * Exports: window.D = { go(delta), goTo(index) }
 */
const D = (() => {
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  let cur = 0, busy = false;
  const labels = ['封面','公司','团队','AI员工','技术','商务','客户','贡献','愿景'];

  // ---- Build Minimap ----
  const mm = document.getElementById('minimap');
  if (mm) slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'minimap-dot' + (i === 0 ? ' active' : '');
    d.dataset.label = labels[i] || '';
    d.onclick = () => goTo(i);
    mm.appendChild(d);
  });

  // ---- Build Bottom Nav ----
  const bn = document.getElementById('bnav');
  if (bn) slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'bnav-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goTo(i);
    bn.appendChild(d);
  });

  // ---- UI update ----
  function ui() {
    const sNum = document.getElementById('sNum');
    const sTotal = document.getElementById('sTotal');
    const prog = document.getElementById('progress');
    if (sNum) sNum.textContent = String(cur + 1).padStart(2, '0');
    if (sTotal) sTotal.textContent = String(total).padStart(2, '0');
    if (prog) prog.style.width = ((cur + 1) / total * 100) + '%';
    if (mm) mm.querySelectorAll('.minimap-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
    if (bn) bn.querySelectorAll('.bnav-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  function clearSlideAnimations(slide) {
    gsap.killTweensOf(slide);
    slide.querySelectorAll('.ai,.char,.fly-in,.tbar-fill,.cbar-fill,[data-count]').forEach(el => {
      gsap.killTweensOf(el);
      gsap.killTweensOf(el, 'opacity,x,y,scale,rotation,filter,width');
      gsap.set(el, { clearProps: 'opacity,x,y,scale,rotation,filter,width' });
    });
    slide.querySelectorAll('.tbar-fill,.cbar-fill').forEach(el => { el.style.width = '0%'; });
    slide.querySelectorAll('[data-count]').forEach(el => {
      const raw = el.dataset.count;
      el.textContent = raw && raw !== '2024' ? '0' : raw;
    });
    slide.querySelectorAll('.ai').forEach(el => gsap.set(el, { opacity: 0, y: 0, x: 0, rotateX: 0 }));
    slide.querySelectorAll('.char').forEach(el => gsap.set(el, { opacity: 0, y: 60, rotateX: -40, scale: .8 }));
    slide.querySelectorAll('.fly-in').forEach(el => {
      el.classList.remove('landed');
      gsap.set(el, { opacity: 0, x: 0, y: 0, scale: 1, rotation: 0 });
    });
  }

  // ---- Animate slide content ----
  function animSlide(slide) {
    // Staggered items
    slide.querySelectorAll('.ai').forEach((el) => {
      const d = parseFloat(el.dataset.delay || 0);
      gsap.to(el, { opacity: 1, duration: .2, delay: d + .02, ease: 'none', overwrite: 'auto' });
    });

    // Hero title character split
    const hero = slide.querySelector('.hero');
    if (hero && !hero.dataset.split) {
      hero.dataset.split = '1';
      const txt = hero.textContent; hero.textContent = '';
      [...txt].forEach(ch => {
        const s = document.createElement('span');
        s.className = 'char'; s.textContent = ch; s.style.display = 'inline-block';
        hero.appendChild(s);
      });
    }
    if (hero) {
      hero.querySelectorAll('.char').forEach((ch, i) => {
        gsap.fromTo(ch, { opacity: 0, y: 20, rotateX: 0, scale: 1 },
          { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: .24, delay: .04 + i * .02, ease: 'power1.out', overwrite: 'auto' });
      });
    }

    // Counter animation
    slide.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const o = { v: 0 };
      gsap.to(o, { v: target, duration: 1.8, delay: .4, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v); } });
    });

    // Tech & contrib bars
    slide.querySelectorAll('.tbar-fill[data-w]').forEach(el => { gsap.to(el, { width: el.dataset.w + '%', duration: 1.5, delay: .5, ease: 'power2.out' }); });
    slide.querySelectorAll('.cbar-fill[data-w]').forEach(el => { gsap.to(el, { width: el.dataset.w + '%', duration: 1.8, delay: .4, ease: 'power2.out' }); });

    // Cinematic fly-in elements
    slide.querySelectorAll('.fly-in').forEach(el => {
      const dir = el.dataset.fly || 'right';
      const delay = parseFloat(el.dataset.flyDelay || 0.3);
      el.classList.remove('landed');

      // Starting position based on direction
      const from = { opacity: 0, scale: 0.3, rotation: dir === 'left' ? -15 : dir === 'right' ? 15 : 0 };
      if (dir === 'right') { from.x = 300; from.y = 40; }
      else if (dir === 'left') { from.x = -300; from.y = 40; }
      else if (dir === 'bottom') { from.x = 0; from.y = 300; }
      else if (dir === 'top') { from.x = 0; from.y = -300; }

      gsap.fromTo(el, from, {
        opacity: 1, x: 0, y: 0, scale: 1, rotation: 0,
        duration: 1.0, delay: delay,
        ease: 'back.out(1.2)',
        onComplete: () => el.classList.add('landed')
      });
    });
  }

  // ---- Transition ----
  async function goTo(n) {
    if (n === cur || busy || n < 0 || n >= total) return;
    busy = true;
    const dir = n > cur ? 1 : -1;
    const old = slides[cur], nw = slides[n];
    cur = n; ui();

    clearSlideAnimations(old);
    clearSlideAnimations(nw);

    old.classList.remove('active');
    gsap.set(old, { opacity: 0, x: 0, filter: 'none' });

    nw.classList.add('active');
    gsap.set(nw, { opacity: 1, x: 0, filter: 'none' });

    // Now animate children in (single pass, no double-flash)
    animSlide(nw);
    busy = false;
  }

  function go(d) { goTo(cur + d); }

  // ---- Keyboard ----
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); go(-1); }
    if (e.key === 'Home') goTo(0);
    if (e.key === 'End') goTo(total - 1);
    const num = parseInt(e.key);
    if (num >= 1 && num <= total) goTo(num - 1);
  });

  // ---- Touch ----
  let tx = 0, ty = 0;
  document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) { dx < 0 ? go(1) : go(-1); }
  });

  // ---- Wheel ----
  let wc = false;
  document.addEventListener('wheel', e => {
    if (wc) return; wc = true; setTimeout(() => wc = false, 700);
    if (e.deltaY > 25) go(1); else if (e.deltaY < -25) go(-1);
  }, { passive: true });

  // ---- Init ----
  ui();
  // Hide children first, then animate them in (prevents double flash on load)
  if (slides[0]) {
    clearSlideAnimations(slides[0]);
    slides[0].querySelectorAll('[data-count]').forEach(el => { el.textContent = '0'; });
    setTimeout(() => animSlide(slides[0]), 150);
  }

  return { go, goTo };
})();
