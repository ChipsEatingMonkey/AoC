import * as fs from 'fs';

let file = fs.readFileSync('./../input2', 'utf-8');

let tmp = file.split(/\r?\n/)
let row_size = tmp[0].length;
let colum_size = tmp.length;
let low_points = [];
function turnStringToInts(str){
    let arr = [];
    for (let i of str){
        arr.push(parseInt(i))
    }
    return arr;
}
let result = [];
for (let string of tmp){
    result.push(turnStringToInts(string))
}
function getBazinSize(j, i){
        console.log(" got called with:j i ",j, i)
        let upI = i-1;
        let downI = i+1;
        let leftI = j -1;
        let rightI = j+1;
        let up,down,left,right;
        let stack = [];
        let size = 0;
        if (upI < 0 || upI >= row_size){
            up = 9;
        }
        else{
            up = result[j][upI]
            if (up < 9){
                result[j][upI] = 9;
                size++;
                stack.push([j, upI]);
            }
        }
        if (downI < 0 || downI >= row_size){
            down = 9;
        }
        else{
            down = result[j][downI]
            if (down < 9){
                console.log(" down found ")
                result[j][downI] = 9;
                size++;
                stack.push([j, downI]);
            }
        }
        if (leftI < 0 || leftI >= colum_size){
            left = 9
        }
        else{
           
            left = result[leftI][i]
            if (left < 9){
                console.log(" left found ")
                result[leftI][i] = 9;
                size++;
                stack.push([leftI,i]);
            }

        }
        if (rightI < 0 || rightI >= colum_size){
            right = 9
        }
        else{
            right = result[rightI][i]
            if (right < 9){
                console.log("right found")
                result[rightI][i] = 9;
                size++;
                stack.push([rightI,i]);
            }
        }
        if (stack.length > 0){
            for (let p of stack){
                size +=  getBazinSize(p[0], p[1])
            }
        }
        return size;


}
for (let i = 0; i < row_size; i++){
    for (let j = 0; j < colum_size; j++){

        let point = result[j][i];
        let upI = i-1;
        let downI = i+1;
        let leftI = j -1;
        let rightI = j+1;
        let up,down,left,right;
        if (upI < 0 || upI >= row_size){
            up = 9;
        }
        else{
            up = result[j][upI]
        }
        if (downI < 0 || downI >= row_size){
            down = 9;
        }
        else{
            down = result[j][downI]
        }
        if (leftI < 0 || leftI >= colum_size){
            left = 9
        }
        else{
            left = result[leftI][i]

        }
        if (rightI < 0 || rightI >= colum_size){
            right = 9
        }
        else{
            right = result[rightI][i]
        }
        if (point < up && point < down && point < right && point < left){
            console.log(j,i)
            low_points.push([j,i])
        }
    }
}
let sizes = [];

for (let p of low_points){
    result[p[0],p[1]] = 9;
    sizes.push(getBazinSize(p[0],p[1]));
}
// result[low_points[0][0]][low_points[0][1]] = 9;
// sizes.push(getBazinSize(low_points[0][0],low_points[0][1]));
console.log(sizes)

