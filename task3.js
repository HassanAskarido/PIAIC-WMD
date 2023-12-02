//Scenario 1 - Modify Array with methods
let arrname = ["Hassan", "Ali", "Daniyal", "Farooq", "Ishtiaq", "Umer"];
console.log(arrname);
//Adds new element to the end of the array
arrname.push("Imtiaz");
console.log(arrname);
//Removes the last element from the array
arrname.pop();
console.log(arrname);
//Removes the first element from the array
arrname.shift();
console.log(arrname);
//Adds new element at the beginning of the array
arrname.unshift("Mujeeb");
console.log(arrname);
/* Scenario 2 - Subarray creation */
let lname = ["Muhammad", "Abu Bakr", "Omer", "Usman", "Ali"];
console.log(lname);
//Creates a subarray without modifying the original array
let sublname = lname.slice(0, 2);
console.log(sublname);
console.log(lname);
//Creates a subarray by removing elements from the original array
let slname = lname.splice(2, 3);
console.log(slname);
console.log(lname);
export {};
