import * as fs from 'fs';

let file = fs.readFileSync('./input', 'utf-8');

let result = file.split(/\r?\n/)
let row_size = result[0].length;
let colum_size = result.length;
let low_points = [];
for (let i = 0; i < row_size; i++){
    for (let j = 0; j < colum_size; j++){

        let point = parseInt(result[j][i]);
        let upI = i-1;
        let downI = i+1;
        let leftI = j -1;
        let rightI = j+1;
        let up,down,left,right;
        if (upI < 0 || upI >= row_size){
            up = 9;
        }
        else{
            up = parseInt(result[j][upI])
        }
        if (downI < 0 || downI >= row_size){
            down = 9;
        }
        else{
            down = parseInt(result[j][downI])
        }
        if (leftI < 0 || leftI >= colum_size){
            left = 9
        }
        else{
            left = parseInt(result[leftI][i])

        }
        if (rightI < 0 || rightI >= colum_size){
            right = 9
        }
        else{
            right = parseInt(result[rightI][i])
        }
        if (point < up && point < down && point < right && point < left){
            low_points.push(point)
        }
    }
}
let dLevel = 0;
for (let p of low_points){
    dLevel += 1 + p;
}
console.log(dLevel)