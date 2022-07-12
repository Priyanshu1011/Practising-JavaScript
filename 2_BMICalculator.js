/*
PROBLEM DESCRIPTION:

Create a BMI calculator using JavaScript functions.

The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate the risk of heart disease.

You can calculate it using the formula below, where weight divided by height squared.
BMI = weight(kg) / height^2 (m^2)

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
The first parameter should be the weight and the second should be the height.
*/

// SOLUTION

function BMI(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi);
}

var weight = prompt("Enter your weight (kg): ");
var height = prompt("Enter your height (m): ");
console.log("Your BMI is " + BMI(weight, height) + " kg/m^2");