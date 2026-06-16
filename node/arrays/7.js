const prompt = require('prompt-sync')();

let cidades = [];

for (let i = 0; i < 5; i++) {
    cidades[i] = prompt("Digite uma cidade: ");
}

let novaCidade = prompt("Digite mais uma cidade: ");

cidades.unshift(novaCidade);

console.log(cidades);