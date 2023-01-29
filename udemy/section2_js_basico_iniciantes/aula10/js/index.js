//inverta os valores usando somente as variaveis.
//não é permitido fazer definições literais
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let aux;

// basicamente se você tem o valor antigo da variavel guardado, você pode mecher nela
aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

