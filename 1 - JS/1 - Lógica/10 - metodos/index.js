let pessoa = {
  nome: "Gabriel",
  idade: 25,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()