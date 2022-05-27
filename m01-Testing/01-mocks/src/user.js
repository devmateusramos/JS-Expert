class User {
  constructor({ name, age, id, profession }) {
    this.id = parseInt(id)
    this.name = name
    this.profession = profession
    this.age = parseInt(age)
  }
}

module.exports = User