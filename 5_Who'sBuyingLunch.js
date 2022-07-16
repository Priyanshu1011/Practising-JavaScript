/*
PROBLEM DESCRIPTION:


*/

// SOLUTION

function whosPaying(names) {
    var index = Math.floor(Math.random() * names.length);
    return names[index] + " is going to buy lunch today!";
}

console.log(whosPaying(["Michael", "Jim", "Pam", "Dwight", "Oscar"]));