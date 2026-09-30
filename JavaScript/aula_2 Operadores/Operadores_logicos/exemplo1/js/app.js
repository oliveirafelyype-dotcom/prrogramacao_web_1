/*
Operadores Lógicos

&& -> (and/E) lógico
|| -> (or/OU) lógico
! -> (NOT/NÃO) lógico
*/

// Exemplos

let num1 = 10
let num2 = 15
let num3 = 2

if (num1 >= num2) {
    console.log("Entrou no IF")
} else {
    console.log("(Falsiane!) NÃO ENTROU NO IF")
}

// Exemplo composto

console.log("Condições Compostas")

if ((num1 >= num2) && (num1 != num3)) {
    console.log("Entrou no IF")
} else {
    console.log("(Falsiane!) NÃO ENTROU NO IF")
}

// Exemplo com 3 condições

console.log("Condições com 3 situações")

if ((num1 >= num2) && (num1 != num3) || (num1 != num3)) {
    console.log("Entrou no IF")
} else {
    console.log("(Falsiane!) NÃO ENTROU NO IF")
}

// Exemplo Condição Simples negada

console.log("Condição Simples negada")

if (!(num1 >= num2)) {
    console.log("Entrou no IF")
} else {
    console.log("(Falsiane!) NÃO ENTROU NO IF")
}