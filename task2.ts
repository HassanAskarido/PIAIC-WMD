// Function to add two numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Function to check if a number is even or odd
function checkEvenOrOdd(num: number): string {
    return num % 2 === 0 ? 'Number is Even!' : 'Number is Odd!';
}

// Function to calculate the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Function to reverse a string
function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

// Example usage
console.log('Sum:', add(5, 7));

console.log('Even or Odd:', checkEvenOrOdd(10));

console.log('Area of rectangle:', calculateArea(4, 6));

console.log('Reversed String:', reverseString('Hello, World!'));

console.log('Temperature in Fahrenheit:', convertCelsiusToFahrenheit(25));
