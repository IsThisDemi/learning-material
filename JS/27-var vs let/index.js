// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's windows properties)

var name = "23"; // global variable problem is that will change the browser's windows properties called name

// let name = "Rosa"; // global variable

doSomething();

function doSomething(){ // uncaught reference error: i is not defined in the console donw below
    for(var i = 1; i <= 3; i+=1){
        //console.log(i);
    }
}

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}

console.log(i);