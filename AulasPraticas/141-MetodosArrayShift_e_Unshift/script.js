// shift = remove o primeiro elemento do array
//unfhift= adiciona um ou mais elementos no inicio de um array 

let frutas = ["maçã", "melão", "uva"];
console.log('primeiro array = ' + frutas);

let frutaRemovida = frutas.shift();
console.log('segundo array, removendo maçã = ' + frutas);

let frutaInseria = frutas.unshift('banana');
console.log('terceiro array adicionando banana = ' + frutas);

