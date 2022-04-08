import uniqueRandomArray from 'unique-random-array'
const bookList = require('./book-list.json')

const mainExport = {
  all: bookList,
  random: uniqueRandomArray(bookList),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
