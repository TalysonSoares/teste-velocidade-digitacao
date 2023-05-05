const texto = document.querySelector("#texto")
const entrada = document.querySelector("#entrada")
const reiniciar = document.querySelector("#reiniciar")
const resultado = document.querySelector("#resultado")
const historico = document.querySelector("#historico")
const alternarTemaBtn = document.querySelector("#alternarTema")

const textos = [
    "Exemplo de texto para digitar.",
    "Outro exemplo de texto para digitar.",
    "Mais um exemplo de texto para digitar.",
    "Digite isso.",
    "Você pode digitar isso aqui.",
];

function novoTexto() {
    const index = Math.floor(Math.random() * textos.length)
    texto.textContent = textos[index]
}

function atualizarTeste() {
    iniciar()

    if(entrada.value === texto.textContent) {
        console.log("verificar")
        verificar()
    }
}

function iniciar() {
    const statusDoTeste = JSON.parse(localStorage.getItem("testeEmAndamento"));

    if(!statusDoTeste) {
        localStorage.setItem("tempoInicial", new Date().getTime());
        localStorage.setItem("testeEmAndamento",true);
    }
}

function verificar() {
    const tempoFinal = new Date().getTime();
    const tempoInicial = parseInt(localStorage.getItem("tempoInicial"));
    const tempoGasto = (tempoFinal - tempoInicial) / 1000;
}

entrada.addEventListener("keyup", atualizarTeste);

novoTexto()
