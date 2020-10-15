// question 1

var id = "woman";

// question 2

var person = {
    name: "Anne-Berit",
    age: 39
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out Of Stock");
} else {
    console.log("In Stock");
}

// question 4

var numbers = [7, 18, 29, 40, 52];

console.log(numbers);

// question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
    console.log(i);
    }
}

// question 7

var personArray = [
    {
        name: "Knut",
        age: 83,
        woman: false
    },

    {
        name: "Trine",
        age: 51,
        woman: true
    }
];

for (var i = 0; i < personArray.length; i++) {
    console.log(personArray[i].age);
    console.log(personArray[i].woman);
}

// question 8

function whatIDontLike(food) {
    console.log("I don't like " + food);
}

whatIDontLike("fish");

// question 9

function subtractTwoNumbers(number1, number2) {
    var sum = number1 - number2;
    console.log(sum);
}

subtractTwoNumbers(7, 2);

// question 10

var array = [];

function oneArgument(test) {
    array.push("number one");
    console.log("This is test " + array);
}

oneArgument(array);


