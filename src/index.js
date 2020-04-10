import uniqueRandomArray from 'unique-random-array'
const planetNames = require('./kk-planet-names.json')

const mainExport = {
  all: planetNames,
  random: uniqueRandomArray(planetNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
