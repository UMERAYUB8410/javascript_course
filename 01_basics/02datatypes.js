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



//primitive dt 

//string,boolean,bigint,number,null,undefined,symbol 
 const score = 100
 const scoreValue = 100.1

 const isLoggedIn  = false
 const outsideTemp = null
 let userEmail;   //undefined

 const id = Symbol('123')
 const anotherid = Symbol('123')

 console.log( id === anotherid);
 

 const BigNumber = 234567890567n

//non primitive 

//arrays,funtion,objects

const fruits = [ "banana, apple , oranges"]
let MyObj = {
    name: "umer",
    age : 20,
}

let myFunc = function(){
    console.log("Hello moto");
    
}
console.log(typeof outsideTemp );  // null type is alwayys object
console.log(typeof myFunc );  // object-function  
console.log(typeof fruits );  // object  
// all non primitive type return function they say it function but returns object 


// //
//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined



// ) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object