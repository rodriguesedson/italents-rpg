import PromptSync from "prompt-sync";
const prompt = PromptSync();

function opcaoAtendimento() {
  let continuar = true;
  let padrao = /[0-1]/;
  let opcao;

  do {
    opcao = +prompt('Deseja continuar servindo (1) ou encerrar o atendimento (0)? ');
    if(!padrao.test(opcao)) {
      console.log('Opção inválida. Digite 1 para continuar a servir ou 0 para encerrar o atendimento...');
    } else {
      continuar = false;
    }
  } while(continuar);

  return opcao;
}

export default opcaoAtendimento;