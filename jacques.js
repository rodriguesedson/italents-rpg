import Chef from './chef.js';

class Jacques extends Chef {
  constructor() {
    super('Jacques');
    this.carteira = 40;
  }
}

export default Jacques;