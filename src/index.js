import uniqueRandomArray from 'unique-random-array'
const pokemonNamesGen = require('./pokemon-names-gen.json')

const mainExport = {
  all: pokemonNamesGen,
  random: uniqueRandomArray(pokemonNamesGen),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
