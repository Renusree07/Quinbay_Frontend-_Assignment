let myString = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Eleanor)(\s\w+\.)?\sRoosevelt/; // Updated regex to handle middle initials with a period
let result = myRegex.test(myString);

console.log(result); // Output: true
