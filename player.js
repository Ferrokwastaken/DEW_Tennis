class Player {
  name
  ranking
  birthday
  #sex

  constructor (name, ranking = 500, sex = 'female', birthday = '1/1/2000') {
    this.name = name
    this.ranking = ranking
    if (sex === 'male') {
      this.#sex = 'male'
    } else {
      this.#sex = 'female'
    }
    const [day, month, year] = birthday.split('/')
    this.birthday = new Date(year, month - 1, day)
  }

  getSex () {
    return this.#sex
  }

  getBirthday () {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(this.birthday)
  }

  get age () {
    const now = new Date()
    let diff = now.getFullYear() - this.birthday.getFullYear()
    if (now.getMonth() < this.birthday.getMonth()) {
      diff--
    }
    return diff
  }
}

module.exports = Player
