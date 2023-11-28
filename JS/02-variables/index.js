// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Richard"; //strings
let age = 22;       //numbers
let student = true; //boolean

age = age + 1;

console.log("Hello my name is",firstName);
console.log("You are",age," years old");
console.log("Enrolled:",student);

document.getElementById("p1").innerHTML = "Hello my name is" + firstName;
document.getElementById("p2").innerHTML = "My age is " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;