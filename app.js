let name = ('Alex');
const NUM_STATES = 50;
let sum = (5 + 4);
let unicodeNumber = name.charCodeAt(0);

// if your name starts with a letter after L, you display an alert that says "Back of the line!". Otherwise, you should display an alert that says "Next!
if (unicodeNumber > 76) {
    alert('Back of the Line!')
}
else {
    alert('Next!')
}

function sayHello() {
    alert('Hello World!'); 
}
sayHello();

function checkAge(name, age) {
    
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!')
    }
    
}

checkAge('Alex', 31)
checkAge('John', 17)
checkAge('Matt', 16)
checkAge('Phil', 27)

let favVeggies = ['Green Beans', 'Peas', 'Brussel Sprouts'];

for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}

let person = [
{   name:'Mark',
    age:27,
},

{   name:'Alex',
    age:31,
},

{   name:'Sabina',
    age:28,
},

{   name:'John',
    age:17,
},

{   name:'Holly',
    age:14,
},

];

for (let i = 0; i < person.length; i++) {
    checkAge(person[i].name, person[i].age);
}

function getLength(word) {
    return word.length;
}

let length = getLength('Hello World!');

function isEven (num) {
    if (num % 2 == 0) {
        console.log('The world is nice and even!')
    }

    else {
        console.log('The world is an odd place!')
    }

}

isEven(length)
