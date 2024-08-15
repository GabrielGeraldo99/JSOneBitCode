class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100 // 10099
  }

  get amount() {
    return this.#amount / 100
  }

  set username(newUsername) {
    if (typeof newUsername === 'string') {
      this.#username = newUsername
    } else {
      console.log('username must be of type string')
    }
  }

  get username() {
    return this.#username
  }
}

const myvallet = new Wallet()

console.log(myvallet.amount)

myvallet.username = "Gabriel"
console.log(myvallet.username)

myvallet.username += " Geraldo "
console.log(myvallet.username)

myvallet.username = 52002
console.log(myvallet.username)