import uniqueRandomArray from 'unique-random-array'
const myBooksNames = require('./mybooks-names.json')

const mainExport = {
  all: myBooksNames,
  random: uniqueRandomArray(myBooksNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
