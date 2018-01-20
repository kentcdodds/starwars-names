import {expect} from 'chai'
import pokemonNamesGen from '.'

describe('pokemon-names-gen', () => {
  it('should have a list of all available names', () => {
    expect(pokemonNamesGen.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(pokemonNamesGen.random()).to.satisfy(isIncludedIn(pokemonNamesGen.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
