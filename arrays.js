// array challenges 1-5

// You will need to create 3 arrays and use them to solve the following challenges:

// challenge 1
function findLargestNumber(arr) {
  return Math.max(...arr);
  }
  
  console.log(findLargestNumber([3, 6, 2, 8, 4]));
  
  // challenge 2
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
  // challenge 3
  function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }

  console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
  
  // challenge 4 (optional)
  function filterArray(arr, steps) {
    let firstPart = arr.slice(steps);
    let secondPart = arr.slice(0, steps);
    return firstPart.concat(secondPart);
  }

  console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]
  
  // challenge 5 (optional)
  function rotateArray(arr, steps) {
    let n = arr.length;
    let part1 = arr.slice(-steps);
    let part2 = arr.slice(0, n - steps);
    return part1.concat(part2);
  }
  console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]