"use strict  "; // treat all js code as newer version
 
// alert( 3 + 4) we are using node js not browser

let age = 18; 
let isloggedin = false
let state;

/*
string => ""
bigint => 1234568n
bool => true/false
null => standalone
undefined =>
    symbol => unique  ('123')
*/


// object react  
// null is alaways object if asked of what type is null

console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 123n); //bigint
console.log(typeof true); //boolean
console.log(typeof "hello"); //string
console.log(typeof state); //undefined
console.log(typeof age); //number