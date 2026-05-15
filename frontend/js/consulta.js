const simulations = [
  {
    nome: 'João Silva',
    telefone: '19 99999-0000',
    cpf: '123.456.789-00',
    email: 'joao@email.com',
    linhaCredito: 'Imóvel novo',
    renda: 8500,
    valorImovel: 350000,
    valorEntrada: 70000
  },
  {
    nome: 'Maria Souza',
    telefone: '19 98888-1111',
    cpf: '987.654.321-00',
    email: 'maria@email.com',
    linhaCredito: 'Imóvel usado',
    renda: 6500,
    valorImovel: 280000,
    valorEntrada: 56000
  }
];

const tableBody = document.getElementById('simulationTableBody');
const filterName = document.getElementById('filterName');
const filterCpf = document.getElementById('filterCpf');
const clearFilters = document.getElementById('clearFilters');

function renderTable(data) {
  tableBody.innerHTML = '';

  data.forEach(item => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.telefone}</td>
        <td>${item.cpf}</td>
        <td>${item.email}</td>
        <td>${item.linhaCredito}</td>
        <td>R$ ${item.renda.toLocaleString('pt-BR')}</td>
        <td>R$ ${item.valorImovel.toLocaleString('pt-BR')}</td>
        <td>R$ ${item.valorEntrada.toLocaleString('pt-BR')}</td>
      </tr>
    `;
  });
}

function applyFilters() {
  const nameValue = filterName.value.toLowerCase();
  const cpfValue = filterCpf.value.replace(/\D/g, '');

  const filtered = simulations.filter(item => {
    const matchName = item.nome.toLowerCase().includes(nameValue);
    const matchCpf = item.cpf.replace(/\D/g, '').includes(cpfValue);

    return matchName && matchCpf;
  });

  renderTable(filtered);
}

filterName.addEventListener('input', applyFilters);
filterCpf.addEventListener('input', applyFilters);

clearFilters.addEventListener('click', function () {
  filterName.value = '';
  filterCpf.value = '';
  renderTable(simulations);
});

renderTable(simulations);