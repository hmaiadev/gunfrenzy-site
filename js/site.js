// Gun Frenzy landing: fills gameplay slots when media files exist and animates stat bars.
(function () {
  'use strict';

  // Screenshots: drop files named shot-1.jpg ... shot-4.jpg into public/assets/gameplay/.
  document.querySelectorAll('.shot[data-src]').forEach(function (slot) {
    var img = new Image();
    img.alt = 'Captura de gameplay de Gun Frenzy';
    img.loading = 'lazy';
    img.onload = function () { slot.innerHTML = ''; slot.appendChild(img); };
    img.src = slot.getAttribute('data-src');
  });

  // Trailer: public/assets/gameplay/trailer.mp4 (optional).
  var videoSlot = document.querySelector('.video-slot[data-video]');
  if (videoSlot) {
    var src = videoSlot.getAttribute('data-video');
    fetch(src, { method: 'HEAD' }).then(function (r) {
      if (!r.ok) return;
      var v = document.createElement('video');
      v.src = src; v.controls = true; v.playsInline = true; v.preload = 'metadata';
      videoSlot.innerHTML = ''; videoSlot.appendChild(v);
    }).catch(function () {});
  }

  // Stat bars fill when scrolled into view.
  var bars = document.querySelectorAll('.bars');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    bars.forEach(function (b) { io.observe(b); });
  } else {
    bars.forEach(function (b) { b.classList.add('on'); });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
