#!/usr/bin/env node
var idioms = require('./idioms.json');
var utils = require('./utils.js');

// main

console.log(idioms[utils.random(0, idioms.length)]);

