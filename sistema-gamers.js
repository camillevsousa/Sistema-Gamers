const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {

    console.log("\n==================================================");
    console.log("-------------Sistema de Gamers----------------");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Deletar jogador");
    console.log("3 - Mostrar equipe");
    console.log("4 - Cálculo da média da equipe");
    console.log("5 - Sair");
    console.log("\n");
}

function mostrarEquipe() {
   if (time.length === 0) {
        return;
}
    for(let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
        
    }

}

function cadastrarJogador() {

    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida! Por favor, insira um número.");
        return;
    } else {    
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }

        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!"); 

    }
        
    
}

function deletarJogador() {

    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para deletar.");
        return;
    }

    let nomeDeletado = prompt("Digite o nome do jogador a ser deletado: ");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
     }
    }
    

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado!");
        return;

    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
    

}

function calcularMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para calcular a média.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
}

    let mediaPontos = totalPontos / time.length;
    console.log("O time possuí uma pontuação média de: ", mediaPontos);

}
while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === '1') {
        cadastrarJogador();
    } else if (opcao === '2') {
        deletarJogador();
    } else if (opcao === '3') {
        mostrarEquipe();
    } else if (opcao === '4') {
        calcularMedia();
    }else if (opcao === '5') {
        continuar = false;

    } else {
        console.log("Opção inválida, digite outra opção!");
    }
}
    