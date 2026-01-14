export default function initDate() {}
const funcionamento = document.querySelector('[data-semana]');
const funcionamentoDias = funcionamento.dataset.semana.split(',').map(Number);
const funcionamentoHora = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();
console.log(diaAgora);

const diaAberta = funcionamentoDias.indexOf(diaAgora) !== -1;
const horarioAberto =
  horaAgora >= funcionamentoHora[0] && horaAgora < funcionamentoHora[1];

console.log(horarioAberto, horaAgora);

if (diaAberta && horarioAberto) {
  funcionamento.classList.add('aberto');
} else {
  funcionamento.classList.remove('aberto');
}
