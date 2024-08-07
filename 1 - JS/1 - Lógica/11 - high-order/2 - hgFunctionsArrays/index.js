const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
  { nivel: 28, nome:"Garrosh", raca: "Orc", classe: "Guerreiro"},
  { nivel: 35, nome:"Varok", raca: "Orc", classe: "Guerreiro"},
  { nivel: 35, nome:"Uther", raca: "Humano", classe: ""},
  { nivel: 26, nome:"Jaina", raca: "Humano", classe: ""},
  { nivel: 39, nome:"Tyrade", raca: "Elfo Noturno", classe: ""},
  { nivel: 29, nome:"Muradin", raca: "Anão", classe: "Guerreiro"},
]

// Map

/* 
  const nomes = []
  for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    nomes.pusj(personagem.nome)
}
*/

// map: permite obter um novo array a partir de um array existente

const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

// Filter

/*
  const orcs = []
  for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    if (personagem.raca === "Orc") {
      orcs.push(personagem)
  } 
}
*/

// Filter: permite obter um novo array contendo apenas elementos específicos de um array exostentes

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

// Reduce

/*

let nivelTotal = 0

for (let i = 0; i < personagens.length; i++) {
nivelTotal += personagens[i].nivel
}

*/

// Reduce: serve para reduzir um array existente a um valor final qualquer, passando um valor entre cada iteração sobre esse array e retornando ele no final

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

// Sort

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos 
personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})
