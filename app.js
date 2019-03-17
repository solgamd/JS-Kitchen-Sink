//My name
var name = "Megan";

//Number of states in USA
const states = 52;

//Add 5 and 4
var add = 5 + 4;

 function sayHello() {
    alert ("Hello World!") ;
};

sayHello();

function checkAge(name, age) {
    if(age => 21) {
        return "Welcome, " + name + "!";
    } else if(age < 21) {
         return "Sorry " + name + ", you aren't old enough to view this page!";
    }
};

var output = checkAge('Charles', 21);
    console.log(output);
var output = checkAge('Abby', 27);
    console.log(output);    
var output = checkAge('James', 18);
    console.log(output);  
var output = checkAge('John', 17);
    console.log(output);
