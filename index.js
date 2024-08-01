import solicitarNumero from './solicitarNumero.js';
import criarPersonagem from './criarPersonagem.js';
import jogar from './jogar.js';

function main() {
  console.log(`
    Bem vindo ao Estrada para o sucesso culinário
    
    Escolha um personagem e inicie o jogo.

    Acumule dinheiros para conseguir avançar em sua jornada culinária!
  `);
  
  let personagem;
  let continuar = true;

  do {
    console.log(`

      1 - Criar Personagem
      2 - Jogar
      0 - Sair

    `);

    let opcao = solicitarNumero();
    switch(opcao) {
      case 1:
        personagem = criarPersonagem();
        break;
      case 2:
        jogar(personagem);
        break;
      case 0:
        console.log('Encerrando o jogo.');
        continuar = false;
    }
  } while(continuar);
}

main();