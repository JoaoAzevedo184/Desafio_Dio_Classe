const prompt = require('prompt-sync')(); 
var genero ="";
var prazer ="";
var valor = ""; 
var artigo = "";
let escolhaClasse = 0;
let tipo = "";
let escolhaEspecie = 0;
let especie = "";
let idade = 0;

const classeFeminina = ["Maga","Guerrreira","Monje","Ninja"];
const classeMasculino = ["Mago","Guerrreiro","Monje","Ninja"];
const especieFeminina = ["Humana","Elfa","Goblin","Anã","Tiefling","Genasi","Dragonborn","Harengon","Halfling","Gnomo","Tabaxi"];
const especieMasculino = ["Humano","Elfo","Goblin","Anão","Tiefling","Genasi","Dragonborn","Harengon","Halfling","Gnomo","Tabaxi"];

while(true) { // Solicitar gênero
    valor = prompt(`Digite o seu gênero:
                  [ 0 ] Masculino
                  [ 1 ] Feminino
                  `);
    if (!isNaN(valor) && (valor === '0' || valor === '1')) {
        valor = parseInt(valor);
        genero = (valor === 1) ? "Heroína" : "Herói";
        prazer = (valor === 1) ? "conhecê-la" : "conhecê-lo";
        artigo = (valor === 1) ? "A" : "O";
        break;
    } else {
        console.log("Escolha inválida. Por favor, escolha 0 ou 1.");
        continue;
    }
}

function verificarint(x) {
    if (isNaN(parseInt(x))) {
        console.log("Por favor, digite um número válido.");
        return false;
    }
    return true;
}

class Heroi{
    constructor(nome, idade, tipo, especie){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.especie = especie; 
    }
    luta() {
        let ataque;
        switch (this.tipo) {
            case ('Mago'||'Maga'):
                ataque = 'usou magia';
                break;
            case ('Guerreiro'||'Guerreira'):
                ataque = 'usou espada';
                break;
            case 'Monge':
                ataque = 'usou artes marciais';
                break;
            case 'Ninja' :
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
                break;
        }
        console.log(`${this.nome}, ${artigo} ${this.tipo} ${this.especie}, atacou usando ${ataque}`);
    }
}

const nome = prompt("Olá grande " + genero + "! É um prazer enorme " + prazer + ". Por favor, me diga seu nome:");
console.log("Que nome grandioso, " + genero);
while(true){//idade
    idade = parseInt(prompt("Digite a sua idade:"));
    if (verificarint(idade)) {
        idade = parseInt(idade);
        break;
    }
}

while(true){//classe
    if (valor === 1) {
            escolhaClasse = prompt(`Digite o seu tipo de heroína:
            [ 0 ] Maga
            [ 1 ] Guerreira
            [ 2 ] Monge
            [ 3 ] Ninja
            `);
            if (verificarint(escolhaClasse)) {
                escolhaClasse = parseInt(escolhaClasse);
                if (escolhaClasse < 0 || escolhaClasse > 3) {
                    console.log("Escolha inválida. Por favor, escolha um número de 0 até 3.");
                    continue;
            }else{
                tipo = classeFeminina[escolhaClasse];
                break;
            }
        }
        } else {
            escolhaClasse = prompt(`Digite o seu tipo de herói:
            [ 0 ] Mago
            [ 1 ] Guerreiro
            [ 2 ] Monge
            [ 3 ] Ninja
            `);
            if (verificarint(escolhaClasse)) {
                escolhaClasse = parseInt(escolhaClasse);
                if (escolhaClasse < 0 || escolhaClasse > 3) {
                    console.log("Escolha inválida. Por favor, escolha um número de 0 até 3.");
                    continue;
            }else{
                tipo = classeMasculino[escolhaClasse];
                break;
            }
        }
    }
}

while(true){//espécie
    if (valor === 1) {
        escolhaEspecie = prompt(`Escolha sua espécie:
        [ 0 ] Humana
        [ 1 ] Elfa
        [ 2 ] Goblin
        [ 3 ] Anã
        [ 4 ] Tiefling
        [ 5 ] Genasi
        [ 6 ] Dragonborn
        [ 7 ] Harengon
        [ 8 ] Halfling
        [ 9 ] Gnomo
        [ 10 ] Tabaxi
        `);
        if (verificarint(escolhaEspecie)) {
            escolhaEspecie = parseInt(escolhaEspecie);
            if (escolhaEspecie < 0 || escolhaEspecie > 10) {
                console.log("Escolha inválida. Por favor, escolha um número de 0 até 10.");
                continue;
        }else{
            especie = especieFeminina[escolhaClasse];
            break;
        }
    }
    } else {
        escolhaEspecie = prompt(`Escolha sua espécie:
        [ 0 ] Humano
        [ 1 ] Elfo
        [ 2 ] Goblin
        [ 3 ] Anão
        [ 4 ] Tiefling
        [ 5 ] Genasi
        [ 6 ] Dragonborn
        [ 7 ] Harengon
        [ 8 ] Halfling
        [ 9 ] Gnomo
        [ 10 ] Tabaxi
        `);
        if (verificarint(escolhaEspecie)) {
            escolhaEspecie = parseInt(escolhaEspecie);
            if (escolhaEspecie < 0 || escolhaEspecie > 10) {
                console.log("Escolha inválida. Por favor, escolha um número de 0 até 10.");
                continue;
        }else{
            especie = especieMasculino[escolhaClasse];
            break;
        }
    }
}
}

const meuHeroi = new Heroi(nome, idade, tipo, especie);
meuHeroi.luta();