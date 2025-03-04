let fox = "Jumped Over The Lazy Dog";

function jumpOverFence(fox) {
return `The Lazy Brown Fox ${fox}`;
  // complete this so that the function returns "The Lazy Brown Fox Jumps Over The Fence"
}

console.log(jumpOverFence(fox));

// challenge 2
function isEvenOrOdd(num) {
    return num % 2 === 0;
}

// test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(5)); // should return false

// challenge 3
function celsiusToFahrenheit(celsiusNumber) {
    return(celsiusNumber * 9/5) + 32 + `°F`;
}

// test the function with degree symbol
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32

// challenge 4
// find the max number in an array
function findMaxNumber(arr) {
    return Math.max(...arr);
}

// test the function
console.log(findMaxNumber([1, 2, 3, 4, 5])); // should return 5

// challenge 5
//  create a function that will wait 2 seconds and then log "Hello World"
function sayHelloWorld() {
    setTimeout(function(){
        console.log("Hello World");
    },2000);
}

// test the function
sayHelloWorld(); // should log "Hello World" after 2 seconds