// comece a criar a sua função add na linha abaixo
function add(a,b){
    let soma = a + b
    return soma 
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let multiplicacao= 0
for( let i=0; i < b; i++){
    multiplicacao = add(a,multiplicacao)
} 

return multiplicacao
}


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let exponenciacao= 1
    for(let i=0; i < n; i++){
        exponenciacao = multiply(x,exponenciacao)
        
    }
return exponenciacao
}



// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    let fatorial=1
    // 5!= 5x4x3x2x1
    for(let i=1; i<= a;i++){
        fatorial= multiply(fatorial,i)
    }
    return fatorial
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
