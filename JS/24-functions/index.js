//function = Define code once, and use it many times.
//           To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Rosa";
    let age = 22;
    
    happyBirthday(userName, age);
}

function happyBirthday(userName, age){      // you can use different names for the parameters
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age,"years old!");
}