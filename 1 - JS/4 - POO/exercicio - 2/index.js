const Author = require("./Author")

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "lorem ipsum dolor sic amet ...")


post.addComment("Gabriel", "Muito bom!")
post.addComment("Geraldo", "Achei interresante")

console.log(john)
console.log(post)