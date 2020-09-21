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
 * Complete the 'maxBalancedTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY developers
 *  2. INTEGER maxNewHires
 */

function maxBalancedTeams(developers, maxNewHires) {
    // Write your code here
    var balancedTeams = countTeams(developers);
    console.log(balancedTeams)
    function addNewHires(developers, newHires) {
        //base case: no more new hires to distribute
        if (!newHires) {
            return;
        }
        //iterate through the teams
        var newbies = newHires;
        for (var i = 0; i < developers.length; i++) {
          //add a new hire to a team,
          developers[i]++;
          newbies--;
          var currBalance = countTeams(developers);
          //check if that's more balanced teams than before
          if (currBalance > balancedTeams) {
              //if so, update the max balanced teams
              balancedTeams = currBalance
          }
          //call add new hires on new developers, newhires - 1
          addNewHires(developers, newbies)
        }
    }
    //addNewHires(developers, maxNewHires)
    //console.log(balancedTeams)
    return balancedTeams;
}

function countTeams(developers) {
    var count = 0;
    for(var i = 0; i < developers.length; i++) {
        var curr = 1;
        for(var j = i + 1; j < developers.length; j++) {
            if (developers[i] === developers[j]) {
                curr++;
            }
        }
        if (curr > count) {
            count = curr;
        }
    }
    return count;
}
