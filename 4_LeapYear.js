/*
PROBLEM DESCRIPTION:

Write a program that works out whether a given year is a leap year. 
*/

// SOLUTION

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year.");
            } else {
                console.log("Not leap year.");
            }
        } else {
            console.log("Leap year.");
        }
    } else {
        console.log("Not leap year.");
    }
}

isLeap(prompt("Enter a year: "));