/*
PROBLEM DESCRIPTION:

Write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
*/

// SOLUTION

function whosPaying(names) {
    var index = Math.floor(Math.random() * names.length);
    return names[index] + " is going to buy lunch today!";
}

console.log(whosPaying(["Michael", "Jim", "Pam", "Dwight", "Oscar"]));
