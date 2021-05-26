//  - uma forma de uma função receber indefinidos parãmetros;
//  - O operador rest vai virar um Array;
//  - O paramêtro é definido por:  ...nome

let num = '4';
let num1 = '5';
let num2 = '2';
let num3 = '1';
let num4 = '8';
let num5 = '7';

function printNumbers(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printNumbers(num, num1, num2, num5);
console.log('para aqui');
printNumbers(num3, num4);
console.log('para aqui');
printNumbers(2,4,5,6,8,7,7,5,4,3,7,9);