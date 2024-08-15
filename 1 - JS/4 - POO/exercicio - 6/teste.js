const App = require("./App")

App.createUser("gabriel@email.com", "Gabriel Geraldo")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("bianca@email.com", "JBianca Figueiredo")

App.deposit("gabriel@email.com", 100)

App.transfer("gabriel@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("bianca@email.com", 2000, 24)

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("bianca@email.com"))
console.log(App.findUser("bianca@email.com").account)
console.log(App.findUser("bianca@email.com").account.loans[0].installments)