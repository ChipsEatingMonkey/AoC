import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let result = file.split(/\r?\n/).map(Number);
console.log(result)

let isBiggerCounter = 0;

for (let i = 1; i < result.length; i++) {
    if (result[i] > result[i-1]){
        isBiggerCounter++;
    }
  }
  console.log(isBiggerCounter)
