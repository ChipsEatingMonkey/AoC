import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let result = file.split(/\r?\n/);

// powerconsumption = gamma * epsilon

let gamma = 0;
let epsilon= 0;
let bitSums = [0,0,0,0,0,0,0,0,0,0,0,0];
for (let i =0; i < result.length; i++){
    console.log(result[i])
    for (let j = 0; j < 12; j++){
        bitSums[j] += parseInt(result[i][j]);
    }
}
console.log(bitSums)
for (let j = 11; j >= 0; j--){
    if (bitSums[j]/result.length >= 0.5){
        gamma += Math.pow(2,11-j);
    }
    else {
        epsilon += Math.pow(2,11-j);
    }
}
console.log (gamma, epsilon)
console.log(gamma * epsilon)

