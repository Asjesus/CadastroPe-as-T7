let pesoPeca = 100
let numeroPecas = 10
let listaPecas = ["Disco de Freio", "Motor", "Pastilha de Freio", "Pneu", "Volante", "Chassi", "Disco de Freio", "Motor", "Pastilha de Freio", "Pneu", "Volante", "Chassi"]
let nomePeca = "Pá"

// Verificação de peso da peça

if(pesoPeca >= 100){ console.log("Peso adequado, podemos cadastrar")
    
} else { console.log("Peso menor que 100g, não podemos cadastrar")

}

// Verificação tamanho da lsita de peça 

if (listaPecas.length >= 10) { console.log("Capacidade máxima atingida")
    
} else {
    console.log("Ainda há espaço para cadastro")
}

// Verificação do nome da peça 

if (nomePeca.length < 3) {console.log("Nome invalido, o nome precisar ter 3 caracteres ou mais")
    
} else { console.log ("Nome adequado")
    
}