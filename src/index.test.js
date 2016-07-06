'use strict';

var expect = require('chai').expect;
var starWarsNames = require('.');

describe('starwars-names', function() {
  it('should have a list of all available names', function() {
    expect(starWarsNames.all).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', function() {
    expect(starWarsNames.random()).to.satisfy(isIncludedIn(starWarsNames.all));
  });
});

function isArrayOfStrings(array) {
  return array.every(function(i) {
    return typeof i === 'string';
  });
}

function isIncludedIn(array) {
  return function(item) {
    return array.includes(item);
  };
}
