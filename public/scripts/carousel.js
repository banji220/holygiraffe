// Carousel controller — wires prev/next buttons + position indicator
// for any [data-carousel] block. Runs once after DOMContentLoaded.
// Native horizontal swipe still works without this on touch devices.
(function () {
  function init() {
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
      var track = root.querySelector('[data-carousel-track]');
      var prev = root.querySelector('[data-carousel-prev]');
      var next = root.querySelector('[data-carousel-next]');
      var current = root.querySelector('[data-carousel-current]');
      if (!track) return;

      function step() {
        var card = track.querySelector('[data-card]');
        if (!card) return track.clientWidth;
        var styles = getComputedStyle(track);
        var gap = parseInt(styles.columnGap || styles.gap || '16', 10) || 16;
        return card.offsetWidth + gap;
      }

      if (prev) {
        prev.addEventListener('click', function () {
          track.scrollBy({ left: -step(), behavior: 'smooth' });
        });
      }
      if (next) {
        next.addEventListener('click', function () {
          track.scrollBy({ left: step(), behavior: 'smooth' });
        });
      }

      if (current) {
        var update = function () {
          var s = step();
          if (s <= 0) return;
          var idx = Math.round(track.scrollLeft / s) + 1;
          var max = track.querySelectorAll('[data-card]').length;
          current.textContent = String(Math.max(1, Math.min(idx, max)));
        };
        track.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
