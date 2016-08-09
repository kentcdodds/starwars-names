import uniqueRandomArray from 'unique-random-array';
import starTrekAliens from './startrek-alien-races.json';

var getRandomItem = uniqueRandomArray(starTrekAliens);

module.exports = {
  all: starTrekAliens,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
