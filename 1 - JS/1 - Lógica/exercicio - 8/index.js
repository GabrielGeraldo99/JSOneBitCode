const imoveis = []
let opcao = ''

do {
  opcao = prompt(
    'Olá seja bem vindo(a), ao cadastro de imóveis.\nTtotal de imóveis: ' +
      imoveis.length +
      '\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair'
  )
  switch (opcao) {
    case '1':
      const imovel = {}

      imovel.proprietario = prompt('Qual o nome do proprietario?')
      imovel.quartos = parseFloat(prompt('Qual a quantidade de quartos:'))
      imovel.banheiros = parseFloat(prompt('Quantidade de banheiros:'))
      imovel.garagem = prompt('O imóvel possui garagem?(Sim/Não)')
      if (imovel.garagem === "Sim") {
        alert("O imóvel possui garagem")
      }else {
        alert("O imóvel não possui garagem.")
      }

      const confirma = confirm(
        'Salvar este imóvel?\n' +
          '\nProprietario: ' +
          imovel.proprietario +
          '\nQuartos: ' +
          imovel.quartos +
          '\nBanheiros: ' +
          imovel.banheiros +
          '\nPossui Garagem? ' +
          imovel.garagem
      )
      if (confirma) {
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso!")
      } else {
        alert("Voltando ao menu.")
      }
      break
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          'Imovel ' +
            (i + 1) +
            '\nProprietário: ' +
            imoveis[i].proprietario +
            '\nQuartos: ' +
            imoveis[i].quartos +
            '\nBanheiros: ' +
            imoveis[i].banheiros +
            '\nPossui Garagem? ' +
            imoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Saindo..')
      break
    default:
      alert('Você escolheu uma opção inválida!')
      break
  }
} while (opcao !== '3')
