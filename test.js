let ataque

const heroi = {//Crie uma classe generica que represente um herói 
      name: "Everton",
      idade: 20,
      tipo: "Monge"  
}

function tipoAtaque() {
    if (heroi.tipo == "Mago") {//se mago -> no ataque exibir (usou magia)
        ataque = "Magia"
        console.log("o " + heroi.tipo + " atacou usando " + ataque)
    }

    if (heroi.tipo == "Monge") {//se monge -> no ataque exibir (usou artes marciais)
        ataque = "Arte Maciais"
        console.log("o " + heroi.tipo + " atacou usando " + ataque)
    }

    if (heroi.tipo == "Ninja") {//se ninja -> no ataque exibir (usou shuriken)
        ataque = "Shuriken"
        console.log("o " + heroi.tipo + " atacou usando " + ataque)
    }

    if (heroi.tipo == "Guerreiro") {//se guerreiro -> no ataque exibir (usou espada)
        ataque = "Espada"
        console.log("o " + heroi.tipo + " atacou usando " + ataque)
    }
}

tipoAtaque(heroi)



