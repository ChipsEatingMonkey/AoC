import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let result = file.split(/\r?\n/).map(Number);

let isBiggerCounter = 0;

for (let i = 0; i < result.length-3; i++) {
    if (result[i] + result[i+1] + result[i+2] < result[i+1] + result[i+2] + result[i+3]){
        isBiggerCounter++;
    }
  }
  console.log(isBiggerCounter)