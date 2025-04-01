// Referenciando os elementos HTML atraves de suas classes
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botaoIniciar = document.querySelector(".app__card-primary-button");

const displayTempo = document.querySelector("#timer");
const imagem = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLong = 900;


// Quando clicar no botão "focoBt", a variavel "data-contexto" deve ser setada com o CSS que está em "foco"
focoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    imagem.setAttribute("src", "/imagens/foco.png");
});

curtoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    imagem.setAttribute("src", "/imagens/descanso-curto.png");
});

longoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    imagem.setAttribute("src", "/imagens/descanso-longo.png");
});