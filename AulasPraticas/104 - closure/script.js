function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}
let soma1 = lembrarSoma(2);
console.log(soma1(5));


let soma2 = lembrarSoma(45);
console.log(soma2(5));