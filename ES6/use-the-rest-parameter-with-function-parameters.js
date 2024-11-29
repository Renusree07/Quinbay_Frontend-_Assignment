const sum = (...args) => args.reduce((total, num) => total + num, 0);

// Test cases
console.log(sum(1, 2, 3));        // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
console.log(sum());               // Output: 0
console.log(sum(5, -5, 15));      // Output: 15
