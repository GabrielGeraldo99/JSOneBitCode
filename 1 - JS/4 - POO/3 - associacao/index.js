const Adrress = require("./Address");
const Person = require('./Person')

const addr = new Adrress('Av. Paulista', 407, 'Centro', 'São Paulo', 'SP')
const john = new Person('John Doe', addr)


console.log(john)
console.log(john.address.fullAddress)
