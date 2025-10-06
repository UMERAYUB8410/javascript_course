let fruits = ['banana' , 'apple' , 'mango']
let dairy = ['yogurt','milk','eggs']

fruits.push(dairy)  // pushes on the same array [ 'banana', 'apple', 'mango', [ 'yogurt', 'milk', 'eggs' ] ]

console.log(fruits); //[ 'banana', 'apple', 'mango', [ 'yogurt', 'milk', 'eggs' ] ]
console.log(fruits[3][2]); //eggs

//  trying with concat
let results1 = fruits.concat(dairy)
console.log(results1);  // returns a new array 

// this method is preferred  due to limitations of calling method  in others 

const results = [...fruits , ...dairy] // also known as spread
console.log(results)

const another_array = [1,2,3 , [4,5,6] , 7 , [8 , 9],[10,11]]

const real_lifearray = another_array.flat(Infinity) // this can be use when to many arrys are inside one an does the same thing as concat  
console.log(real_lifearray)

console.log(Array.isArray('Umer')) //false
console.log(Array.from('umer'))// [ 'u', 'm', 'e', 'r' ]
console.log(Array.from({name: 'umer'}));// []


let score1 = 100
let score2 = 200
let score3 =  300

console.log(Array.of(score1,score2,score3));
