import uniqueRandomArray from 'unique-random-array';
import starWarsNames from '../starwars-names.json';

export default {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
