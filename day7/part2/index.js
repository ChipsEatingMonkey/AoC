"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./../input', 'utf-8');
var numberz = file.split(",").map(Number);
console.log(numberz);
function findMedian(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum / arr.length;
}
;
function smulGaus(num) {
    return (num * (num + 1) / 2);
}
var avg = Math.floor((findMedian(numberz)));
var fuelCost = 0;
for (var _i = 0, numberz_1 = numberz; _i < numberz_1.length; _i++) {
    var num = numberz_1[_i];
    var distance = Math.abs(num - avg);
    fuelCost += smulGaus(distance);
}
console.log(fuelCost);
