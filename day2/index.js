"use strict";
exports.__esModule = true;
var fs = require("fs");
var file = fs.readFileSync('./input', 'utf-8');
var result = file.split(/\r?\n/);
var depth = 0;
var horizontal = 0;
var tmp;
for (var i = 0; i < result.length; i++) {
    tmp = parseInt(result[i].slice(-2));
    if (result[i].startsWith("up")) {
        depth -= tmp;
    }
    else if (result[i].startsWith("down")) {
        depth += tmp;
    }
    else if (result[i].startsWith("forward")) {
        horizontal += tmp;
    }
    else {
        console.log("error - bad input");
    }
}
console.log(depth * horizontal);
