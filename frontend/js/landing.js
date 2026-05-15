
function initLandingEvents() {
  const form = document.getElementById('simulationForm');
  const result = document.getElementById('simulationResult');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const footerLogo = document.getElementById('footerLogo');
  const openLoginModal = document.getElementById('openLoginModal');
  const confirmSimulation = document.getElementById('confirmSimulation');
  const confirmLogin = document.getElementById('confirmLogin');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log('Form enviado');
      result.classList.remove('d-none');
      form.reset();
    });
  }

  if (themeToggle) {
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
}
// const form = document.getElementById('simulationForm');
// const result = document.getElementById('simulationResult');
// const navbar = document.getElementById('mainNavbar');
// const themeToggle = document.getElementById('themeToggle');
// const themeIcon = document.getElementById('themeIcon');
// const footerLogo = document.getElementById('footerLogo');

// if (form) {
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(form);

//     const payload = {
//       nome: formData.get('nome'),
//       telefone: formData.get('telefone'),
//       linhaCredito: formData.get('linhaCredito'),
//       renda: Number(formData.get('renda')),
//       valorImovel: Number(formData.get('valorImovel')),
//       valorEntrada: Number(formData.get('valorEntrada'))
//     };

//     console.log('Payload que será enviado para API:', payload);

//     result.classList.remove('d-none');
//     form.reset();
//   });
// }

// window.addEventListener('scroll', function () {
//   if (window.scrollY > 80) {
//     navbar.classList.add('navbar-scrolled');
//   } else {
//     navbar.classList.remove('navbar-scrolled');
//   }
// });

// themeToggle.addEventListener('change', function () {
//   document.body.classList.toggle('light-mode');

//   const isLight = document.body.classList.contains('light-mode');

//   if (isLight) {
//   themeIcon.classList.remove('bi-moon-fill');
//   themeIcon.classList.add('bi-sun-fill');

//   footerLogo.src = './assets/img/logo-inferior.jpeg';
// } else {
//   themeIcon.classList.remove('bi-sun-fill');
//   themeIcon.classList.add('bi-moon-fill');

//   footerLogo.src = './assets/img/logo-inferior-white.jpeg';
// }
// });

// // themeToggle.addEventListener('change', function () {
// //   document.body.classList.toggle('light-mode');

// //   if (document.body.classList.contains('light-mode')) {
// //     themeIcon.classList.remove('bi-moon-fill');
// //     themeIcon.classList.add('bi-sun-fill');
// //   } else {
// //     themeIcon.classList.remove('bi-sun-fill');
// //     themeIcon.classList.add('bi-moon-fill');
// //   }
// // });