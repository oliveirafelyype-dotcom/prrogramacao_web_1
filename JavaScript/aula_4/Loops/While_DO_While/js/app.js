/*
A diferença do While e Do While
1 - While
    1.1 - verifica a condição antes de entrar no loop
    1.2 - Tem um contador e variável de escape do loop
2 - Do While
    1.1 - Primeiro executa o loop, depois testa
    1.2 - Usado quando se precisa executar o loop pelo
        menos 1 vez
    1.3 - Escapa do loop apenas se a variável atender
        a condição
*/
/*
// While
let num1 = 0
while (num1 <= 5) {
    console.log(`${(num1 + 1)}° rodada`)
    num1++
}
*/

// exemplo 2 tabuada

let num1 = Number(prompt("Escolha uma tabuada"))
i = 1
while (i <= 10) {
    console.log(`${i} x ${num1} = ${i * num1}\n`)
    i++
}