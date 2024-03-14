const promessa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Primeira promessa resolvida')
        resolve('1');
    }, 1000);
});

const promessa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Segunda promessa resolvida')
        resolve('2');
    }, 2000);
});

const promessa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Terceira promessa resolvida')
        resolve('3');
    }, 3000);
});

// Array de promessas
const promessas = [promessa1, promessa2, promessa3];

// Promise.all()
Promise.all(promessas)
    .then(resultados => {
        console.log('Todos os resultados:', resultados);
    })
    .catch(erro => {
        console.error('Um ou mais erros ocorreram:', erro);
    });

console.log('Operações em andamento...');
