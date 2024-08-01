import Paola from './paola.js';
import Jacques from './jacques.js';
import solicitarNumero from './solicitarNumero.js';

function criarPersonagem() {
  console.log(`
    Bem vindo à criação de personagem.
    Personagens disponíveis:
    1 - Paola
    2 - Jacques
    Digite 0 para Sair
  `);

  let personagem;
  let continuar = true;
  do {
    let opcao = solicitarNumero();
    switch(opcao) {
      case 1:
        console.log('Opção: Paola');
        personagem = new Paola();
        continuar = false;
        break;
      case 2:
        console.log('Opção: Jacques');
        personagem = new Jacques();
        continuar = false;
        break;
      case 0:
        console.log('Saindo da criação de personagem.');
        continuar = false;
    }
  } while(continuar);

  return personagem;
}

export default criarPersonagem;