export class Negociacao {

  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    // retorna uma data com mesma informação
    // porém de outra referencia para não ser modificada
    const data = new Date(this._data.getTime());
    return data;
  }
}
