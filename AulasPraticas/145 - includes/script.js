let nomes = ['Matheus', 'Mario', 'João', 'Renata', 'Gabriela', 'Stela', 'Joana', 'Fernando', 'Matheus'];

console.log(nomes.includes("Matheus")); //true
// nome no singular serve como um parametro
console.log(nomes.includes("Janaina")); //false



if (nomes.includes('Matheus')){
    console.log('Existe esse nome no Array');
}else{
    console.log('não existe esse nome no array ');
};

if (nomes.includes('Janaina')){
    console.log('Existe esse nome no Array');
}else{
    console.log('não existe esse nome no array ');
};