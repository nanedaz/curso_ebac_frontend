function Cachorro(nome, idade, raca) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.latir = function(){
        console.log("Au au")
    }
}

function CaoGuia(nome, idade, raca, treinado) {
    this.idade = idade;
    this.raca = raca;
    this.treinado = treinado;
    Cachorro.call(this.nome);

} 

function CaoDeCompanhia(nome, idade, manso) {
    this.idade = idade;
    this.raca = raca;
    this.manso = manso;
    Cachorro.call(this.nome);
}

const cachorro1 = new Cachorro ("Jorel", 5, "Shih Tzu");
const CaoGuia2 = new CaoGuia ("Farofa", 2, "Golden", true);
const CaoDeCompanhia3 = new CaoDeCompanhia ("Mel", 9, "Poodle", true);

cachorro1.latir();


// Segunda forma, seguindo as opções de alterações propostas pelo VScode

class Cachorro2{
    constructor(nome, idade, raca){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }
}


class CaoGui extends Cachorro2{
    constructor(nome, idade, raca, treinado) {
        super(nome, idade, raca); 
        this.treinado = treinado;
    }
}

class CaoDeCompanhi extends Cachorro2{
    constructor(nome, idade, raca,manso) {
        super(nome, idade, raca);
        this.manso = manso;
    }
}

const cachorroComum = new Cachorro2 ("Jorel", 5, "shih tzu");
const CaoGuiaDaAna = new CaoGui("Farofa", 2, "golden", true);
const CaoDeCompanhiaDoLuis = new CaoDeCompanhi ("Mel", 9, "poodle", true);