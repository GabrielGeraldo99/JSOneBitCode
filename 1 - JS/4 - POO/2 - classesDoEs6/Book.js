class Book {
  // Configuraremos as instâncias aqui dentro
  constructor (tilte) {
    this.title = tilte
    this.published = false
  }

  publish() {
    this.published = true
  }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)
console.log(eragon instanceof Book)