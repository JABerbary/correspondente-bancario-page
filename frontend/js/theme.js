function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const footerLogo = document.getElementById('footerLogo');

  if (!themeToggle) return;

  themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('light-mode');

    const isLight = document.body.classList.contains('light-mode');

    if (footerLogo) {
      footerLogo.src = isLight
        ? './assets/img/logo-inferior.jpeg'
        : './assets/img/logo-inferior-white.jpeg';
    }

    if (themeIcon) {
      themeIcon.className = isLight
        ? 'bi bi-sun-fill'
        : 'bi bi-moon-fill';
    }
  });
}