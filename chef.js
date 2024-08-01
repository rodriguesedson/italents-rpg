class Chef {
  nome;
  carteira;
  
  constructor(nome) {
    this.nome = nome;
    this.carteira = 0;
  }

  servirPrato(pagamento) {
    this.carteira += pagamento;
    console.log(`Prato servido. Pagamento Din$${pagamento.toFixed(2)}`);
  }

  olharCarteira() {
    console.log(`Valor total em caixa: Din$${this.carteira.toFixed(2)}`);
  }

  status() {
    console.log(`
      ===================
      Nome: ${this.nome}
      Carteira: Din$${this.carteira.toFixed(2)}
      ===================
    `);
  }
}

export default Chef;