// console.log("Hello");

// let a = 12;

// console.log(a);

// let data= prompt("Your name")

// console.log(data)

// *************************************************************************************************************************************************

// 1. Basic Console Usage

// 	•	Print a message to the console.
// 	•	Log the result of a mathematical operation (2 + 2).
// 	•	Log a variable’s value and track changes using console.log().

// console.log("Parmanand")
// console.log(2+2)

// let a  = 12

// console.log(a)

// a= 11

// console.log(a)

// ***************************************************************************************************************************************************

// 2. Variables and Data Types
// 	•	Declare a variable using let and const.

// let a = 12;

// const z = 22;

// 	•	Assign and reassign a value to a variable.

// let h = "Hello"

//  h = 55

// 	•	Determine the type of a variable using typeof.

// const d = "May";

// let D = "June";

// console.log(d, D);

// ******************************************************************************************************************************************

// 3. Loops
// 	•	Create a for loop to print numbers from 1 to 10.
// 	•	Create a while loop to count down from 10 to 1.
// 	•	Use a for...of loop to iterate over an array of names.

// for(let i = 1 ; i<11 ; i++){
//     console.log(i)
// }

// let i = 10

// while(i>0){

//     console.log(i)

//     i--
// }

// let arr = [1,"a" ,true, 2, "b", false, {}]

// for(let key of arr){
//     console.log(key)
// }

// ********************************************************************************************************************************************

// 4. Arrays
// 	•	Create an array with 5 elements and log it.
// 	•	Add a new element to the end of an array (.push()).
// 	•	Remove the last element from an array (.pop()).
// 	•	Iterate over an array and print each element.
// 	•	Find the length of an array.

// let arr = [1,"a" ,true, 2, "b", {}]

// arr.push("c")
// console.log(arr)

// arr.pop()

// for(let key of arr){
//     console.log(key)
// }

// console.log(arr.length)

// **************************************************************************************************************************************

// 5. Functions
// 	•	Create a function to add two numbers and return the result.
// 	•	Write a function that accepts a string and returns its uppercase version.
// 	•	Create a function to calculate the area of a rectangle.

// function add(a,b){
//     return a+b
// }

// console.log(add(2,3))

// function upperCase(str){
//     return str.toUpperCase()
// }

// console.log(upperCase("hello"))

// function area(a,b){
//     return a*b
// }

// console.log(area(2,3))

// ******************************************************************************************************************************************

// 6. Conditionals
// 	•	Write an if statement to check if a number is positive or negative.
// 	•	Use if...else if to classify a grade as “A”, “B”, or “Fail”.
// 	•	Create a switch case for selecting a fruit price.

// let scince = prompt("Number get in science");
// let math = prompt("Number get in math");
// let phy = prompt("Number get in phy");

// if (
//   scince == null ||
//   math == null ||
//   phy == null ||
//   scince.trim() == "" ||
//   math.trim() == "" ||
//   phy.trim() == " "
// ) {
//   console.log("Please write correct data");
// } else {
//   let num1 = Number(scince);
//   let num2 = Number(math);
//   let num3 = Number(phy);

//   let avrage = ((num1 + num2 + num3) / 3).toFixed(2);

//   if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//     console.log("Plese give all 3 in number");
//   } else {
//     if (avrage >= 80) {
//       console.log(`Your percentage is ${avrage} and grade is A`);
//     } else if (avrage >= 60) {
//       console.log(`  Your percentage is ${avrage} and grade is B`);
//     } else {
//       console.log(` Your percentage is ${avrage} and grade is Fail`);
//     }
//   }
// }

// let userData = prompt("Enter a number");

// if (userData === null || userData.trim() === "") {
//   console.log("Please write somthing in the prompt");
// } else {
//   let changed = Number(userData);

//   if (isNaN(changed)) {
//     console.log("Please give a number ");
//   } else {
//     if (changed == 0) {
//         console.log("It's a zero")
//     }else if( changed >0){
//         console.log("It is a positive number")
//     }else{
//         console.log("It is a negative number")
//     }
//   }
// }

// let score  = 74

// if(score>90){
//     console.log("A")
// }else if(score>60){
//     console.log("B")
// }else if(score >40){
//     console.log("C")
// }else{
//     console.log("Fail")
// }

// let fruit = "apple"

// switch(fruit){
//     case "apple":
//         console.log("Price is 10")
//         break
//     case "banana":
//         console.log("Price is 20")
//         break
//     case "orange":
//         console.log("P")
//         break
//     default:
//         console.log("No fruit")
// }

// *********************************************************************************************************************************

// 7. Object Basics
// 	•	Create an object to store information about a car (e.g., make, model, year).
// 	•	Access and log the value of a property using dot notation.
// 	•	Add a new property to an existing object.

// let car = {

//     make: "BMW",
//     model: "X5",
//     year: 2022
// }

// console.log(car.make)

// car.color = "Red"

// console.log(car)

// ***********************************************************************************************************************************

// 8. String Manipulation
// 	•	Concatenate two strings.
// 	•	Extract the first 5 characters of a string (.slice()).
// 	•	Replace a word in a string using .replace().

// let str1 = "Hello"

// let str2 = "World"

// console.log(str1 + " " + str2)
// console.log(`${str1} ${str2}`)

// let str3 = str1.concat(str2)
// console.log(str3)

// let str = "jhbbsdvnfgbkmfc vgjsfn hjbn "

// let str2 = str.slice(0,5)
// console.log(str2)

// let str3 = str.replace("j", "Hello")
// console.log(str3)

// let str = "swach bharat ka irada kar liya hamne"

// let str2 = str.charAt(0) + str.charAt(str.length-1)

// console.log(str2)

// let age = 25;

// age = 30;

// console.log(typeof age);

// ****************************************************************************************************************************************

// 9. Event Handling (Basic DOM Interaction)
// 	•	Create a button and log a message when it is clicked.
// 	•	Change the background color of a div on a mouseover event.
// 	•	Toggle a class on an element when it is clicked.

// document.querySelector("#btn").addEventListener("click", function(){

//     console.log("Clicked")
// })

// document.querySelector(".dibba").addEventListener("mouseover", function(){

//     document.querySelector(".dibba").style.backgroundColor = "pink"
// })

// document.querySelector("#btn").addEventListener("click", function(){

//     document.querySelector(".dibba").classList.toggle("active")
// })

// **********************************************************************************************************************************************

// 10. Range-Based Tasks
// 	•	Print all even numbers between 1 and 20.
// 	•	Calculate the sum of all numbers from 1 to 100.
// 	•	Create a range of numbers as an array and iterate over it.

// for(let i = 1 ; i<=20 ; i++){

//     if(i%2==0){
//         console.log(i)
//     }
// }

// let sum = 0

// for(let i = 1 ; i<=100 ; i++){

//     sum = sum + i
//     console.log(`Here i is ${i} and the sum is `,sum)

// }

//  let arr = [1,2,3,4,5,6,7,8,9,10]

//  arr.forEach((num)=>{
//     console.log(num)
//  })

// **********************************************************************************************************************************************

// 11. Filtering and Mapping Arrays
// 	•	Filter out all numbers greater than 10 from an array.
// 	•	Transform an array of numbers into their squares (.map()).
// 	•	Find the first number greater than 5 in an array.

// let arr = [24, 3, 135, 12, 1, 51, 124, 145, 151, 2, 1, 3, 1, 35];

// let arr2 = arr.filter((item)=>(item>10 ))

// console.log(arr2)

// for(let key of arr){

//     if(key>10){
//         console.log(key)
//     }
// }

// let arr2 =arr.map((item)=>( item*item))

// console.log(arr2)

// console.log(arr2)

// let number = arr.find((item)=>item>5)

//  console.log(number)

//  **************************************************************************************************************************************

// 12. Object and Array Interaction
// 	•	Loop through an array of objects and log a specific property from each object.
// 	•	Add a new key-value pair to each object in an array of objects.
// 	•	Sort an array of objects by a property (e.g., age).

// let data = [{name: "Parmanand", age: 22}, {name: "Rahul", age: 23}, {name: "Sahil", age: 25}, {name: "Rohit", age: 24}, {name: "Vishal", age: 26}]

// data.forEach((item)=>{
//     console.log(item.name, item.age)
// })

// data.forEach((item)=>{
//     item["gender"] = "Male"
//     console.log(item)
// })

// data.sort((a,b)=>{
//     return a.age - b.age
// })

// console.log(data)

// *******************************************************************************************************************************************

// 13. Working with Dates
// 	•	Get the current date and log it.

// let date = new Date()

// console.log(date)

// 	•	Format a date into DD/MM/YYYY format.

// console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)

// 	•	Calculate the difference in days between two dates.

//   let startDate = new Date("2024-01-01")
//   let endDate = new Date("2025-01-15")

//   let diffrence = endDate.getTime()  - startDate.getTime()

//   console.log(diffrence / (1000 * 60 * 60 * 24))

// ******************************************************************************************************************************************

// 14. User Input Handling
// 	•	Create a prompt to take the user’s name and log it.

//   let name = prompt("Give your name")

//   console.log(name)
// 	•	Ask the user for two numbers and log their sum.
// 	•	Validate that the user enters a number.

// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")

// if(isNaN(num1) || isNaN(num2)){
//      console.log("Plese give numbers only")

// }  else{
//     console.log(num1 + num2)
// }

// ***************************************************************************************************************************************

// 15. Asynchronous Tasks
// 	•	Log “Start”, then use setTimeout() to log “After 2 seconds”.
// 	•	Fetch data from a mock API and log it.
// 	•	Use async/await to fetch user data.

// 16. Error Handling
// 	•	Write a try...catch block to handle division by zero.
// 	•	Throw a custom error if a value is not a number.
// 	•	Catch an error when parsing invalid JSON.

// 17. Array Search and Calculation
// 	•	Find the index of a specific value in an array.
// 	•	Count how many times a specific value appears in an array.
// 	•	Check if an array contains a particular value.

// 18. Pattern Recognition
// 	•	Print a right triangle pattern using nested loops:

// *
// **
// ***
// ****

// 	•	Create a checkerboard pattern for an n x n grid.
// 	•	Count the occurrences of each character in a string.

// 19. Basic Algorithms
// 	•	Reverse a string without using .reverse().
// 	•	Find the largest number in an array.
// 	•	Check if a string is a palindrome.

// 20. Real-World Simulations
// 	•	Create a to-do list where you can add and remove tasks.
// 	•	Implement a simple calculator for addition, subtraction, multiplication, and division.
// 	•	Create a shopping cart simulation where you can add/remove items and calculate the total cost.

// These tasks break down most programming scenarios into actionable chunks. Each task is small enough to be learned individually but contributes to a larger skillset. Would you like me to elaborate on any specific task or provide solutions?

// function question1(val){
//     return val+2
// }

// function question2 (val){
//     if(typeof val == "string"){
//         console.log("Plese write a number")
//     }else{
//         return val+2
//     }
// }

// question2(22)

// for(let i=0; i<21; i++){
//     console.log(i)
// }

// for(let i=0; i<21; i++){
//    if(i == 12 || i == 13 || i == 14){
//     continue}else{
//         console.log(i)
//     }

// }

// let array = [1,2,3,4,5,6,7,8,9,10]

// array.forEach((item)=>{
//     console.log(item)
// })

// let mixedarray = [1,"a" ,true, 2, "b", false, {}]

// mixedarray.forEach((item)=>{
//     if(typeof item == "number"){
//         console.log(item)
//     }
// })



for(let i=0; i<21; i++){
   if(i%2 == 1){
    console.log(i)
   }
}
