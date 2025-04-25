let intervalo;

function iniciarCronometro() {
  clearInterval(intervalo);
  const dataFutura = new Date("2025-12-19T23:59:59");
  intervalo = setInterval(() => {
    const agora = new Date();
    const diferença = dataFutura - agora;

    const dias = Math.floor(diferença / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferença % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  }, 1000);
}

iniciarCronometro();