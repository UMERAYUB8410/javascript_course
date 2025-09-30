// dates 
let myDate = new Date()

//  console.log(myDate.toString())    // Mon Sep 29 2025 11:08:12 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Mon Sep 29 2025
// console.log(myDate.toISOString()) // 2025-09-29T11:08:12.890Z
// console.log(myDate.toJSON())   // 2025-09-29T11:08:12.890Z
// console.log(myDate.toLocaleDateString()) //       9/29/2025
// console.log(myDate.toLocaleString()) //  9/29/2025, 11:08:12 AM
// console.log(myDate.toLocaleTimeString())// 11:08:12 AM
// console.log(typeof myDate);      //object                   
// time 

//format 
// let mynewDate = new Date(2023, 0, 23)   // 1/23/2023
// let mynewDate = new Date(2024, 9, 30 , 11 , 5)   //  10/30/2024, 11:05:00 AM
// let mynewDate = new Date("2025 , 09 , 30")   //  9/30/2025
let mynewDate = new Date("01-14-2023")  //  9/30/2025
// console.log(mynewDate.toLocaleString());  

let myTimeStamp =  Date.now()

// console.log(myTimeStamp)   //1759214218948 
// console.log(mynewDate.getTime())

//to get in mili second

// console.log(Math.floor(Date.now()/1000)); 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay());

// `${newDate.getDate()} and the time is ${newDate.getMonth() + 1}`

console.log(newDate.toLocaleString('default', { weekday: "long" })); // Tuesday
console.log(newDate.toLocaleString('default', { weekday: "short" })); // Tue  // basic property for format it in human readable form 
console.log(newDate.toLocaleString('default', { weekday: "narrow" })); // T
