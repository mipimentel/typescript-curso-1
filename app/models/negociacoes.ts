import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
        // cria uma nova lista pelo spread operator 
        // que não afeta a propriedade
        return this.negociacoes;
    }
}
