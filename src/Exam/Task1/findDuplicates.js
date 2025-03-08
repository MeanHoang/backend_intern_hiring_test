// Function to count the occurrences of an element `a` in the array `arr`
function countFrequency(a, arr) {
    let count = 0; // Variable to store the occurrence count of `a`
    for (let num of arr) { // Loop through each element in the array
        if (num === a) count++; // If `num` == `a`, increment count
    }
    return count; // Return the total occurrences of `a`
}

// Function to check if an element `a` exists in the array `arr`
function isPresent(a, arr) {
    for (let num of arr) { // Loop through each element in the array
        if (num === a) return true; // If `a` is found, return `true`
    }
    return false; // If `a` is not found, return `false`
}

// Function to find duplicate elements in the given array `arr`
function findDuplicates(arr) {
    let duplicates = []; // Array to store duplicate numbers

    for (let num of arr) { // Loop through each element in the array
        let freq = countFrequency(num, arr); // Count occurrences of `num`
        // If `num` appears at least twice and is not already in `duplicates`, add it
        if (freq >= 2 && !isPresent(num, duplicates)) {
            duplicates.push(num);
        }
    }

    return duplicates; // Return the list of duplicate numbers
}


module.exports = findDuplicates;