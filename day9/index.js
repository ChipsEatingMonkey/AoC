"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var result = file.split(/\r?\n/);
var row_size = result[0].length;
var colum_size = result.length;
var low_points = [];
for (var i = 0; i < row_size; i++) {
    for (var j = 0; j < colum_size; j++) {
        var point = parseInt(result[j][i]);
        var upI = i - 1;
        var downI = i + 1;
        var leftI = j - 1;
        var rightI = j + 1;
        var up = void 0, down = void 0, left = void 0, right = void 0;
        if (upI < 0 || upI >= row_size) {
            up = 9;
        }
        else {
            up = parseInt(result[j][upI]);
        }
        if (downI < 0 || downI >= row_size) {
            down = 9;
        }
        else {
            down = parseInt(result[j][downI]);
        }
        if (leftI < 0 || leftI >= colum_size) {
            left = 9;
        }
        else {
            left = parseInt(result[leftI][i]);
        }
        if (rightI < 0 || rightI >= colum_size) {
            right = 9;
        }
        else {
            right = parseInt(result[rightI][i]);
        }
        if (point < up && point < down && point < right && point < left) {
            low_points.push(point);
        }
    }
}
var dLevel = 0;
for (var _i = 0, low_points_1 = low_points; _i < low_points_1.length; _i++) {
    var p = low_points_1[_i];
    dLevel += 1 + p;
}
console.log(dLevel);
