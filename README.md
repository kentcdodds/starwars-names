# starwars-names

[![travis build](https://img.shields.io/travis/kentcdodds/starwars-names.svg?style=flat-square)](https://travis-ci.org/kentcdodds/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/kentcdodds/starwars-names.svg?style=flat-square)](https://codecov.io/github/kentcdodds/starwars-names)
[![version](https://img.shields.io/npm/v/starwars-names.svg?style=flat-square)](http://npm.im/starwars-names)
[![downloads](https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=starwars-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Star Wars characters.

![starwars-names](other/starwars-names.gif)

## Installation

This package is distributed via npm:

```
npm install starwars-names
```

## Usage

```javascript
var names = require('starwars-names');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

## Other

This library was developed by [Kent C. Dodds](https://twitter.com/kentcdodds) as part of an
[egghead.io](http://egghead.io/) series called "How to Write a JavaScript Library."
