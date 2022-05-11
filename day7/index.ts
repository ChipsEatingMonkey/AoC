
import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let numberz = file.split(",").map(Number)

const findMedian = (arr = []) => {
    const sorted = arr.slice().sort((a, b) => {
       return a - b;
    });
    if(sorted.length % 2 === 0){
       const first = sorted[sorted.length / 2 - 1];
       const second = sorted[sorted.length / 2];
       return (first + second) / 2;
    }
    else{
       const mid = Math.floor(sorted.length / 2);
       return sorted[mid];
    };
 };
 let median = (findMedian(numberz));
 let fuelCost = 0;
 for (let num of numberz){
    fuelCost += Math.abs(num - median);
 }
console.log(fuelCost)