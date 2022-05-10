"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var result = file.split(/\r?\n/);
// powerconsumption = gamma * epsilon
var gamma = 0;
var epsilon = 0;
var bitSums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
    for (var j = 0; j < 12; j++) {
        bitSums[j] += parseInt(result[i][j]);
    }
}
console.log(bitSums);
for (var j = 11; j >= 0; j--) {
    if (bitSums[j] / result.length >= 0.5) {
        gamma += Math.pow(2, 11 - j);
    }
    else {
        epsilon += Math.pow(2, 11 - j);
    }
}
console.log(gamma, epsilon);
console.log(gamma * epsilon);
