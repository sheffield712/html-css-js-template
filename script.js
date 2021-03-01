// console.log is basically like printing to the console.
// console.log("Hello, World from JavaScript!");

// you should never use global variables in JS... it's incredibly unsafe for security reasons

// this is okay, but still shouldn't be used
// semicolons aren't necessary, but you should be consistent with whether you use them or not.
// JS knows whether to use a float or an int.
var myVariable = 5.5;

// JS variables are dynamic and can change from an int to a string
// let means the variable value can change later on
let thisVariable = 5;
console.log(thisVariable);
thisVariable = "Hello, world";
console.log(thisVariable);

// const means it stays the same after you declare it. This makes sure certain aspects can't be changed later.
const otherVariable = 5;
// this is how you make a popup show up on your webpage.
// alert(otherVariable);

function sum(a, b) {
    return a + b;
}

const number = 4
const myString = "hello"

const sum2 = function(a, b) {
    return a + b;
}

// lamda or function literal. After the arrow is the return value. If you do braces, you need a return statement.
const sum3 = (a, b) => a + b;

// another way to declare a quick function
const sum4 = (a, b) => {
    return a + b;
}

console.log(sum(18, 3));
console.log(sum4(55, 65));