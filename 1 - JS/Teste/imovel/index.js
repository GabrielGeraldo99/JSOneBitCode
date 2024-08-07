const imovel = []
let opcao = ""

do {
  opcao = prompt (
    "Seja bem vindo(a), ao cadastro de imóveis.\nTotal de imóveis: " +
    imovel.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel:\n2. Listar imóveis\n3. Sair"
  )
  switch(opcao) {
    case "1":
      const imovel = {}

      imovel.proprietario = prompt("Qual o nome do proprietario?")
      imovel.quartos = parseFloat(prompt("Qual a quantidade de quartos:"))
      imovel.banheiros = parseFloat(prompt("Qual a quantidade de banheiros:"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
      

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietario: " + proprietario +
        "\nQuartos: " + quartos +
        "\nBanheiros: " + banheiros +
        "\nGaragem: " + garagem
      )
      if (confirma) {
        imoveis.push(imovel)
      }
      break
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel " +
          (i + 1) +
          "\nProprietario: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem: " + imoveis[i].garagem
        )
      }
      break
    case "3":
      alert("Saindo..")
      break
      default:
        alert("Você escolheu a opção inválida!")
  }
} while(opcao !== "3")