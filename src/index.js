import uniqueRandomArray from 'unique-random-array'
const gitHubNames = require('./github-names.json')

const mainExport = {
  all: gitHubNames,
  random: uniqueRandomArray(gitHubNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
