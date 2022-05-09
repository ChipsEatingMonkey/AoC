import * as fs from 'fs';

let file = fs.readFileSync('./../input', 'utf-8');

let result = file.split(/\r?\n/);

let depth = 0;
let horizontal = 0;

let tmp: number;
let aim = 0;

for (let i = 0; i < result.length; i++) {

    tmp = parseInt(result[i].slice(-2))
    if (result[i].startsWith("up")){
        aim -= tmp;
    } else if (result[i].startsWith("down")){
        aim += tmp;
    }
    else if (result[i].startsWith("forward")){
        horizontal += tmp;
        depth += aim * tmp;
    }
    else{
        console.log("error - bad input");
    }
  }
  console.log(depth*horizontal)

