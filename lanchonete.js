import opcaoAtendimento from './opcaoAtendimento.js';

function lanchonete(personagem) {
  let continuar = true;
  let contadorAtendimentos = 0;

  do {
    let opcao = opcaoAtendimento();
    switch(opcao) {
      case 1:
        console.log('Servindo prato do dia...');
        personagem.servirPrato(10);
        contadorAtendimentos++;
        if(contadorAtendimentos > 8) {
          console.log('Número máximo de atendimentos atingidos. Hora de descansar para o próximo dia!');
          continuar = false;
        }
        break;
      case 0:
        console.log('Encerrando o atendimento... Hora de verificar o balanço da carteira e limpar para o dia seguinte!');
        continuar = false;
    }
  } while(continuar);

  return personagem;
}

export default lanchonete;