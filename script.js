document.addEventListener('DOMContentLoaded', () => {
  // Dark mode
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const icon = () => { btn.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙'; };
  icon();
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    icon();
  });

  // Animation khi cuộn trang (Intersection Observer)
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }
});
