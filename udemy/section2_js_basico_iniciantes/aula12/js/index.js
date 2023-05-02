let num1 = 1;
let num2 = 2.5;
let num3 = 10.53254316;

let num1String = num1.toString();
let num2String = num2.toString();
//concatenação
console.log(num1 + num2);
//concatenação
console.log(num1 + num2String);
console.log(num1String + num2String);

console.log(typeof num1); //número
console.log(typeof num1String);//string

// método toString para transformar um number em uma string();
// se passarmos um número para esse método ele irá converter para a base decimal do número
    // ex: let num1 = 30;
    // let num1Hexa = num1.toString(16);
    //console.log(num1Hexa) --> 1e
// método toFixed(número de casas decimais)
console.log('um número grande arredondado para duas casas decimais:')
console.log('Número grande: ', num3);
console.log('Número fixado: ', num3.toFixed(2));

let temp = num1 * 'ola';
// essa é uma conta falsa
let contaVerdadeira = Number.isNaN(temp);
// temp não é um número? true / false ->> false
console.log(contaVerdadeira);

// padrão IEEE 754-2008
// os números com ponto flutuante são imprecisos.
// * podemos transformar para inteiro
// * melhor forma: Number(num1.toFixed(2))
    // assim perde a imprecisão
