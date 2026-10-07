let idade = Number(prompt("qual e a sua idade: "))
if(idade < 18){
    alert("INVALIDO nao poderas assinar")
}
else{
    alert("entao escolha entre os planos")
    let planos = Number(prompt("1 = Básico, 2 = Pro ou 3 = VIP"))
    switch (planos) {
    case 1:
        alert("Básico")
        break
    
    case 2:
        alert("Pro")
        break

    case 3:
        alert("VIP")
        break

        default:
            alert("má escolha")
}
}

