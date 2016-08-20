import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
