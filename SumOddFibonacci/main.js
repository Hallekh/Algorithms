/*
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/
let n1 = 0;
let n2 = 1;
let next;

function sumFibs(num) {
    //define this variable to store the result.
    let total = 0;
    for (let i = 0; i <= num; i++) {
        // this condition for check if the number not even number.
        if (n1 % 2 !== 0 && n1 < num) {
            console.log("this is odd Fibonacci number: " + n1);
            // n1 the odd number after we check it, we add it to total.
            total = total + n1;
        }
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    console.log("this is the sum of all odd numbers: " + total)
}

sumFibs(100);