"use strict";
exports.__esModule = true;
var console_1 = require("console");
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var fish = file.split(",").map(Number);
console_1.clear;
var fishCount;
for (var j = 0; j < 80; j++) {
    fishCount = fish.length;
    for (var i = fishCount - 1; i >= 0; i--) {
        if (fish[i] > 0) {
            fish[i]--;
        }
        else if (fish[i] == 0) {
            fish[i] = 6;
            fish.push(8);
        }
        else {
            console.log("invalid fish found! ");
            break;
        }
    }
}
fishCount = fish.length;
console.log(fishCount);
