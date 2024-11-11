class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataqueHeroi(){
        switch (this.tipo){
            case "mago":
                return "sua magia"
            case "guerreiro":
                return "sua espada"
            case "monge":
                return "artes marciais"
            case "ninja":
                return "suas shurikeins"
        }        
        }
    atacar(){
        let ataque = this.ataqueHeroi()
        console.log(`O ${this.tipo} atacou usando ${ataque}!`)
    }
    descrição(){
        let ataque = this.ataqueHeroi()
        console.log(`O Heroi ${this.nome} de ${this.idade} anos de idade é um poderoso ${this.tipo } que usa ${ataque} como ataque!`)
    }
}

let mago = new heroi("Jiraya", 90, "mago")
let guerreiro = new heroi("Kakashi", 45, "guerreiro")
let monge = new heroi("Itachi", 36, "monge")
let ninja = new heroi("Naruto", 18, "ninja")


mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()

mago.descrição()
guerreiro.descrição()
monge.descrição()
ninja.descrição()
