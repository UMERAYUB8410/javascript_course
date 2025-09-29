const score = 400
// console.log(score);

const balance = new Number(100)  // creating object
// console.log(balance);  // prints specifically the number 100

// console.log(balance.toString().length);  //lenght counts only number beofre decimal
// console.log(balance.toFixed(2));

// console.log(typeof balance.toString()); // string
// console.log(typeof balance); // object 

// const othernum = 23.8966 // precise value give 23.9 
const othernum = 123.8966 // precise value give  124 

// console.log(othernum . toPrecision(3));  // priority before decimal 
// console.log(othernum . toPrecision(4));  // priority after decimal 

const  hundreds = 100000
// console.log(hundreds. toLocaleString('en-PK')); // convert numbers to be identified in there respective country EN,IN,PK 


//++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++//
// console.log(Math)
// console.log(Math.abs(-4)); // does not are about - it will go for positive
// console.log(Math.round(4.6)) // will make it 5 

// // “Ceil = always go up to the next whole number.”
// console.log(Math.ceil(4.2)); 
// // Examples:
// // Math.ceil(4.1) → 5
// // Math.ceil(4.9) → 5
// // Math.ceil(5.0) → 5

// // “Ceil = always go up to the next whole number.”
// console.log(Math.floor(4.2)); 
// // Examples:
// // Math.floor(4.1) → 4
// // Math.floor(4.9) → 4
// // Math.floor(5.0) → 4


// console.log(Math.min(3,6,8,4,2)); // return min value
// console.log(Math.max(3,6,8,4,2)); // return max value

console.log(Math.random()) // between 0 1 \
console.log(Math.random() * 10 + 1) // between 1 11 but never reaches 11 \
console.log(Math.floor(Math.random() * 10) + 1) // between 1 11 but never reaches 11 \

const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min +1)) + min));



