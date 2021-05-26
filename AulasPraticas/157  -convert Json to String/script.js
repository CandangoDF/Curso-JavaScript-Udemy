let pessoa = {
    "nome": "William",
    "sobrenome": "Batista Pereira",
    "idade": 28,
    "profissao": "Desenvolvedor",
    "hobbies": ["malhar", "video-game", "Bike"],
}

let pessoaTexto = JSON.stringify(pessoa); // converte JSON para String
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto); //Converte String para JSON novamente
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[1]); //video-game