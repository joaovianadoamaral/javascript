let umaString = 'O rato roeu a roupa do rei de roma';
let outraString = umaString;
//substitui so o primeiro r
umaString = umaString.replace('r', '#');
//substitui todos os r's, usando a flag g
outraString = outraString.replace(/r/g, '#')

console.log(umaString);
console.log(outraString);
