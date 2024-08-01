import PromptSync from "prompt-sync";
const prompt = PromptSync();

function opcaoJogo() {
  let continuar = true;
  let padrao = /[0-5]/;
  let opcao;
  do {
    opcao = +prompt('Escolha o que deseja fazer. ');
    if(!padrao.test(opcao)) {
      console.log('Opção inválida. Escolha entre 0 e 5.');
    } else {
      continuar = false;
    }
  } while(continuar);

  return opcao;
}

export default opcaoJogo;