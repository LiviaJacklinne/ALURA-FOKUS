// Referenciando os elementos HTML atraves de suas classes
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botaoIniciar = document.querySelector(".app__card-primary-button");
const botoes = document.querySelectorAll(".app__card-button");

const displayTempo = document.querySelector("#timer");
const imagem = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLong = 900;


// ouvindo os eventos do arquivo HTML quando clicado em um dos botões declarados
focoBt.addEventListener("click", () => {
    alterarContexto("foco");
    // ativando o CSS com foco no modo selecionado (classe estilizada no CSS - active)
    focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
    alterarContexto("descanso-curto");
    curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
    alterarContexto("descanso-longo");
    longoBt.classList.add("active");
});

// setando as variaveis de forma dinamica (parametrizada)
function alterarContexto(contexto) {

    // forEach = for > usado para percorrer todos os botões com a classe declarada na inicialização da variavel
    // o "active" é removido de todos os botões e em seguida, só um é setado novamente
    botoes.forEach(function (contexo) {
        contexo.classList.remove("active");
    })

    // seta o atributo "data-contexto" de acordo com o CSS passado em "contexto"
    html.setAttribute("data-contexo", contexto);
    // exibindo a imagem de acordo com o contexto passado (nome da imagem)
    imagem.setAttribute("src", `/imagens/${contexto}.png`);


    // switch para setar qual texto irá aparecer no front, de acordo com cada contexto
    switch(contexto) {
        case "foco":
            titulo.innerHTML = ` 
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = ` 
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = ` 
            Hora de voltar à superficie.<br>
                <strong class="app__title-strong">Faça uma pausa longa!</strong>`;
            break;
        default:
            break;
    }
}