"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var result = file.split(/\r?\n/).map(Number);
console.log(result);
var isBiggerCounter = 0;
for (var i = 1; i < result.length; i++) {
    if (result[i] > result[i - 1]) {
        isBiggerCounter++;
    }
}
console.log(isBiggerCounter);
