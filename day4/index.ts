import * as fs from 'fs';
import { exit } from 'process';

let file = fs.readFileSync('./input', 'utf-8');

let arr = file.split(/\r?\n/);
let drawNumbers = arr[0].split(/,/).map(Number)
let boards = [];
let boardCount = 0;

for (let i = 2; i < arr.length; i+=6){
    let board = [];
    for (let j = 0; j < 5; j++){
        let row = arr[i+j].split(/ +/).map(Number)
        if (row.length > 5){
            row.shift()
        }
        if (row.length != 5){
            console.log("row is not lenght 5! ABORT");
            exit();
        }
        board.push(row)
       
    }
    if (board.length != 5){
        console.log("colum is not lenght 5! ABORT");
        exit(); 
    }
    boards.push(board)
    boardCount++;
}


function horizontalWinner(board){
    for (let row of board){
        if (row[0] < 0 && row[1]< 0  && row[2] < 0  && row[3]< 0  && row[4]< 0 )
        {
            return true;
        }
    }
    return false;
}
function verticalWinner(board){
    for (let j = 0; j < 5; j++){
        if (board[0][j] < 0 && board[1][j] < 0  && board[2][j] < 0  && board[3][j] < 0  && board[4][j]< 0){
            return true;
        }
    }
    return false;
}

function hasWinner(boards){
    for (let board of boards){
       if (horizontalWinner(board) || verticalWinner(board)){
           console.log(boards.indexOf(board));
           let sum = 0;
           for (let row of board){
               for (let number of row){
                    if (number > 0){
                        sum += number;
                    }
               }
           }
           console.log("sum is: " ,sum)
           return true;
       }
    }
    return false;
}

let counter = 0;
while(!hasWinner(boards)){
    let drawnNumber= drawNumbers[counter];
    for (let k = 0; k < boards.length; k++){
        for (let i = 0; i < boards[k].length; i++){
            for( let j = 0; j < boards[k][i].length; j++){
                if (boards[k][i][j] == drawnNumber){
                    boards[k][i][j] = -1;
                }
            }
        }
    }
    console.log("darwnNumber was ", drawnNumber)
    counter += 1;
}
//console.log(boards)