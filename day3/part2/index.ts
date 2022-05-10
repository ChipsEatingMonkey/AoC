import * as fs from 'fs';

let file = fs.readFileSync('./../input', 'utf-8');

let result = file.split(/\r?\n/);

// powerconsumption = gamma * epsilon

let oxygen = result;
let Co2= result;

function bitSumByIndex(array, index){
    let bitSum = 0;
    for (let i = 0; i < array.length; i++){
        bitSum += parseInt(array[i][index])
    }
    return bitSum
}
let index = 0;
while (oxygen.length > 1){
    let bitSum = bitSumByIndex(oxygen, index);
    if (bitSum/oxygen.length >= 0.5){ //redo bitSums after every filter
        oxygen = oxygen.filter(hasOne, index)
    }
    else {
        oxygen = oxygen.filter(hasZero, index)
    }
    index++;
}
index = 0;
while (Co2.length > 1){
    let bitSum = bitSumByIndex(Co2, index);
    if (bitSum/Co2.length >= 0.5){ //redo bitSums after every filter
        Co2 = Co2.filter(hasZero, index)
    }
    else {
        Co2 = Co2.filter(hasOne, index )
    }
    index++;
}

function hasOne(element){
 return element[this] == 1;
}
function hasZero(element){
    return element[this] == 0;
   }

console.log(parseInt(oxygen[0], 2) * parseInt(Co2[0], 2 ))
