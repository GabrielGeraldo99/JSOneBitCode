class User {
  constructor(fullname, email, password) {
  this.fullname = fullname
  this.email = email
  this.password = password
}
login(email, password) {
  if(this.email === email && this.password === password) {
    console.log('Login realizado com sucesso.')
  } else {
    console.log('Falha ao fazer login! Email ou senha incorretos.')
  }
}
}

const gabriel = new User("Gabriel Geraldo", "gabrielgeraldo165@gmail.com", "123456")

gabriel.login("gabrielgeraldo165@gmail.com", "123456")
gabriel.login("gabrielgeraldo165@gmail.com", "67890")