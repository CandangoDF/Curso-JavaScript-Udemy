let frase = "O rato roeu a roupa do rei de Roma";

let palavras = frase.split(" "); //deve deixar um espaço entre as aspas para o interpilador entender que a separação é entre espaços

let novaFrase = palavras.join('$');
console.log(novaFrase);

let letras = ['a', 'e', 'i', 'o', 'u'];
console.log(letras.join(','));