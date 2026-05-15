function initSimulation() {
  const form = document.getElementById('simulationForm');
  const result = document.getElementById('simulationResult');
  const confirmSimulation = document.getElementById('confirmSimulation');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const modal = new bootstrap.Modal(document.getElementById('simulationModal'));
      modal.show();
    });
  }

  if (confirmSimulation) {
    confirmSimulation.addEventListener('click', function () {
      const formData = new FormData(form);

      const payload = {
        nome: formData.get('nome'),
        telefone: formData.get('telefone'),
        linhaCredito: formData.get('linhaCredito'),
        renda: Number(formData.get('renda')),
        valorImovel: Number(formData.get('valorImovel')),
        valorEntrada: Number(formData.get('valorEntrada')),
        cliente: {
          nome: document.getElementById('clientName').value,
          email: document.getElementById('clientEmail').value,
          cpf: document.getElementById('clientCpf').value
        }
      };

      console.log('Payload completo:', payload);

      if (result) result.classList.remove('d-none');

      form.reset();

      bootstrap.Modal.getInstance(document.getElementById('simulationModal')).hide();
    });
  }
}