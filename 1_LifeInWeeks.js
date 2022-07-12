/* 
PROBLEM DESCRIPTION:

In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
*/

// SOLUTION

function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var x = yearsLeft * 365;
    var y = yearsLeft * 52;
    var z = yearsLeft * 12;
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}

var userAge = prompt("Enter your age: ");
lifeInWeeks(userAge);

