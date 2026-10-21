(function () {
  var splash = document.getElementById('splash');
  var openBtn = document.getElementById('openBtn');

  function openInvitation() {
    splash.classList.add('hide');
    document.body.classList.remove('locked');
    window.scrollTo(0, 0);
  }
  openBtn.addEventListener('click', openInvitation);

  // Fade sections in as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
