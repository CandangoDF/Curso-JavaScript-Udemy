let carro ={
    marca: 'VW',
    portas: 4,
    eletrico: false,
    motor: 1.0
   
}
console.log(carro);

let adicionais ={
    tetoSolar: true,
    arCondicionado: true,
}

Object.assign(carro, adicionais);
console.log(carro);

//AULA 137
//Object.keys "para ver as chaves do objeto"
console.log('====AULA 137====');

console.log(Object.keys(carro));

