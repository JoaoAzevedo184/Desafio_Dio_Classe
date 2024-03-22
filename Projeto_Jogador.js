const prompt = require('prompt-sync')(); 

var genero ="";
var prazer ="";
var valor = ""; 
var artigo = "";

while(true){//gênero 
    valor = prompt(`Digite o seu gênero:
                  [ 0 ] Masculino
                  [ 1 ] Feminino
                  `);
    if (verificarint(valor)) {
        valor = parseInt(valor);
        if (valor < 0 || valor > 1) {
            console.log("Escolha inválida. Por favor, escolha um número de 0 ou 1.");
            continue;
        } else if(valor === 1) {
            genero = "Jogadora"
            prazer = "conhecê-la"
            artigo = "A"
            break;
        } else {
            genero = "Jogador"
            prazer= "conhecê-lo"
            artigo = "O"
            break;
        }
        break;
    }
}

function verificarint(x) {
    if (isNaN(parseInt(x))) {
        console.log("Por favor, digite um número válido.");
        return false;
    }
    return true;
}

var vitoria = 0;
var derrota = 0;
var rank = "";
let nome = prompt("Olá grande " + genero + "! É um prazer enorme " + prazer + ". Por favor, me diga seu nome:");
console.log("Que nome grandioso, " + genero);
calcularVitoria(vitoria,derrota);

function calcularVitoria(x,y){
    x = x - y;
    classificacao(x);
    return 
}

function classificacao(z){//classificação
    switch (true) {
        case (z <= 10):
            rank = "Ferro";
            break;
        case (z >= 11 && z <= 20):
            rank = "Bronze";
            break;
        case (z >= 21 && z <= 50):
            rank = "Prata";
            break;
        case (z >= 51 && z <= 80):
            rank = "Ouro";
            break;
        case (z >= 81 && z <= 90):
            rank = "Diamante";
            break;
        case (z >= 91 && z <= 100):
            rank = "Lendário";
            break;
        default:
            rank = "Imortal";
    }
}
console.log(artigo + " " + genero + " ," + nome + ", possui " + vitoria+" vitórias e "+ derrota +"derrotas, então é rank "+ rank);
