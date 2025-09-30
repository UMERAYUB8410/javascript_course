// Post-increment: old value assigned first, then incremented
let numbr1 = 23;
let y = numbr1++;
console.log("numbr1 =", numbr1); // 24 (incremented after assignment)
console.log("y =", y);           // 23 (old value)

// Pre-increment: increment first, then assigned
let num2 = 24;
let z = ++numbr1; 
console.log("num2 =", num2); // 24 (unchanged, separate variable)
console.log("z =", z);       // 25 (incremented value)
