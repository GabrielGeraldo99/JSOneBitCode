const numero1 = prompt("Informe o primeiro número:")
const numero2 = prompt("Informe o segundo número:")

const x = parseFloat(numero1)
const y = parseFloat(numero2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "O resultado é?\n " +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultplicação: " + multiplicacao +
  "\nDivisão: " + divisao

)
