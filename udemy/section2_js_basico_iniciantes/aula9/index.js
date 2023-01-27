/*

        operadores

* (+) adição | concatenação
    se um dos termos for uma string, independente do outro teremos uma concatenação
* (-) subtração
* (*) multiplicação
* (**) potenciação
* (/) divisão
* (%) resto de divição

*/

/*
    ordem de precedencia
1.  ()
2.  **
3.  * / %   (na ordem que aparecer)
4.  + -     (na ordem que aparecer)

*/

// é possivel incrementar usando o operador de incremento(++)
    // semelhante a fazer contador = contador + 1
// é possível decrementar usando contador--
    // semelhante a fazer contador = contador - 1    

//contador = 1. 
    // contador ++ -> passa a ter 2
    // contador ++ -> passa a ter 3

//diferença entre contador++ e ++contador -> mesmo para decremento
    //contador++ incrementa a variavel contador após o seu uso.
    //++contador incrementa a variavel contador antes de usa-la
    //ou seja a diferença está apenas se ele for usado na mesma linha

// vc ve a diferença entre
/*
 let contador = 1
 console.log(contador++)
 
 mas aqui não existe diferença
 
 let contador = 1
 contador++ ou ++contador
 console.log(contador)

 */
/*
    operadores de atribuição
    a+=b        a=a+b
    a-=b        a=a-b
    a/=b        a=a/b
    a*=b        a=a*b
    a**=b       a=a**b
    a%=b        a=a%b
*/