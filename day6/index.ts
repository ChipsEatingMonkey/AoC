import { clear } from 'console';
import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let fish = file.split(",").map(Number);
clear;
let fishCount;

for (let j = 0; j < 80; j++){
    fishCount = fish.length;
        for (let i = fishCount-1; i >= 0; i--){
            if (fish[i] > 0){
                fish[i]--;
            }
            else if (fish[i] == 0){
                fish[i] = 6;
                fish.push(8)
            }
            else {
                console.log("invalid fish found! ");
                break;
            }

        }
    }
fishCount =fish.length;
console.log(fishCount);
