let pessoa = {
    nome: 'William',
    profissao: 'Developer',
    idade: 37,
    genero: 'masculino',
    raca: 'caucasiana',
    falar: function(){
        console.log('Isso é um método dentro do objeto - Eu falo sim!');
    }
}

console.log(pessoa.nome); // acessa o valor da chave dentro do objeto
console.log(pessoa.idade);
console.log(pessoa.raca);
pessoa.falar(); //acessa o método dentro do objeto


console.log();

//135
let carro ={
    marca: 'VW',
    portas: 4,
    eletrico: false,
    motor: 1.0
   
}
console.log();

console.log(carro.portas);
delete carro.portas;
console.log(carro.portas);

carro.tetoSolar = true;
console.log(carro.tetoSolar);
console.log(carro);