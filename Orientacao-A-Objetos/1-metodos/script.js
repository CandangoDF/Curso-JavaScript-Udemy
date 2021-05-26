const cachorro = {
    uivar: function() {
        console.log('auuuuuu');
    },
    rosnar: function (){
        console.log('rsrsrsrsr');
    }    
}
cachorro.uivar();
cachorro.rosnar();



//Aula 2 e meio

console.log();
console.log('Aula Continuação');
console.log();

const dog = {
    raca: 'SRD',
    latirivar: function() {
        console.log('auuuuuu');
    },
    rosnar: function (){
        console.log('rsrsrsrsr');
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function(){
    return "A raça é " + this.raca;
    }

}
console.log(dog.raca);

dog.setRaca('Pastor Belga');
console.log(dog.raca);
console.log('pausa');

console.log(dog.getRaca());