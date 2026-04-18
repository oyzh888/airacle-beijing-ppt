/**
 * Custom Cursor — dot + ring + trail particles + hover state
 */
(function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  // Trail particles
  const trails = []; const TRAIL_N = 8;
  for (let i = 0; i < TRAIL_N; i++) {
    const d = document.createElement('div');
    d.className = 'cursor-trail';
    document.body.appendChild(d);
    trails.push({ el: d, x: 0, y: 0 });
  }

  let cx = 0, cy = 0, dx = 0, dy = 0;
  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });

  // Hover detection
  const hoverEls = 'a,button,.tc,.gc,.img-card,.arrow-btn,.bnav-dot,.minimap-dot,.feat-item,.magnetic';
  document.addEventListener('mouseover', e => { if (e.target.closest(hoverEls)) ring.classList.add('hover'); });
  document.addEventListener('mouseout', e => { if (e.target.closest(hoverEls)) ring.classList.remove('hover'); });

  (function upd() {
    dx += (cx - dx) * .15; dy += (cy - dy) * .15;
    dot.style.left = cx - 3 + 'px'; dot.style.top = cy - 3 + 'px';
    ring.style.left = dx + 'px'; ring.style.top = dy + 'px';

    for (let i = trails.length - 1; i > 0; i--) { trails[i].x = trails[i-1].x; trails[i].y = trails[i-1].y; }
    trails[0].x = cx; trails[0].y = cy;
    trails.forEach((t, i) => {
      const s = 1 - i / TRAIL_N;
      t.el.style.left = t.x - 2 + 'px'; t.el.style.top = t.y - 2 + 'px';
      t.el.style.opacity = s * .25; t.el.style.transform = `scale(${s})`;
    });
    requestAnimationFrame(upd);
  })();
})();

// Magnetic hover on cards (3D tilt)
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    el.style.transform = `perspective(600px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = 'none'; });
});

// Radial highlight for all .gc cards
document.querySelectorAll('.gc').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});
