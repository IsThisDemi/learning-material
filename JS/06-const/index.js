// const = a variable that can't be changed

const PI = 3.14159; //good practise using uppercases for const
let radius;
let circunference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circunference = 2 * PI * radius;

console.log("The circumference is: ", circunference)