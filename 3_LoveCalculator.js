/*
PROBLEM DESCRIPTION:

Take 2 names as input and display the love percentage between the two.

[No science behind this...Just generate a random percentage :)]
*/

// SOLUTION

prompt("Enter the first name: ");
prompt("Enter the second name: ");

var lovePercent = Math.random();
lovePercent = Math.floor(lovePercent*100) + 1; // 1-100% (both inclusive)

console.log("Your love percentage is " + lovePercent + "%");
