alert("ecolha uma das opçoes")
let escolha = Number(prompt("escolha a opçao Combo 1: Bug (Hambúrguer + Refri), 2: Combo Deploy (Pizza + Suco) ou 3: Combo Sênior (Salada + Água)"))
switch (escolha) {
    case 1:
        alert("Combo Bug (Hambúrguer + Refri)")
        break
    
    case 2:
        alert("Combo Deploy (Pizza + Suco)")
        break

    case 3:
        alert("Combo Sênior (Salada + Água)")
        break

        default:
            alert("má escolha")
}