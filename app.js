//My name
var name = "Megan";

//Number of states in USA
const states = 52;

//Add 5 and 4
var add = 5 + 4;

//When called, executes an alert in a pop-up.
function sayHello() {
    alert ("Hello World!") ;
};
sayHello();

//When called, checks whether user is 21+, gives alert.
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
};

//Calling function checkAge with parameters of people.
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//Declaring var of favorite veggies.
var favveg = ["squash", "carrot", "peas"];

//Calling list of veggies one by one.
for(var i = 0; i < favveg.length; i++) {
    console.log(favveg[i]);
}
//Declaring array of "peeps"
let peeps = [
    {
        name: "Rick",
        age: 18
    },
    {
        name: "Morty",
        age: 14
    },
    {
        name: "Jerry",
        age: 44
    },
    {
        name: "Beth",
        age: 36
    },
    {
        name: "Summer",
        age: 21
    }
];

//Executing loop checkAge for array "peeps"

for (let i = 0; i < peeps.length; i++) {
let x = peeps[i].name
let y = peeps[i].age
checkAge(x, y);
};

function getLength(str) {
    return str.length;
};

let result = getLength("Hello World");

if (result % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}