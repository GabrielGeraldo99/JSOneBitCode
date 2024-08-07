// O que é um parâmetro

// O parâmetro é a entrada da função 

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função 

function dobro(x) {
  console.log("O dobro de " + x + " é " + (x * 2))
}
dobro(5)
dobro(7)

// Valor padrão para os parâmetros

// Mas podemos declarar um valor padrão para um parâmetro, assim, se ele não for informado, o valor padrão será usado no lugar do underfined 

function dizerOla(nome = "mundo") {
  console.log("Olá, " + nome + "!")
}
dizerOla("Gabriel")
dizerOla()

// É possível ter vários parâmetros

// Uma função pode ter quantos parâmetros quisermos, basta separa-los por vírgula

function soma(a, b) {
  console.log(a + b)
}
soma(1, 1)
soma(34, 5)

// A ordem dos parâmetros é importante 

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último 

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = { nome, email, senha, tipo}
  console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {nome, email, senha, tipo }
  console.log(usuario)
}

criarUsuario("Gabriel", "gabrielgeraldo165@gmail.com", "coxinha1234")
novoUsuario("Gabriel", "gabrielgeraldo@gmail.com", "coxinha1234")

// Funções com muitos parâmetros

// Ao criarmos uma função com muitos parâmetros, uma boa prática é substituí-los por um objeto

function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function parametroDoJeitoCerto(usuario) {
  // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

parametroDoJeitoCerto("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "", 
  email: "", 
  senha: "",
  aniversario: "",
  endereco: ""
}
parametroDoJeitoCerto(dadosDoUsuario)