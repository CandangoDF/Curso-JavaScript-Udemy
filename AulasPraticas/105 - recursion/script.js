function recursao(n){

    if (n - 1 < 2){
        console.log("recursão parou" + n);
    } else if(n % 2 !=0){
        console.log("número é ímpar" + n);
    }else{
        console.log("número par" + n);
        recursao(n -2);
    }
}
console.log(recursao(3));
console.log(recursao(14));
console.log(recursao(20));


