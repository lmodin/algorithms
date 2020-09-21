// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


/*
 * Complete the 'findDolls' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY size as parameter.
 */

function findDolls(size) {
    // Write your code here
    size.sort(function(a, b) {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        } else {
            return 0;
        }
    })
    var dolls = 0;
    for (var i = 0; i < size.length; i++) {
        for (var j = i+1; j < size.length; j++) {
            if (size[i] >= size[j] * 2) {
                size.splice(j,1);
                break;
            }
        }
        dolls++;
    }
    return dolls;
}
function main() {