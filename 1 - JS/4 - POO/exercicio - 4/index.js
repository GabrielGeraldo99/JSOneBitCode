const Mage = require("./Mage.js")
const Thief = require("./Thief.js")
const Warrior = require("./Warrior.js")

const gabriel = new Mage('Gabriel', 90, 4, 2, 14)
const cain = new Thief('Cain', 140, 22, 8)
const bianca = new Warrior('Bianca', 200, 14, 12, 4)

console.table({ gabriel, cain, bianca })


bianca.switchStance()
gabriel.attack(bianca)
cain.attack(gabriel)

console.table({ gabriel, cain, bianca })

bianca.attack(gabriel)
gabriel.heal(gabriel)
cain.attack(bianca)

console.table({ gabriel, cain, bianca })