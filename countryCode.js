'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

    //function to iterate through countries to find code
    var findCode = (countries) => {
        for (var i = 0; i < countries.length; i++) {
            console.log(countries[i].name)
            if (countries[i].alpha2Code === code) {
                return countries[i].name;
            }
        }
    }
    var page = 1;

    function getData () {
        var country = '';
        https.get(`https://jsonmock.hackerrank.com/api/countries?page=${page}`, (resp) => {
            var data = {};
            resp.on('data', (info) => {
                data = data+=info
                //console.log(data.data)

            })
            resp.on('end', ()=> {
                //console.log(data)
                data = JSON.parse(data.slice(15))
                //console.log('after: ', data.data)
                country = findCode(data.data)
                console.log('country is: ', country)
                if (!country || country === '') {
                    page++;
                    getData();
                } else {
                    return country
                }
            })
        })

    }

    //this is where my problem is, it's calling asynchronously and leaving country as undefined
    const country = await getData();
    //console.log('country still is: ', country)
    return country


}

async function main() {