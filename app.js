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
    if (age >= 21 && age < 100) {
        alert("Welcome, " + name + "!");
    } else if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


var favveg = ["radish", "carrot", "peas"];

for(var i = 0; i < favveg.length; i++) {
    console.log(favveg[i]);
}

let kids = [
    {
        name: "Blake",
        age: 18,
    },
    {
        name: "Jeff",
        age: 14,
    },
    {
        name: "Cleo",
        age: 44,
    },
    {
        name: "Jake",
        age: 36,
    },
    {
        name: "Jess",
        age: 21,
    }
];

for (let i = 0; i < kids.length; i++) {
    let x = kids[i].name
    let y = kids[i].age
    checkAge(x, y);
}
