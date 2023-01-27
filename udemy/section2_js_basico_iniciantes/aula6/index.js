/*
mostre na tela:
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de .....
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idadeAtual = 34;
const peso = 84;
const alturaEmMetros = 1.80;
//calculo imc
let indiceMassaCorporal = peso/ (alturaEmMetros * alturaEmMetros);
let anoAtual = 2023;
let anoNascimento = anoAtual - idadeAtual;
console.log(nome, sobrenome, 'tem', idadeAtual, 'anos, pesa', peso, 'Kg');
console.log('tem de', alturaEmMetros, 'e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);

//template string = string com variaveis
// use a crase `texto ${variavel} texto`
    //forma mais legivel de se ler
    //forma mais moderna