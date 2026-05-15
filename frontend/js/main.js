async function loadComponent(id, path) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(path);
  element.innerHTML = await response.text();
}

async function loadPage() {
  await loadComponent('header', './components/header.html');
  await loadComponent('hero', './components/hero.html');
  await loadComponent('about', './components/about.html');
  await loadComponent('credit-lines', './components/credit-lines.html');
  await loadComponent('simulation', './components/simulation.html');
  await loadComponent('faq', './components/faq.html');
  await loadComponent('modals', './components/modals.html');
  await loadComponent('footer', './components/footer.html');

  initTheme();
  initSimulation();
  initLogin();
  initFaq();
}

loadPage();
