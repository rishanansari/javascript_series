// what is javscript : it is a high level in-time compiled programming language that conforms to the ECMAScript specification.

// used to bilud server side applications.

// used in mobile app development to create cross platform apps that can run on both iOS and Android.Android


1: Variable

var variable = we can reassign and redeclare the variable.

var Name="abid"
console.log(Name) //abid

Name = adil
console.log(Name) //adil

var Name = "samir"
console.log(Name) //smair

let Variable = we can reassign the value but can not re decalare.

let age = 25
console.log(age) // 25
age = 5
console.log(age) // 5

let age = 30
console.log(age) // error message

const variable = we cn not reassign and can not redeclare.
const salary = 80000
console.log(salary) //80000

salary=40000
console.log(salary) //erreor massage

const salary = 20000
console.log(salary) //erreor massage


2. DATA TYPES
Primitive data types
string , number . null , boolean , undefined , Bigint , symbol


string : sequence of char repesent text value
single qouets , double qouets , backticks.

const language ='javascript'
const Name = "abid"
const Channel = `ma civil`

number = all types like float etc

 const total = 0
 const pi = 3.14

 boolean = true(1) or false(0)

 const isPrime =true
 const isNumber = false

 undefined = not initaltize or initialize with undefiend

 const result = undefined;
 const res;

 null =empty value the value not known use null.

 const value = null




Non primitive data types

objects = key values pair (object literals)

const person={
    firstName : "abid",
    lastName : "ansari",
    age : 28,
}

to access use dot notation 

console.log(person.firstName + " " + person.lastName)


array type = collection of multiple value.

const oddNmuber=[1,3,5,7,9]
to access the values use index/position with in square bracket and poistion/index start from 0.
console.log(oddNmuber[0]) 


OPERATORS
special symbols used to perform operations on values and variables.

1. Assignment OP = assign the value to variable.

let x = 10

2.Aritmetic OP = aritmetic calculation
+ , - , / , * , %

let a = 20 
let b = 10
console.log(a+b); //30
console.log(a-b); //10
console.log(a*b); //200
console.log(a/b); //2
console.log(a%b); //0

++ , --

console.log(++a) //21
console.log(--a) //20 
console.log(a++) // 20 -- print the value 20 and internally increase/store the value to 21
console.log(a++) //21 -- print the value 21 and internally iecrease/store the value to 22
console.log(a--) //22 -- print the value 22 and internally decraese/store the value to 21
console.log(--a) //20 --decraese the value first then print


3. Comparison OP
compare 2 values and return boolean value true or false.

let a = 30;
let b = 20;

console.log(a==b) //compare the both value
console.log(a!=b) //compare the both value with not equal

console.log(a==b) //compare the values also the data types
console.log(a!=b) //compare the values also the data types with not euqal

console.log(a<b); //false
console.log(a<=b); // false
console.log(a>b); //true
console.log(a>=b); //true

4.Logical OP = perform logical operaton and return either true or false













