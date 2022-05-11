"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./../input2', 'utf-8');
var tmp = file.split(/\r?\n/);
var row_size = tmp[0].length;
var colum_size = tmp.length;
var low_points = [];
function turnStringToInts(str) {
    var arr = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var i = str_1[_i];
        arr.push(parseInt(i));
    }
    return arr;
}
var result = [];
for (var _i = 0, tmp_1 = tmp; _i < tmp_1.length; _i++) {
    var string = tmp_1[_i];
    result.push(turnStringToInts(string));
}
function getBazinSize(j, i) {
    console.log(" got called with:j i ", j, i);
    var upI = i - 1;
    var downI = i + 1;
    var leftI = j - 1;
    var rightI = j + 1;
    var up, down, left, right;
    var stack = [];
    var size = 0;
    if (upI < 0 || upI >= row_size) {
        up = 9;
    }
    else {
        up = result[j][upI];
        if (up < 9) {
            result[j][upI] = 9;
            size++;
            stack.push([j, upI]);
        }
    }
    if (downI < 0 || downI >= row_size) {
        down = 9;
    }
    else {
        down = result[j][downI];
        if (down < 9) {
            console.log(" down found ");
            result[j][downI] = 9;
            size++;
            stack.push([j, downI]);
        }
    }
    if (leftI < 0 || leftI >= colum_size) {
        left = 9;
    }
    else {
        left = result[leftI][i];
        if (left < 9) {
            console.log(" left found ");
            result[leftI][i] = 9;
            size++;
            stack.push([leftI, i]);
        }
    }
    if (rightI < 0 || rightI >= colum_size) {
        right = 9;
    }
    else {
        right = result[rightI][i];
        if (right < 9) {
            console.log("right found");
            result[rightI][i] = 9;
            size++;
            stack.push([rightI, i]);
        }
    }
    if (stack.length > 0) {
        for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
            var p = stack_1[_i];
            size += getBazinSize(p[0], p[1]);
        }
    }
    return size;
}
for (var i = 0; i < row_size; i++) {
    for (var j = 0; j < colum_size; j++) {
        var point = result[j][i];
        var upI = i - 1;
        var downI = i + 1;
        var leftI = j - 1;
        var rightI = j + 1;
        var up = void 0, down = void 0, left = void 0, right = void 0;
        if (upI < 0 || upI >= row_size) {
            up = 9;
        }
        else {
            up = result[j][upI];
        }
        if (downI < 0 || downI >= row_size) {
            down = 9;
        }
        else {
            down = result[j][downI];
        }
        if (leftI < 0 || leftI >= colum_size) {
            left = 9;
        }
        else {
            left = result[leftI][i];
        }
        if (rightI < 0 || rightI >= colum_size) {
            right = 9;
        }
        else {
            right = result[rightI][i];
        }
        if (point < up && point < down && point < right && point < left) {
            console.log(j, i);
            low_points.push([j, i]);
        }
    }
}
var sizes = [];
for (var _a = 0, low_points_1 = low_points; _a < low_points_1.length; _a++) {
    var p = low_points_1[_a];
    result[p[0], p[1]] = 9;
    sizes.push(getBazinSize(p[0], p[1]));
}
// result[low_points[0][0]][low_points[0][1]] = 9;
// sizes.push(getBazinSize(low_points[0][0],low_points[0][1]));
console.log(sizes);
