// Increased Function Challenges: 1-5

// challenge 1
// create a function that will take in a number and return the number squared
function squareNumber(num) {
    return Math.pow(num, 2);
}
  // test the function
  console.log(squareNumber(4)); // should return 16
  
  // challenge 2
  // create a function that will take in a string and return the string repeated 3 times using a loop
  function repeatString(str) {
    let result = "";
    for (let i = 0; i<3; i++) {
      result += str;
    }
    return result;
  }
  // test the function
  console.log(repeatString("Hello")); // should return "HelloHelloHello"
  
  // challenge 3
  // build a function that has scoped variables and returns a string
  function scopingData() {
    let hello = "Hello"
    function world(){
      return `${hello} World`;
    }
    return world;
  }
  // test the function
  console.log(scopingData()()); // should return "Hello World"
  
  // challenge 4
  // create a function that will take in a string and return the string reversed
  function reverseString(str) {
    let splitStr = str.split("");
    let reversedArray = splitStr.reverse();
    let reversedStr = reversedArray.join("");
    return reversedStr;
  }
  // test the function
  console.log(reverseString("Hello")); // should return "olleH"
  
  // challenge 5
  // create a function that will return a random number between 1 and 10
  function randomNumber() {
    return Math.floor(Math.random() * 10) + 1
  }
  // test the function
  console.log(randomNumber()); // should return a random number between 1 and 10