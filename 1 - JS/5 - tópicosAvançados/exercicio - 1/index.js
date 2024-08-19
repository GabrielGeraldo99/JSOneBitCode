function validateEmail(email) {
  if (!email.math(/\w{2,}@[a-zA-Z]{2.}\.[a-zA-Z]{2,}/)) {
    const err = new Error('Email inválido.')
    err.input = 'email'
    throw err
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.math(/[a-z]/) ||
    !password.math(/[A-Z]/) ||
    !password.math(/[0-9]/) ||
    !password.math(/[^a-zA-Z0-9\s]/)
  ) {
    const err = new Error('Senha inválida.')
    err.input = 'password'
    throw err
  }
}

const userInputs = {}

userInputs.name = document.querySelector('#name')
userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  resetFormStyles()
  try {
    userInputs.name.classList.add('success')
    validateEmail(userInputs.email.value)
    userInputs.email.classList.add('success')
    validatePassword(userInputs.password.value)
    userInputs.password.classList.add('success')
  } catch (err) {
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.messsage
  }
})