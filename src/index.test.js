import starWars from './index'
import test from 'ava'
import is from 'is_js'

test('all is an array of strings', t => {
  t.true(
    starWars.all.every(item => typeof item === 'string')
  )
})

test(`all should contain 'Luke Skywalker'`, t => {
  t.true(
    is.inArray('Luke Skywalker', starWars.all)
  )
})

test('random should return a random item from the starWars.all', t => {
  t.true(
    is.inArray(starWars.random(), starWars.all)
  )
})

test('random should return an array of random items when passed a number', t => {
  const items = starWars.random(3)
  t.true(items.length === 3)
  t.true(
    items.every(item => is.inArray(item, starWars.all))
  )
})

