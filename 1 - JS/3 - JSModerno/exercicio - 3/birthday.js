const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1


  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYy')}`)
  console.log(`Dias até completar: ${ageYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1999-04-12")