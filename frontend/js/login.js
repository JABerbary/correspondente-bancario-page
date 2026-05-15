function initLogin() {
  const openLoginModal = document.getElementById('openLoginModal');
  const confirmLogin = document.getElementById('confirmLogin');

  if (openLoginModal) {
    openLoginModal.addEventListener('click', function () {
      const modal = new bootstrap.Modal(document.getElementById('loginModal'));
      modal.show();
    });
  }

  if (confirmLogin) {
    confirmLogin.addEventListener('click', function () {
      const payload = {
        usuario: document.getElementById('loginUser').value,
        senha: document.getElementById('loginPassword').value
      };

      console.log('Login:', payload);

      window.location.href = './consulta.html';
    });
  }
}