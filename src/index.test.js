import {expect} from 'chai'
import planetNames from '.'

describe('kk-planet-names', () => {
  it('should have a list of all available names', () => {
    expect(planetNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(planetNames.random()).to.satisfy(isIncludedIn(planetNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
