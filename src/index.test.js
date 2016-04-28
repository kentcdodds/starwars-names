import {expect} from 'chai';
import starWars from './index';

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
    describe('firstNameBegWith',function(){
        it('should be an array of strings with first name beginning with passed letter', function () {
            var names = starWars.firstNameBegWith('a');
            names.forEach(function(item){
                expect(starWars.all).to.include(item);
            });
        });
    });
    describe('lastNameBegWith',function(){
        it('should be an array of strings with last name beginning with passed letter', function () {
            var names = starWars.lastNameBegWith('a');
            names.forEach(function(item){
                expect(starWars.all).to.include(item);
            });
        });
    });
});
