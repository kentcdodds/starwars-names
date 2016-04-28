import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';
//uniqueRandomArray = require('../node_modules/unique-random-array/index.js');
//starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
  firstNameBegWith:firstNameBegWith,
    lastNameBegWith:lastNameBegWith
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

function firstNameBegWith(first_letter){
    var arr =[];
    var char = first_letter.toUpperCase();
    for(var i=0;i<starWarsNames.length;i++){
        if (starWarsNames[i].charAt(0) == char) {
            arr.push(starWarsNames[i]);
        }
    }
    return arr;
}

function lastNameBegWith(last_letter){
    var arr =[];
    var last_name = [];
    var char = last_letter.toUpperCase();
    for(var i=0;i<starWarsNames.length;i++){
        last_name = starWarsNames[i].split(" ");
        if(last_name.length==2){
            if (last_name[1].charAt(0) == char) {    //second string in the name is considered the last name
                arr.push(starWarsNames[i]);
            }
        }
        else if(last_name.length==3){
            if (last_name[2].charAt(0) == char) {     //there'll be at the most three strings in a name
                arr.push(starWarsNames[i]);           //over here the third string in the name is considered as
                                                      // the last name
            }
        }
    }
    return arr;
}
