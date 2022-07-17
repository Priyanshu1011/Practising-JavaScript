/*
PROBLEM DESCRIPTION:

Write a program that generates the Fibonacci sequence.
*/

// SOLUTION

function fibonacciGenerator(n) {
    var fiboSequence = [];
    for(var i = 1; i <= n; i++) {
        if (i <= 2) {
            fiboSequence.push(i-1);
        } else {
            fiboSequence.push(fiboSequence[i-3] + fiboSequence[i-2]);
        }
    }
    return fiboSequence;
}

n = prompt("Enter the number of terms: ");
console.log(fibonacciGenerator(n));
