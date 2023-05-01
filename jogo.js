
const botoes = document.querySelectorAll('button');
const resultado = document.getElementById('resultado');
let jogadorHumano;
let jogadorComputador;

function jogar(evento) {
  const botao = evento.target;
  botao.textContent = jogadorHumano;
  botao.disabled = true;
  if (verificarVitoria()) {
    resultado.textContent = jogadorHumano + " ganhou!";
    botoes.forEach(botao => botao.disabled = true);
  } else if (verificarEmpate()) {
    resultado.textContent = "Empate!";
  } else {
    jogadaComputador();
  }
}

function jogadaComputador() {
  const botoesDisponiveis = Array.from(botoes).filter(botao => !botao.disabled);
  const indiceAleatorio = Math.floor(Math.random() * botoesDisponiveis.length);
  const botaoAleatorio = botoesDisponiveis[indiceAleatorio];
  botaoAleatorio.textContent = jogadorComputador;
  botaoAleatorio.disabled = true;
  if (verificarVitoria()) {
    resultado.textContent = jogadorComputador + " ganhou!";
    botoes.forEach(botao => botao.disabled = true);
  } else if (verificarEmpate()) {
    resultado.textContent = "Empate!";
  }
}

function verificarVitoria() {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return linhas.some(linha => {
    const [a, b, c] = linha;
    return botoes[a].textContent &&
      botoes[a].textContent === botoes[b].textContent &&
      botoes[b].textContent === botoes[c].textContent;
  });
}

function verificarEmpate() {
  return Array.from(botoes).every(botao => botao.disabled);
}

botoes.forEach(botao => botao.addEventListener('click', jogar));
jogadorHumano = prompt("Escolha 'X' ou 'O' para jogar como").toUpperCase();
jogadorComputador = jogadorHumano === 'X' ? 'O' : 'X';

if (escolha === 'X') {
  jogadorHumano = 'X';
  jogadorComputador = 'O';
} else if (escolha === 'O') {
  jogadorHumano = 'O';
  jogadorComputador = 'X';
}

