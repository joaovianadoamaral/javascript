//tipos primitivos sustentam seus valores

// strings
const nome = 'Luiz';
const nome1 = "Luiz";
const nome2 = `Luiz`;
//number
const num1 = 10;
const num2 = 10.52; 
//undefined e null
    //não aponta para lugar nenhum na memória
let nomeAluno; // undefined 
let sobrenomeAluno = null; // nulo, considerado um objeto mas não se encaixa
    // null geralmente usado explicitamente
    // undefined é automatico da linguagem
    // undefined nunca é configurado por nós usuários
// bool - true / false, toda lógica retorna um bool
const aprovado = true;
const reprovado = false;

//string
console.log(typeof(nome));
//number
console.log(typeof(num1));
//undefined e null
console.log(typeof(nomeAluno), typeof(sobrenomeAluno));
//bool
console.log(typeof(aprovado))