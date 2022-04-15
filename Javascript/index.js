//Variables
let firstName = 'Pace';
console.log(firstName);

//Constants
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//Primitive types
let name = 'Raj'; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let lastName = undefined;
let selectedColor = null;

//Reference Types
//Objects
let person = {
    name1 : 'Raju',
    age1 : 50
};
//Dot notation
person.name1 = 'John';
//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name1)

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//functions

//performing a task
function greet(name_) {
    console.log('Hello' + ' ' +name_);

}

greet("Raj");

//Calculating a value
function square(number1){
    return number1 * number1;
}
console.log(square(2));