import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let result = file.split(/\r?\n/);

let depth = 0;
let horizontal = 0;

let tmp: number;

for (let i = 0; i < result.length; i++) {

    tmp = parseInt(result[i].slice(-2))
    if (result[i].startsWith("up")){
        depth -= tmp;
    } else if (result[i].startsWith("down")){
        depth += tmp;
    }
    else if (result[i].startsWith("forward")){
        horizontal += tmp;
    }
    else{
        console.log("error - bad input");
    }
  }
  console.log(depth *horizontal)