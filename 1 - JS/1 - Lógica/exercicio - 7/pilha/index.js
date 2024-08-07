const baralho = []
let menu = ""

do {
menu = prompt(
  "Quantidade de cartas:\n " +
  baralho.length +
  "\n1 - Adicionar carta: " +
  "\n2 - Puxar carta: " +
  "\n3 - Sair."
)
switch (menu) {
  case "1":
    const novaCarta = prompt("Qual é a carta?")
    baralho.push(novaCarta)
    break
  case "1":
    const cartaPuxada = baralho.pop()
    if(!cartaPuxada){
      alert("Não há cartas no baralho.")
    }else {
      alert("Você puxou um: " + cartaPuxada)
    }
    break
  case "3":
    alert("Saindo..")
    break
    default:
      alert("Você escolheu a opção inválida!")
}
}while (menu !=="3")