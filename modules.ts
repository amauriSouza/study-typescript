class Pessoa{
    constructor(public nome: string){}
    
    mostraNome(){
        return this.nome
    }

}

interface Profissao{
    nomeProfissao: string
}

//Export class
export {Pessoa, Profissao}