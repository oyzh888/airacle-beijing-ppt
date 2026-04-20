/**
 * Lightbox — click-to-expand for product screenshots, images, and videos.
 *
 * Any element with class .product-shot or .img-card becomes clickable.
 * Clicking opens a full-screen overlay with the image/video.
 * Click overlay or press Escape to close.
 */
(() => {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<div class="lightbox-caption"></div>';
  document.body.appendChild(overlay);

  const caption = overlay.querySelector('.lightbox-caption');
  let currentMedia = null;

  function open(src, type, label) {
    // Remove old media
    if (currentMedia) { currentMedia.remove(); currentMedia = null; }

    if (type === 'video') {
      const v = document.createElement('video');
      v.src = src;
      v.autoplay = true;
      v.loop = true;
      v.muted = false; // unmute in lightbox for full experience
      v.playsInline = true;
      v.controls = true;
      v.style.maxWidth = '90vw';
      v.style.maxHeight = '85vh';
      overlay.insertBefore(v, caption);
      currentMedia = v;
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = label || '';
      overlay.insertBefore(img, caption);
      currentMedia = img;
    }

    caption.textContent = label || '';
    caption.style.display = label ? '' : 'none';

    // Force reflow then activate
    overlay.offsetHeight;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Cleanup after transition
    setTimeout(() => {
      if (currentMedia) { currentMedia.remove(); currentMedia = null; }
    }, 400);
  }

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === caption) close();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) close();
  });

  // Delegate click on .product-shot and .img-card
  document.addEventListener('click', (e) => {
    const shot = e.target.closest('.product-shot');
    const card = e.target.closest('.img-card');
    const target = shot || card;
    if (!target) return;

    // Don't intercept video controls clicks
    if (e.target.closest('video')) return;

    const media = target.querySelector('video') || target.querySelector('img');
    if (!media) return;

    e.preventDefault();
    e.stopPropagation();

    const src = media.src || media.currentSrc;
    const type = media.tagName === 'VIDEO' ? 'video' : 'image';
    const labelEl = target.querySelector('.product-shot-label, .img-label');
    const label = labelEl ? labelEl.textContent : '';

    open(src, type, label);
  });
})();
