"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var numberz = file.split(",").map(Number);
var findMedian = function (arr) {
    if (arr === void 0) { arr = []; }
    var sorted = arr.slice().sort(function (a, b) {
        return a - b;
    });
    if (sorted.length % 2 === 0) {
        var first = sorted[sorted.length / 2 - 1];
        var second = sorted[sorted.length / 2];
        return (first + second) / 2;
    }
    else {
        var mid = Math.floor(sorted.length / 2);
        return sorted[mid];
    }
    ;
};
var median = (findMedian(numberz));
var fuelCost = 0;
for (var _i = 0, numberz_1 = numberz; _i < numberz_1.length; _i++) {
    var num = numberz_1[_i];
    fuelCost += Math.abs(num - median);
}
console.log(fuelCost);
