function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Chamada da função de atualizarRelogio para funcionar o relógio usando o método 'setInterval'
setInterval(atualizarRelogio, 1000);

// Chamada inicial para garantir que o relógio seja exibido imediatamente ao carregar a página
atualizarRelogio();