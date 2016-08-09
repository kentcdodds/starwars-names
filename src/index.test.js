import {expect} from 'chai'
import myBooksNames from '.'

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(myBooksNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(myBooksNames.random()).to.satisfy(isIncludedIn(myBooksNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
