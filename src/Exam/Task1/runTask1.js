// Import Task 1 function (Find duplicate numbers in an array)
const findDuplicates = require('./findDuplicates');

console.log("----- Task 1: Finding Duplicates in an Array -----");

// Test cases
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 3])); // Output: [2, 3]
console.log(findDuplicates([7, 8, 9, 10])); // Output: []
console.log(findDuplicates([1, 1, 1, 2, 2, 3])); // Output: [1, 2]

console.log(findDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]
console.log(findDuplicates([])); // Expected output: []

