"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./../input', 'utf-8');
var fish = file.split(",").map(Number);
var fishCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var _i = 0, fish_1 = fish; _i < fish_1.length; _i++) {
    var fishy = fish_1[_i];
    fishCount[fishy]++;
}
console.log(fishCount);
for (var i = 0; i < 256; i++) {
    var babies = fishCount[0];
    for (var j = 0; j < 8; j++) {
        fishCount[j] = fishCount[j + 1];
    }
    fishCount[6] += babies;
    fishCount[8] = babies;
}
console.log(fishCount.reduce(function (a, b) { return a + b; }));
