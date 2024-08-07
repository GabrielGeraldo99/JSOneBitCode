const atacante = prompt("Qual o nome do personagem atacante:")
let poderDeAtaque = parseFloat(prompt("Qual o pode de ataque:")) 

const defensor = prompt("Qual o nome do defensor:")
let pontoDeVida = parseFloat(prompt("Quanto pontos de vida:"))
const poderDeDefesa = parseFloat(prompt("Qual o pode de defesa do defensor:"))
const possuiEscudo = prompt("O defensor possui escudo?(Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}
pontoDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de danos em " + defensor)
alert(
  atacante + 
  "\nPode de Ataque: " +
  poderDeAtaque + 
  "\n\n" +
  defensor + 
  "\nPontos de vida: " +
  pontoDeVida + 
  "\nPode de defesa: " +
  poderDeDefesa +
  "\nPossui escudo: " +
  possuiEscudo
  
) 