import promptSync from 'prompt-sync';

const prompt = promptSync();

function solicitarNumero() {
  let opcao;
  let padrao = /[0-2]/;
  let continuar = true;

  do {
    opcao = +prompt('Selecione uma das opções. ');
    if(!padrao.test(opcao)) {
      console.log('Opção inválida. Escolha entre as opções de 0 a 2.');
    } else {
      continuar = false;
    }
  } while(continuar);

  return opcao;
}

export default solicitarNumero;