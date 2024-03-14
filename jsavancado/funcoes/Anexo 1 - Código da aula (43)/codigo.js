// função flexa

function somaEX(a, b) {
    return a + b;
}


//----------------------------------

const soma = (a, b) => {
    return a + b;
};

console.log(soma(10, 2))


//---------------------------------------

const soma2 = (a, b) => a + b; // Se houver apenas uma expressão de retorno, você pode omitir as chaves {} e a palavra-chave return.

console.log(soma2(10, 8))


//-----------------------------------------

const mult = n => (n *= n) // Se houver apenas um parâmetro, você pode omitir os parênteses em torno dele.

console.log(mult(10))

