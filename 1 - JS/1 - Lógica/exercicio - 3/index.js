const medida = parseFloat(prompt("Informe o valor em metros?"))

const unidade = prompt(
  "Para qual medida deseja converter?: " +
  "\n1 - Milímetro (mm) " +
  "\n2 - Centrímetro (cm) " +
  "\n3 - Deciímetro (dm) " +
  "\n4 - Decâmetro (dam) " +
  "\n5 - Hectômetro (hm)" +
  "\n6 - Quilômetro (km) "
)

switch (unidade) {
  case '1':
    alert('Resultado: ' + medida + ' m= ' + medida * 1000 + 'mm')
    break
  case '2':
    alert('Resultado: ' + medida + ' m= ' + medida * 100 + 'cm')
    break
  case '3':
    alert('Resultado: ' + medida + ' m= ' + medida * 10 + 'dm')
    break
  case '4':
    alert('Resultado: ' + medida + ' m= ' + medida / 10 + 'dam')
    break
  case '5':
    alert('Resultado: ' + medida + ' m= ' + medida / 100 + 'hm')
    break
  case '6':
    alert('Resultado: ' + medida + ' m= ' + medida / 1000 + 'km')
    break
    default:
      ("Opção inválida!")
    break
}