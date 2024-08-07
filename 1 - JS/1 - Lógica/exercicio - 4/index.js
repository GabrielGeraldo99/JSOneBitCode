const turista = prompt("Olá turista, qual é o seu nome?")

let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
  let cidade = prompt("Qual o nome da cidade que você visitou?")
  cidade += ' - ' + cidades +'\n'
  contagem++
  continuar = prompt("Você já visitou outra cidade? (Sim/Não)")
}
alert(
  "Turista: " +
  turista +
  "\nQuantidade de cidades visitadas: " +
  contagem + 
  "\nCidades visitadas:\n "+
  cidades
)