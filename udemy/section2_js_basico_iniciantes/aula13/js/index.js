const numUsuarioString = prompt('Digite um número: ')
let  numUsuario= Number(numUsuarioString);
let raizNum = numUsuario ** (1/2);
let numInteiro = Number.isInteger(numUsuario);
let eUmNumero = Number.isNaN(numUsuario);
let numArredondaBaixo = Math.floor(numUsuario);
let numArredondaCima = Math.ceil(numUsuario);
let numUsuario2casas = numUsuario.toFixed(2);
window.document.body.innerHTML = `<h1>Seu número é ${numUsuario} </h1> <br>`
window.document.body.innerHTML += `Raiz quadrada: ${raizNum}<br>`
window.document.body.innerHTML += `${numUsuario} é inteiro: ${numInteiro}<br>`
window.document.body.innerHTML += `é NaN: ${eUmNumero}<br>`
window.document.body.innerHTML += `Arredondando para baixo: ${numArredondaBaixo}<br>`
window.document.body.innerHTML += `Arredondando para cima: ${numArredondaCima}<br>`
window.document.body.innerHTML += `Com duas casas decimais: ${numUsuario2casas} <br>`