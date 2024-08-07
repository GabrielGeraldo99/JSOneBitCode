const  veiculo1 = prompt("Qual o nome do veículo 1:")
const  velocidade1 = parseFloat(prompt("Qual a velocidade do veículo 1:"))

const  veiculo2 = prompt("Qual o nome do veículo 2:")
const  velocidade2 = parseFloat(prompt("Qual a velocidade do veículo 2:"))

if (velocidade1 > velocidade2) {
  alert (veiculo1 + " é mais rápido que " + veiculo2)
} if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido que " + veiculo1)
} else if (velocidade1 === velocidade2) {
  alert("A velocidade dos dois carros são iguais!")
}