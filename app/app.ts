import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
// mudança para getter agora consegue ler os valores
console.log(negociacao.volume);