"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var result = file.split(/\r?\n/).map(Number);
var isBiggerCounter = 0;
for (var i = 0; i < result.length - 3; i++) {
    if (result[i] + result[i + 1] + result[i + 2] < result[i + 1] + result[i + 2] + result[i + 3]) {
        isBiggerCounter++;
    }
}
console.log(isBiggerCounter);
