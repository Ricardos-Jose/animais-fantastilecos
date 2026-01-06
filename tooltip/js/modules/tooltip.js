export default function initTooltip() {}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((i) => {
  i.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(e) {
  const tooltipBox = criarTooltip(this);
  console.log(e);
}

function criarTooltip(elemento) {
  const tooltipBox = document.createElement('div');
  tooltipBox.classList.add('tooltip');
  const text = document.getAttribute('aria-label');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
