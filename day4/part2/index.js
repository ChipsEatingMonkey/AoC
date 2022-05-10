"use strict";
exports.__esModule = true;
var fs = require("fs");
var process_1 = require("process");
var file = fs.readFileSync('./../input', 'utf-8');
var arr = file.split(/\r?\n/);
var drawNumbers = arr[0].split(/,/).map(Number);
var boards = [];
var boardCount = 0;
for (var i = 2; i < arr.length; i += 6) {
    var board = [];
    for (var j = 0; j < 5; j++) {
        var row = arr[i + j].split(/ +/).map(Number);
        if (row.length > 5) {
            row.shift();
        }
        if (row.length != 5) {
            console.log("row is not lenght 5! ABORT");
            (0, process_1.exit)();
        }
        board.push(row);
    }
    if (board.length != 5) {
        console.log("colum is not lenght 5! ABORT");
        (0, process_1.exit)();
    }
    boards.push(board);
    boardCount++;
}
function horizontalWinner(board) {
    for (var _i = 0, board_1 = board; _i < board_1.length; _i++) {
        var row = board_1[_i];
        if (row[0] < 0 && row[1] < 0 && row[2] < 0 && row[3] < 0 && row[4] < 0) {
            return true;
        }
    }
    return false;
}
function verticalWinner(board) {
    for (var j = 0; j < 5; j++) {
        if (board[0][j] < 0 && board[1][j] < 0 && board[2][j] < 0 && board[3][j] < 0 && board[4][j] < 0) {
            return true;
        }
    }
    return false;
}
function checkWinner(boards) {
    for (var _i = 0, boards_1 = boards; _i < boards_1.length; _i++) {
        var board = boards_1[_i];
        if (horizontalWinner(board) || verticalWinner(board)) {
            return {
                'winner': true,
                'winnerIndex': boards.indexOf(board)
            };
        }
    }
    return {
        'winner': false,
        'winnerIndex': null
    };
}
var counter = 0;
while (boards.length >= 1) {
    var drawnNumber = drawNumbers[counter];
    for (var k = 0; k < boards.length; k++) {
        for (var i = 0; i < boards[k].length; i++) {
            for (var j = 0; j < boards[k][i].length; j++) {
                if (boards[k][i][j] == drawnNumber) {
                    boards[k][i][j] = -1;
                }
            }
        }
    }
    while (checkWinner(boards).winner) {
        if (boards.length > 1) {
            boards.splice(checkWinner(boards).winnerIndex, 1);
        }
        else {
            var sum = 0;
            for (var _i = 0, _a = boards[0]; _i < _a.length; _i++) {
                var row = _a[_i];
                for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                    var number = row_1[_b];
                    if (number > 0) {
                        sum += number;
                    }
                }
            }
            console.log("sum is: ", sum);
            console.log("drawnNumber is ", drawnNumber);
            console.log("score is: ", sum * drawnNumber);
            boards.splice(checkWinner(boards).winnerIndex, 1);
            break;
        }
    }
    console.log("drawnNumber is ", drawnNumber);
    counter += 1;
}
//console.log(boards)
