import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", event => {
    // prevent defeault para o submit não dar refresh
    event.preventDefault();
    controller.adiciona();
})