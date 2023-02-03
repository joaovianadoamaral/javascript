//pede o número ao usuario e converte para number
const numUsuarioString =  prompt('Digite um número: ');
const numUsuario = Number(numUsuarioString);
//pega as tags pelo id
const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
//variaveis usadas para legibilidade do texto
let raizNum = numUsuario ** (1/2);
let numInteiro = Number.isInteger(numUsuario);
let eUmNumero = Number.isNaN(numUsuario);
let numArredondaBaixo = Math.floor(numUsuario);
let numArredondaCima = Math.ceil(numUsuario);
let numUsuario2casas = numUsuario.toFixed(2);
//muda o valor do titulo
numeroTitulo.innerHTML = numUsuarioString;
//muda o valor do texto
texto.innerHTML = '';//limpa o place holder
texto.innerHTML += `<p>Raiz quadrada: ${raizNum}</p>`
texto.innerHTML += `<p>${numUsuario} é inteiro: ${numInteiro}</p>`
texto.innerHTML += `<p>é NaN: ${eUmNumero}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${numArredondaBaixo}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${numArredondaCima}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numUsuario2casas} </p>`