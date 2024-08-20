// algumas funções auxiliares para criação dos elementos DOM.

function createTransactionContainer(id) {
  const container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}

function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

// função que cria um elemento para o valor da transação.


function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })
  const formatedAmount = formater.format(amount)
  if (amount > 0) {
    span.textContent = `${formatedAmount} C`
    span.classList.add('credit')
  } else {
    span.textContent = `${formatedAmount} D`
    span.classList.add('debit')
  }
  return span
}





// criação de uma função que renderiza uma transação na tela


function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)

  document.querySelector('#transactions').append(container)
  container.append(title, amount)
}



// uma função específica para fazer a requisição GET, que vai obter todas as transações do backend


async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then(res => res.json())
}




// para armazenar as transações criei uma variável no escopo global que começará como um array vazio. e também uma função para exibir na tela, o saldo total, calculado com base nos valores de transações.


let transactions = []


function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  balanceSpan.textContent = formater.format(balance)
}

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
  updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)



// criação de uma nova transação

async function saveTransaction(ev) {
  ev.preventDefault()

  const name = document.querySelector('#name').value
  const amount = parseFloat(document.querySelector('#amount').value)

  const response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    body: JSON.stringify({ name, amount }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const transaction = await response.json()
  transactions.push(transaction)
  renderTransaction(transaction)

  ev.target.reset()
  updateBalance()
}


document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)





// para realizar a edição de uma transação, fiz um botão na lista de transações que carregará os dados dela para o formulário onde poderão ser editadas e enviadas.


function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-btn')
  editBtn.textContent = 'Editar'
  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id
    document.querySelector('#name').value = transaction.name
    document.querySelector('#amount').value = transaction.amount
  })
  return editBtn
}





// atualizar a função saveTransaction() para que faça uma requisição PUT se o input id estiber presente.

async function saveTransaction(ev) {
  ev.preventDefault()

  const id = document.querySelector('#id').value
  const name = document.querySelector('#name').value
  const amount = parseFloat(document.querySelector('#amount').value)

  if (id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const transaction = await response.json()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1, transaction)
    document.querySelector(`#transaction-${id}`).remove()
    renderTransaction(transaction)
  } else {
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
  }

  ev.target.reset()
  updateBalance()
}


// e por último resta implementei a exclusão das transações.

function createDeleteTransactionButton(id) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'Excluir'
  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
    deleteBtn.parentElement.remove()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1)
    updateBalance()
  })
  return deleteBtn
}

