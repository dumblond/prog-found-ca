// question 1

for (var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// question 2

var innerFunction = function thisIsAFunction() {
    console.log("I am a function");
}

function outerFunction(oneArgument) {
    oneArgument();
}

outerFunction(innerFunction);