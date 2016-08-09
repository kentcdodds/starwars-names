import {expect} from 'chai'
import gitHubNames from '.'

describe('github-names', () => {
  it('should have a list of all available names', () => {
    expect(gitHubNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(gitHubNames.random()).to.satisfy(isIncludedIn(gitHubNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
