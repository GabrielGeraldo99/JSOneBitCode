let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " º - " + fila[1] + "\n"
  }
  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "Escolha uma das opções:\n1 - Novo paciente:\n2 - Consultar paciente:\n3 - Sair "
  )
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual o nome do paciente:")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.unshift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila.")
      }else alert(pacienteConsultado + " foi removido da fila.")
      break
      case "3":
        alert("Saindo..")
      break
      default:
        alert("Opção inválida!")
        break
  }
}while (opcao !== "3")