// callback

function mult(values, func) {
  // console.log(arguments)

  for (let i = 0; i < values.length; i++) {
    // values[i] *= values[i] // n *= n
    values[i] = func(values[i])
  }

  return values
}

const values = [1, 2, 3, 4, 10, 20]
const func = (n) => n * 2

console.log(mult(values, func))


//--------------------------------------------------------------------------

function executarOperacaoAssincrona(callback) {
  console.log("Operação assíncrona iniciada.");
  // Simulando uma operação assíncrona
  setTimeout(function() {
    callback();
    console.log("Operação assíncrona concluída.");
    // Chama a callback após a conclusão da operação

  }, 3000);
  console.log("Operação assíncrona na metade.");
}

// Função de callback
function minhaCallback() {
    console.log("Callback executada!");
}

// Chamando a função e passando a callback como argumento
executarOperacaoAssincrona(minhaCallback);




console.log("Início");
setTimeout(function() {
    console.log("Meio");
}, 2000); // Espera 2 segundos antes de executar a função de callback
console.log("Fim");