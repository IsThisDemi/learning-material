// switch = statement that examines a value 
//          for a match against many case clauses.
//          More efficient that many "else if" statements

let grade = 95;

switch (true) {
    case grade >= 90:
        console.log('You did great!');
        break;
    case grade >= 80:
        console.log('You did good!');
        break;
    case grade >= 70:
        console.log('You did ok!');
        break;
    case grade >= 60:
        console.log('You passed ... barely!');
        break;
    case grade < 60:
        console.log('You failed!');
        break;
    default:
        console.log(grade, 'is not a valid grade');
}