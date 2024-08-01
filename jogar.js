import promptSync from 'prompt-sync';
import opcaoJogo from './opcaoJogo.js';
import lanchonete from './lanchonete.js';
import restaurante from './restaurante.js';
import restauranteGourmet from './restauranteGourmet.js';
const prompt = promptSync();

function jogar(personagem) {
  let continuar = true;

  do {
    console.log(`

      Olá chef ${personagem.nome}!

      Qual estabelecimento será aberto hoje?

      1 - Lanchonete;
      2 - Restaurante;
      3 - Restaurante Gourmet;
      4 - Contratar Chef;
      5 - Verificar carteira;
      0 - Sair;

    `);

    let opcao = opcaoJogo();
    switch(opcao) {
      case 1:
        personagem = lanchonete(personagem);
        if(personagem.carteira >= 80) {
          console.log('Parabéns! Agora você tem o suficiente para abrir um restaurante!');
        }
        personagem.status();
        break;
      case 2:
        if(personagem.carteira >= 120) {
          personagem = restaurante(personagem);
          if(personagem.carteira >= 350) {
            console.log('Parabéns! Agora você tem o suficiente para abrir um restaurante gourmet!');
          }
        } else {
          console.log('Você precisa de no mínimo 120 dinheiros para abrir o restaurante.');
        }
        personagem.status();
        break;
      case 3:
        if(personagem.carteira >= 350) {
          personagem = restauranteGourmet(personagem);
        } else {
          console.log('Você precisa de no mínimo 350 para abrir um restaurante gourmet.');
        }
        if(personagem.carteira >= 500) {
          console.log('Parabéns! Agora você tem o suficiente para contratar seus próprios chef e gerente');
        }
        break;
      case 4:
        if(personagem.carteira >= 500) {
          console.log(`
            Você contratou um chef e um gerente para cuidar
            do seu restaurante!
            
            Parabéns!

            Agora pode descansar e criar seu próprio Masterchef!

            Fim.
          `);
        } else {
          console.log('Você precisa de 500 dinheiros para contratar um chef e um gerente. Não foi dessa vez...');
        }
        continuar = false;
        break;
      case 5:
        personagem.status();
        break;
      case 0:
        console.log('Saindo do jogo.');
        continuar = false;
    }
  } while(continuar);
}

export default jogar;