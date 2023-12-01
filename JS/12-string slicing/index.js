// slice()  extract a section of a string 
//          and return mit as a new string,
//          without modifying the original string

let fullName = "Riccardo Martinello";
let firstName;
let lastName;

// firstName = fullName.slice(0, 4);
// lastName = fullName.slice(5);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);