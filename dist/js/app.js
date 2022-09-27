import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
negociacao.quantidade = 10000;

// cria nova propriedade dinamicamente ao inves de mudar o valor
console.log(negociacao);
