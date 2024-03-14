// Função que retorna uma promessa simulando uma operação assíncrona
function operacaoAssincrona() {
    return new Promise((resolve, reject) => {
        // Simula um atraso de 2 segundos
        setTimeout(() => {
            // Simula um sucesso
            resolve('Operação concluída com sucesso!');
            // Ou simula um erro
            //reject('Ocorreu um erro durante a operação!');
        }, 2000);
    });
}

// Chamando a função que retorna uma promessa
console.log('Iniciando operação assíncrona...');
operacaoAssincrona()
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(erro => {
        console.error('Erro:', erro);
    });
console.log('Operação em andamento...');
