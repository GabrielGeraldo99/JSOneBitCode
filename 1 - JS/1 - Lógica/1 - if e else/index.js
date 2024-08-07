/* const idade = prompt("Informe a sua idade:")

if (idade > 18) {
  alert("Você é maior de idade")
} else {
  alert("Você é menor de idade")

  if (idade <12) {
    alert("Você é criança")
  }
} 
*/ 

// A melhor forma de usar
const idade = prompt("Infoem a sua idade:")

if (idade > 18) {
  alert ("Você é maior de idade")
} else if (idade >12) {
  alert ("Você é menor de idade")
} else if (idade > 4) {
  alert ("Você é criança")
} else {
  alert("...")
}


// Uma forma mais abreviada 

const resultado = (6 === 6) ? "verdadeiro" : "falso"

console.log(resultado)