function register(element) {
  const username = element.childern.username.value
  const password = element.childern.password.value
  const passwordConfirmation = element.childern.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert("Usúario " + username + "registrado!")
  } else {
    alert("As senhas não conferem")
  }
}