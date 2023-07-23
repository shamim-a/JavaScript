/* =================++++++++++=============== 
Q1. Check if a number is odd or even in JavaScript
=================++++++++++=============== */
console.log("Answer: 1\n");
let n = 7;
if (n % 2 == 0) {
    console.log(n + " is an Even number\n");
} else {
    console.log(+n + " is an Odd number\n");
}
/* =================++++++++++=============== 
 Q2. Find a number is present in given range
 =================++++++++++=============== */
let m = 5;

/* =================++++++++++=============== 
3. arithmetic operations on two number
 =================++++++++++=============== */
console.log("Answer: 3\n");
let a, b, result;
a = 60;
b = 20;
result = a + b;
console.log("Addition Result " + result + "\n");
result = a - b;
console.log("Subtraction Result " + result + "\n");
result = a / b;
console.log("Division Result " + result + "\n");
result = a * b;
console.log("Multiplication Result " + result) + "\n";

/* =================++++++++++=============== 
4. grade for input marks
 =================++++++++++=============== */
console.log("\nAnswer: 4\n");
let mark = 56;
if (mark >= 40 && mark < 45) {
    console.log("Obtain grade = D \n");
} else if (mark >= 45 && mark < 50) {
    console.log("Obtain grade = C\n");
} else if (mark >= 50 && mark < 55) {
    console.log("Obtain grade = C+ \n");
} else if (mark >= 55 && mark < 60) {
    console.log("Obtain grade = B- \n");
} else if (mark >= 60 && mark < 65) {
    console.log("Obtain grade = B \n");
} else if (mark >= 65 && mark < 70) {
    console.log("Obtain grade = B+ \n");
} else if (mark >= 70 && mark < 75) {
    console.log("Obtain grade = A- \n");
} else if (mark >= 75 && mark < 80) {
    console.log("Obtain grade = A \n");
} else if (mark >= 80 && mark <= 100) {
    console.log("Obtain grade = A+ \n");
} else if (mark > 100) {
    console.log("Invalid Mark Obtain grade!!!\n");
} else {

    console.log("Obtain grade = F \n");
}
/* =================++++++++++=============== 
5. print numbers from 1 to 10
 =================++++++++++=============== */
console.log("Answer: 5\n");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
/* =================++++++++++=============== 
6. Reverse Loop print 10 to 1
 =================++++++++++=============== */
console.log("\nAnswer: 6\n");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
/* =================++++++++++=============== 
7. Sum of Numbers from 1 to N
 =================++++++++++=============== */
console.log("\nAnswer: 7\n");
let x = 10,
    sum;
sum = x * (x + 1) / 2;
console.log(sum);
/* =================++++++++++=============== 
8. Reverse a String
 =================++++++++++=============== */
console.log("\nAnswer: 8\n");

/* =================++++++++++=============== 
9. Print even numbers from 1 to 20 using a while loop
 =================++++++++++=============== */
console.log("\nAnswer: 9\n");
let i = 1;
while (i <= 20) {
    console.log(i);
    i++
}
/* =================++++++++++=============== 
10. Use a do-while loop to print numbers from 10 to 1.
 =================++++++++++=============== */
console.log("\nAnswer: 10\n");

let j = 10;

do {
    console.log(j);
    j--;
}
while (j > 0)
/* =================++++++++++=============== 
11. Print numbers from 1 to 100, but if the number is divisible by 3 print "Fizz", if divisible by 5, print "Buzz",
 =================++++++++++=============== */
console.log("\nAnswer: 11\n");

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0) {
        console.log(i + " is Fizz");
    } else if (i % 5 == 0) {
        console.log(i + " is Buzz");
    }
}