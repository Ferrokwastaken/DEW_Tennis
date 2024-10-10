/* eslint-env jest */

const Player = require('./player')

test('Crear un jugador', () => {
  const player1 = new Player('Pepe')
  expect(player1.name).toBe('Pepe')
})

test('Crea un jugador con ranking', () => {
  const player1 = new Player('Rafa', 12)
  expect(player1.name).toBe('Rafa')
  expect(player1.ranking).toBe(12)
})

test('Crea un jugador sin ranking, se debe poner 500 por defecto', () => {
  const player1 = new Player('Pedro')
  expect(player1.name).toBe('Pedro')
  expect(player1.ranking).toBe(500)
})

test('Crea un jugador de sexo masculino', () => {
  const player1 = new Player('Rafa', 12, 'male')
  expect(player1.name).toBe('Rafa')
  expect(player1.ranking).toBe(12)
  expect(player1.getSex()).toBe('male')
})

test('El género no se puede modificar', () => {
  const player1 = new Player('Rafa', 12, 'male')
  expect(player1.name).toBe('Rafa')
  expect(player1.ranking).toBe(12)
  expect(player1.getSex()).toBe('male')
  player1.sex = 'female'
  expect(player1.getSex()).not.toBe('female')
})

test('Crea una jugadora de sexo femenino', () => {
  const player1 = new Player('Serena', 12, 'female')
  expect(player1.name).toBe('Serena')
  expect(player1.ranking).toBe(12)
  expect(player1.getSex()).toBe('female')
})

test('Crea un jugador de sexo femenino si no se pone nada', () => {
  const player1 = new Player('Serena', 12)
  expect(player1.name).toBe('Serena')
  expect(player1.ranking).toBe(12)
  expect(player1.getSex()).toBe('female')
})

test('Crea un jugador de sexo femenino si no es male o female', () => {
  const player1 = new Player('Serena', 12, 'queer')
  expect(player1.name).toBe('Serena')
  expect(player1.ranking).toBe(12)
  expect(player1.getSex()).toBe('female')
})

test('Crear jugador con fecha de nacimiento', () => {
  const player1 = new Player('Serena', 12, 'female', '4/8/97')
  expect(player1.birthday).toStrictEqual(new Date(1997, 7, 4))
})

test('Crear jugador sin fecha de nacimiento, debe ser por defecto 1/1/2000', () => {
  const player1 = new Player('Serena', 12, 'female', '1/1/2000')
  expect(player1.birthday).toStrictEqual(new Date(2000, 0, 1))
})

test('Crear jugador con fecha de nacimiento incorrecta', () => {
  const player1 = new Player('Serena', 12, 'female', '33/14/2000')
  expect(player1.birthday).toStrictEqual(new Date(2001, 2, 5))
})

test('Se muestra con el método getBirthday la fecha en format dd/mm/YYYY', () => {
  const player1 = new Player('Serena', 12, 'female', '4/8/97')
  expect(player1.getBirthday()).toBe('04/08/1997')
})

test('Se crea un jugador con fecha y muestra su edad correctamente', () => {
  const player1 = new Player('Pedro', 12, 'male', '8/10/90')
  expect(player1.age).toBe(34)

  const player2 = new Player('Alejandra', 37, 'female', '18/10/2005')
  expect(player2.age).toBe(18)
})
