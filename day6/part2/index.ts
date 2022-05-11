
import * as fs from 'fs';

let file = fs.readFileSync('./../input', 'utf-8');

let fish = file.split(",").map(Number);

let fishCount = [0,0,0,0,0,0,0,0,0];

for (let fishy of fish){
    fishCount[fishy]++;
}
console.log(fishCount)
for (let i = 0; i < 256; i++){
    let babies = fishCount[0];
    for (let j = 0; j < 8; j++){
        fishCount[j] = fishCount[j+1]
    }
    fishCount[6] += babies;
    fishCount[8] = babies;
}
console.log(fishCount.reduce((a,b) => {return a+b;}))