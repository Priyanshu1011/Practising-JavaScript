/*
PROBLEM DESCRIPTION:

Write a program that generates the Fibonacci sequence.
*/

// SOLUTION

function fibonacciGenerator(n) {
    var fiboSequence = [];
    for(var i = 1; i <= n; i++) {
        if (i === 1) {
            fiboSequence.push(0);
        } else if (i === 2) {
            fiboSequence.push(1);
        } else {
            fiboSequence.push(fiboSequence[i-3] + fiboSequence[i-2]);
        }
    }
    return fiboSequence;
}

n = prompt("Enter the number of terms: ");
console.log(fibonacciGenerator(n));