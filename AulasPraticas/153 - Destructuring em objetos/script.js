// Podems definir variáveis com propriedades do objetocom uma notação
// diferente, chamada destruturing

const person = {
    name: 'William',
    sobrenome: 'Batista'
}

const {name: fname, sobrenome: lname} = person;

console.log(fname );
console.log(lname);
console.log(fname, lname);