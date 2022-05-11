import * as fs from 'fs';

let file = fs.readFileSync('./../input', 'utf-8');

let numberz = file.split(",").map(Number)
console.log(numberz)
function findMedian(arr) {
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum/arr.length;
 };
 function smulGaus(num){
     return (num * (num+1)/2)
 }
 let avg = Math.floor((findMedian(numberz)));
 let fuelCost = 0;
 for (let num of numberz){
    let distance = Math.abs(num-avg);
    fuelCost += smulGaus(distance)
 }
console.log(fuelCost)