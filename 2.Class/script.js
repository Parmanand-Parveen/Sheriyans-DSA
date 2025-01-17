// 1.⁠ ⁠Basic Console Usage
// 	1.	Write a program that calculates the sum of 5 + 10, assigns it to a variable, and logs the result to the console.

//  let sum = 5+10

//  console.log(15)
// **************************************************************************************************************************************
// 2.⁠ ⁠Variables and Data Types
// 	2.	Declare a variable age with the value 25. Then, reassign it to 30 and log its type using typeof.

//   let age  = 25

//   age = 30

//   console.log(typeof age)
// **************************************************************************************************************************************
// 3.⁠ ⁠Loops
// 	3.	Write a for loop that prints all the odd numbers between 1 and 20.

// for(let i=1; i<=20; i++){
//   if(i%2 == 1){
//     console.log(i)}

// }

// 	4.	Create a while loop that starts at 10 and decreases by 2 until it reaches 0. Log each step.

//  let i = 10
//  while(i>=0){
//    console.log(i)
//    i = i-2
//  }
// **************************************************************************************************************************************
// 4.⁠ ⁠Arrays
// 	5.	Create an array of your favorite fruits (at least 5).
// 	•	Add a new fruit to the end of the array.
// 	•	Remove the first fruit from the array.
// 	•	Log the updated array.
// 	6.	Write a program that iterates over an array of numbers and prints only the numbers greater than 10.

//    let arr = ["apple","banana","mango","orange","grapes"]

//    arr.push("watermelon")

//    arr.shift()

//    console.log(arr)

//    let arr2 = [156315,351,864,53,6584,354,61,2315,641,31,15,,54,5,15,6,2,6,4]

//  arr2.forEach((num)=>{
//     if(num>10){
//         console.log(num)
//     }
//  })

// **************************************************************************************************************************************

// 5.⁠ ⁠Functions
// 	7.	Write a function multiplyNumbers that takes two numbers as arguments and returns their product. Test the function with values 5 and 6.

//  let multiply = (a,b)=>{
//      return a*b
//  }

//  console.log(multiply(5,6))
// **************************************************************************************************************************************
// 6.⁠ ⁠Conditionals
// 	8.	Write an if...else statement to check if a number is divisible by 3. If it is, log “Divisible by 3,” otherwise log “Not divisible by 3.”

// let num = 10

// if(num%3 == 0){
//     console.log("Divisible by 3")
// }else{
//     console.log("Not divisible by 3")
// }

// 7.⁠ ⁠Object Basics
// 	9.	Create an object book with properties: title, author, and year. Add a new property genre with the value fiction and log the updated object.

//  let book = {
//     title : "Rich dad poor dad",
//     author : "robert kiyosaki",
//     year : 2010,
//  }

//  book.genre = "fiction"

//  console.log(book)

// **************************************************************************************************************************************

// 8.⁠ ⁠String Manipulation
// 	10.	Write a program that takes a string JavaScript is function and:
// 	•	Converts it to all uppercase.
// 	•	Extracts the first 10 characters.
// 	•	Replaces the word fun with awesome.

// let str =  "Javascript is a very fun language"

// console.log(str.toUpperCase())
// let str2 = str.slice(0,11)
// console.log(str.replace("fun", "awesome"))

// Let me know if you’d like solutions or hints for these questions!

// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console.

// console.log("Parmanand")
// console.log("Codding")

// **************************************************************************************************************************************

// 	2.	Perform and log the result of 45 * 2 - 10.

//  let ans  = 45*2 -10
//  console.log(ans)
// **************************************************************************************************************************************
// 	3.	Use console.log() to display the current year.

//    console.log(new Date().getFullYear())
// **************************************************************************************************************************************
// 	4.	Create two variables for first and last name. Concatenate and log them.

// let firstname = "parmanand"
// let lastname = "Parveen"

// console.log(firstname + " " + lastname)

// **************************************************************************************************************************************

// 	5.	Track the value of a variable by logging it before and after updating.

// let a = 10

// console.log(a,"Befor upadating")

// a = 20

// console.log(a, "After updating")

// **************************************************************************************************************************************
// 	6.	Use console.error() to simulate an error message.

//  console.error("Error")

// **************************************************************************************************************************************
// 	7.	Log the square of the number 12 to the console.

// console.log(12**2)

// **************************************************************************************************************************************

// 	8.	Print the type of a variable holding the value true.

// let bol = true

// console.log(typeof bol)

// **************************************************************************************************************************************
// 	9.	Create a variable holding your age and log whether it’s greater than 18.

// let age = 25

// if(age>18){
//     console.log("Greater than 18")
// }else{
//     console.log("Less than 18")
// }

// **************************************************************************************************************************************

// 	10.	Log the result of 100 / 0 and observe the output.

// console.log(100/0)

// **************************************************************************************************************************************

// 2. Variables and Data Types (10 Questions)
// 	11.	Declare a variable using let and log its value.

// let variable = 51465

// console.log(variable)

// **************************************************************************************************************************************

// 	12.	Create a constant to store the value of PI and log it.

//  const PI = 3.14

//  console.log(PI)

// **************************************************************************************************************************************

// 	13.	Reassign a value to a variable declared with let and log the result.

//  let a = 10

//  a ="Hello"

//  console.log(a)

// **************************************************************************************************************************************

// 	14.	Check the type of null and log it.

//  console.log(typeof null)

// **************************************************************************************************************************************

// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.

// let age  = "25"

// console.log(typeof age)

// 	16.	Use typeof to check the type of a boolean variable.

// let bol = true

// console.log(typeof bol)

// **************************************************************************************************************************************

// 	17.	Create three variables of types string, number, and boolean, and log their values.

// let name = "Parmanand"
// let age  = 21
// let hardworking = true

// console.log( name, age , hardworking)

// **************************************************************************************************************************************

// 	18.	Declare a variable without assigning a value. Log its type.

// let variable

// console.log(variable)

// **************************************************************************************************************************************

// 	19.	Create a variable with undefined and log its type.

//  let variable = undefined

//  console.log(typeof variable)

// **************************************************************************************************************************************

// 	20.	Use const to create an array. Try reassigning the array and observe the error.

// const arr = [1,2,3,4,5,6,7,8,9]

// arr[3]=10

// console.log(arr)

// ****Here the value will change in the array

// **************************************************************************************************************************************

// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.

// for(let i=1; i<=50; i++){
//     console.log(i)
// }

// **************************************************************************************************************************************

// 	22.	Use a while loop to sum the numbers from 1 to 10.

// let sum = 0
// let i = 1

// while(i<=10){
//     sum = sum+i
//     i++
// }

// console.log(sum)

// **************************************************************************************************************************************

// 	23.	Create a for...of loop to log each character of the string "JavaScript".

// let str = "JavaScript"

// for(let i of str){
//     console.log(i)
// }

// **************************************************************************************************************************************

// 	24.	Write a for loop that skips even numbers between 1 and 20.

// for(let i = 1; i<=20;i++){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }

// **************************************************************************************************************************************

// 	25.	Use a do...while loop to log numbers from 5 to 1.

// let i = 5

// do {
//     console.log(i)
//     i--
// } while (i>0);

// **************************************************************************************************************************************
// 	26.	Create a for loop that calculates the factorial of 5.

// let fact = 1
// for(let i=1; i<=5; i++){
//     fact = fact*i
// }

// console.log(fact)

// **************************************************************************************************************************************

// 	27.	Write a nested loop to print a 3x3 grid of numbers.

// for(let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(i*j)
//     }
// }

// **************************************************************************************************************************************

// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].

// let arr = [1,2,3,4,5,6]

// for(let i=0; i<=arr.length/2 ;i++){
//     let temp = arr[i]
//    arr[i] = arr[arr.length-1-i ]
//    arr[arr.length-1-i] = temp

// }

// console.log(arr)

// **************************************************************************************************************************************

// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.

//  let i = 1

//  while(i<=100){
//     if(i%5 == 0){
//         console.log(i)
//     }
//     i++
//  }

// **************************************************************************************************************************************
// 	30.	Use a for...in loop to iterate over an object and log its keys.

// let obj = {
//     name : "Parmanand",
//     age : 21,
//     hardworking : true
// }

// for(let key in obj){
//     console.log(key)
// }

// **************************************************************************************************************************************

// 4. Arrays (10 Questions)

// 	31.	Create an array of your top 5 favorite movies and log it.

// let movies = ["3Idiots", "Shole" , "Yhe jawani hai diwani" , "Bajirao Mastani" , "Dangal"]

// movies.forEach((movie)=>{
//     console.log(movie)
// })

// **************************************************************************************************************************************

// 	32.	Find and log the second element of an array.

// console.log(movies[1])

// **************************************************************************************************************************************

// 	33.	Add two new elements to the start of an array using .unshift().

// movies.unshift("Kabhi Khushi Kabhie Gham")

// movies.unshift("Dhoom")

// **************************************************************************************************************************************

// 	34.	Remove the last element of an array and log the updated array.

// let arr = [1,2,3,4,5,6]

// arr.pop()

// console.log(arr)

// **************************************************************************************************************************************

// 	35.	Use .slice() to extract the first three elements of an array.

// let arr = [1,2,3,4,5,6]

// console.log(arr.slice(0,1))

// **************************************************************************************************************************************

// 	36.	Find the index of a specific element in an array using .indexOf().

// let arr = [1,2,3,4,5,6]

// console.log(arr.indexOf(5))

// **************************************************************************************************************************************

// 	37.	Check if a value exists in an array using .includes().

// let arr = [1,2,3,4,5,6]

// console.log(arr.includes(2))

// **************************************************************************************************************************************

// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().

// let arr1 = [1,2]
// let arr2 = [3,4]

// console.log(arr1.concat(arr2))

// **************************************************************************************************************************************

// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.

//  let arr = [5,2,9,1,2515,54,41,41,51,1]

//  for(let i=0; i<arr.length; i++){
//    for(let j=i+1; j<arr.length; j++){
//      if(arr[i]>arr[j]){
//        let temp = arr[i]
//        arr[i] = arr[j]
//        arr[j] = temp
//      }
//    }
//  }

//  console.log(arr)

// **************************************************************************************************************************************

// 	40.	Write a program that creates a copy of an array without mutating the original.

// let arr = [1,2,3,4,5,6]

// let copyarr = [...arr]

// console.log(arr,copyarr)

// **************************************************************************************************************************************

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.

// function check(num){
//     if(num%2==0){
//         console.log("Even")
//     }else{
//         console.log("Odd")
//     }
// }

// check(5)

// **************************************************************************************************************************************

// 	42.	Create a function to calculate the area of a circle with a given radius.

// let area = (r) =>{
//     console.log((Math.PI*r*r).toFixed(2))
// }

// area(2)

// **************************************************************************************************************************************

// 	43.	Write a function that accepts an array and returns the sum of its elements.

// let arrsum = (arr)=>{
//     sum = 0
//     arr.forEach((num)=>{
//        sum = sum + num
//     })
//     return sum
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arrsum(arr))

// **************************************************************************************************************************************

// 	44.	Create a function that checks if a string starts with a specific character.

// let check = (str, char) => {
//     if(str[0]==char){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(check("gelloo", "g"))

// **************************************************************************************************************************************

// 	45.	Write a function to find the maximum of two numbers.

// let maximum = (a,b)=>{
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
//     }

// console.log(maximum(5,6))

// **************************************************************************************************************************************

// 	46.	Create a function that takes a number and returns its factorial.

// let fact = (num)=>{
//    let factorial = 1
//     for(let i = 1; i<=num; i++){
//         factorial = factorial*i
//     }
//     return factorial
// }

// console.log(fact(5))

// **************************************************************************************************************************************

// 	47.	Write a function that accepts a string and returns its reverse.

// let reversestr = (str)=>{
//     return str.split("").reverse().join("")
// }

// console.log(reversestr("hello world"))

// **************************************************************************************************************************************

// 	48.	Create a function to find the largest number in an array.

// let largestnum = (arr)=>{
//     let largest = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(largestnum(arr))

// **************************************************************************************************************************************

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").

// let changedstr = (str)=>{
//     return str.split(" ").join("-").toLowerCase()
// }

// console.log(changedstr("Hello World"))

// let changedstr = (str)=>{
//     let arr = str.split(" ")
//     let str2 = []
//     for(let i=0; i<arr.length; i++){
//         str2.push( arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
// return str2.join(" ")

// }

// console.log(changedstr("hello world"))

// **************************************************************************************************************************************

// 	50.	Create a function that logs "Hello, World!" every time it is called.

// let hello = () => {
//     console.log("Hello, World!")
// }

// hello()

// **************************************************************************************************************************************

// 6. Conditionals (10 Questions)
// 	51.	Write a program to check if a number is positive, negative, or zero.

// let num = 12

// if(num>0){
//     console.log("Positive")
// }else if(num<0){
//     console.log("Negative")
// }else{
//     console.log("Zero")
// }

// 	52.	Create a program to check if a year is a leap year.

// let year = 2000

// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0){
//             console.log("Leap Year")
//         }else{
//             console.log("Not a Leap Year")
//         }
//     }else{
//         console.log("Leap Year")
//     }
// }else{
//     console.log("Not a Leap Year")
// }

// **************************************************************************************************************************************

// 	53.	Write an if...else statement to determine if a person can vote based on their age.

// let age = 18

//  if(age>=18){
//      console.log("You can vote")
//  }else{
//     console.log("You cannot vote")
//  }

// **************************************************************************************************************************************

// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).

// let day = 6

// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid day")
// }

// **************************************************************************************************************************************

// 	55.	Write a program to check if a number is divisible by 3 and 5.

// let num = 15

// if(num%3==0 && num%5==0){
//     console.log("Divisible by 3 and 5")
// }else{
//     console.log("Not divisible by 3 and 5")
// }

// **************************************************************************************************************************************

// 	56.	Create a program to check the grade of a student based on marks.

// let marks = 80

// if(marks>=90){
//     console.log("Grade A")
// }else if(marks>=80){
//     console.log("Grade B")
// }else if(marks>=70){
//     console.log("Grade C")
// }else if(marks>=60){
//     console.log("Grade D")
// }else if(marks>=50){
//     console.log("Grade E")
// }else{
//     console.log("Fail")
// }

// **************************************************************************************************************************************

// 	57.	Write an if condition to compare two strings and log if they are equal.

// let str1 = "Hello"
// let str2 = "Hell"

// if(str1==str2){
//     console.log("Equal")
// }else{
//     console.log("Different")
// }

// **************************************************************************************************************************************

// 	58.	Use a ternary operator to check if a number is even or odd.

// let num = 10

// num%2 ==0 ? console.log("Even") : console.log("Odd")

// **************************************************************************************************************************************

// 	59.	Write a program to find the largest of three numbers using if...else.

// let num1 = 60
// let num2 = 90
// let num3 = 30

// if(num1>num2 && num1>num3){
//     console.log(num1)
// }else if(num2>num1 && num2>num3){
//     console.log(num2)
// }else{
//     console.log(num3)
// }

// **************************************************************************************************************************************

// 	60.	Create a program to calculate the discount based on the price of an item.

// let price = 900

// if(price>=100 && price<=200){
//     console.log("Discount is 10%")
// }else if(price>200 && price<=500){
//     console.log("Discount is 20%")
// }else if(price>500){
//     console.log("Discount is 30%")
// }

// **************************************************************************************************************************************

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.

// let person = {
//     name:"Parmanand",
//     age:21,
//     city:"Muzaffarpur"
// }
// console.log(person)

// **************************************************************************************************************************************

// 	62.	Add a new property isStudent to the object above and set it to true.

// person.isStudent = true
// console.log(person)

// **************************************************************************************************************************************

// 	63.	Access and log the value of the city property using bracket notation.

// console.log(person["city"])

// **************************************************************************************************************************************

// 	64.	Delete the age property from an object and log the updated object.

// delete person.age

// console.log(person)

// **************************************************************************************************************************************

// 	65.	Write a function that accepts an object and logs all its keys.

// function keys(obj){
//     for(let key in obj){
//         console.log(key)
//     }
// }

// let person = {
//     name:"Parmanand",
//     age:21,
//     city:"Muzaffarpur"
// }

// keys(person)

// **************************************************************************************************************************************

// 	66.	Create an array of objects representing books with title and author properties.

// let books = [
//     {
//         title : "The Great Gatsby",
//         author : "F. Scott Fitzgerald"
//     },
//     {
//         title : "To Kill a Mockingbird",
//         author : "Harper Lee"
//     },
//     {
//         title : "Pride and Prejudice",
//         author : "Jane Austen"
//     }
// ]

// **************************************************************************************************************************************

// 	67.	Access and log the author of the second book in the array.

// console.log(books[1].author)

// **************************************************************************************************************************************

// 	68.	Write a program to check if a specific key exists in an object.

// let obj = {
//     name : "Parmanand",
//     age : 21,
//     hardworking : true
// }
// console.log(obj.hasOwnProperty("name"))

// **************************************************************************************************************************************

// 	69.	Create a function to count the number of keys in an object.

// let keyscount = (obj)=>{
//     let count = 0
//     for(let key in obj){
//         count++
//     }
//     return count
// }
// let obj = {
//     name : "Parmanand",
//     age : 21,
//     hardworking : true
// }

// console.log(keyscount(obj))

// **************************************************************************************************************************************

// 	70.	Use Object.assign() to merge two objects.

// let obj1 = {
//     name : "Parmanand",
//     age : 21,
//     hardworking : true
// }

// let obj2 = {
//     hobby: "Chess",
//     city : "Muzaffarpur"
// }

// let obj3 = Object.assign(obj1, obj2)

// console.log(obj3)

// **************************************************************************************************************************************

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.

// let str = "Swach bharat ka irada kar liya hamne"

// console.log(str.length)

// **************************************************************************************************************************************

// 	72.	Extract the last 4 characters of a string.

// let extract = str.slice(-4)

// console.log(extract)

// **************************************************************************************************************************************

// 	73.	Convert a string to lowercase and log it.

// let word = "SWACH BHARAT KA IRADA KAR LIYA HAMNE"

// console.log(word.toLowerCase())

// **************************************************************************************************************************************

// 	74.	Split a sentence into words using .split() and log the result.

//  console.log(word.split(" "))

// **************************************************************************************************************************************

// 	75.	Find the position of the first occurrence of "a" in a string.

// let str = "Swach bharat ka irada kar liya hamne"

// console.log(str.indexOf("a"))

// **************************************************************************************************************************************

// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".

// let str = "I love javaScript"

// console.log(str.replace("javaScript", "JS"))

// **************************************************************************************************************************************

// 	77.	Repeat a string 3 times using .repeat().

// console.log(str.repeat(3))

// **************************************************************************************************************************************

// 	78.	Create a function that checks if a string contains a specific word.

// let str = "I love javaScript"
// let check = (str, word) => {
//     return str.includes(word)
// }

// console.log(check(str,"l"))

// **************************************************************************************************************************************

// 	79.	Write a program to remove whitespace from both ends of a string.

// let str  = "                dvfbg                     "

// console.log(str.trim())

// **************************************************************************************************************************************

// 	80.	Create a function to count the number of vowels in a string.

// let str  ="swach bharat ka irada kar liya hamne"

// let countvowels = (str) => {
//     let count = 0
//     let lowercase = str.toLowerCase()
//     for(let i=0; i<lowercase.length; i++){
//         if(lowercase[i] == "a" || lowercase[i] == "e" || lowercase[i] == "i" || lowercase[i] == "o" || lowercase[i] == "u"){
//             count++
//         }
//     }
//     return count
// }

// console.log(countvowels(str))

// **************************************************************************************************************************************

// // Mixed Practice (20 Questions)
// // 	81.	Write a function that accepts an array of numbers and returns only the even numbers.

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let even = (arr) => {
//     let evenarr = []
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             evenarr.push(arr[i])
//         }
//     }
//     return evenarr
// }

// console.log(even(arr))

// **************************************************************************************************************************************

// 	82.	Create a program to count the occurrences of a specific value in an array.

// let arr = [1,2,1,2,1,2,1,2,1,2,1,2]

// let occurance = (arr, num)=>{
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == num){
//             count++
//         }
//     }
//     return count
// }

// console.log(occurance(arr, 1))

// **************************************************************************************************************************************

// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.

// let palindrome = (str) => {
//     let reverse = str.split("").reverse().join("")
//     return str == reverse
// }

// console.log(palindrome(""))

// **************************************************************************************************************************************

// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// let pattern = (n) => {
//     for(let i=1; i<=n; i++){
//         console.log("*".repeat(i))
//     }
// }

// pattern(5)

// **************************************************************************************************************************************

// 	85.	Write a function that returns the square of each number in an array.

// let square = (arr) => {
//     arr.forEach((element, index) => {
//         arr[index] = element*element
//     })
//     return arr
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(square(arr))

// **************************************************************************************************************************************

// 	86.	Use a for loop to sum all odd numbers between 1 and 50.

// let sum = 0
// for(let i=1; i<=50; i++){
//     if(i%2 == 1){
//         sum = sum + i
//     }
// }
// console.log(sum)

// **************************************************************************************************************************************

// 	87.	Create an object representing a person and log their full name.

// let person = {
//     fullname:"Parmanand",
//     age:21,
//     city:"Muzaffarpur"
// }

// console.log(person.fullname)

// **************************************************************************************************************************************

// 	88.	Write a program to convert the string "10" to a number and add 5 to it.

// let str = "10"

// console.log(Number(str) + 5)

// **************************************************************************************************************************************

// 	89.	Write a program to reverse an array without using .reverse().

// let arr = [1,2,3,4,5,6]

//     for(let i=0; i<arr.length/2; i++){
//         let temp = arr[i]
//         arr[i] = arr[arr.length-1-i]
//         arr[arr.length-1-i] = temp
//     }

// console.log(arr)

// **************************************************************************************************************************************

// 	90.	Create a program to check if an array is empty.

// let arr = []

// let check = (arr)=>{
//     if(arr.length == 0){
//        return  "Empty"
//     }else{
//         return "Not Empty"
//     }

// }

// console.log(check(arr))

// **************************************************************************************************************************************

// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.

// let date = new Date

// console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)

// **************************************************************************************************************************************

// 	92.	Write a program to find the smallest number in an array.

// let arr = [ 2, 3, 4, 5, 6, 7, 1];

// let smallestnum = (arr) => {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (smallest > arr[i]) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// };

// console.log(smallestnum(arr))

// **************************************************************************************************************************************

// 	93.	Create a function to return the Fibonacci sequence up to n terms.
 
// let fib = (n)=>{
// if(n<=0){
//     return "Enter a number greater than 0"
// }

// if(n == 1){
//     return 1
// }

//  let pevval = 0
//  let currval = 1

//  for(let i=2; i<=n; i++){
//      let nextval = pevval + currval
//      pevval = currval
//      currval = nextval
//  }
 
//  return currval


// }


// console.log(fib(2))


// 	94.	Use a try...catch block to handle division by zero.

 
// let divide = (num1, num2) => {
//     try{
//            if(num1 == 0 || num2 == 0){
//             throw new Error("Cannot divide by zero")
//         }

//         return num1/num2
//     }catch(e){
//         return e.message
//     }
// }


// console.log(divide(10,2))



// 	95.	Write a program to find the index of the first vowel in a string.


// let str= "HHHa"


// let vowel = (str) => {
//      let lowercase = str.toLowerCase()

//     for(let i=0; i<lowercase.length; i++){
//         if(lowercase[i] == "a" || lowercase[i] == "e" || lowercase[i] == "i" || lowercase[i] == "o" || lowercase[i] == "u"){
//             return i
//         }
//     }
// }


// console.log(vowel(str))

// 	96.	Create a function that accepts an array and returns only unique values.

//   let arr = [1,1,1,1,1,2,2,2,2,2,3,4,4,4,5]

//   let unique = (arr) => {
//      let arr2  = new Set(arr)
//      return arr2
//   }


//   console.log(unique(arr))

// 	97.	Write a program to merge two sorted arrays into one sorted array.
 
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let merge = (arr1,arr2) => {
//     let mergedarr = []
//     let i = 0
//     let j = 0
//     while(i<arr1.length || j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             mergedarr.push(arr1[i])
//             i++
//         }else{
//             mergedarr.push(arr2[j])
//             j++
//         }
//     }
//     return mergedarr
// }


// console.log(merge(arr1,arr2))

// 	98.	Create a function to count the number of words in a string.

// let count = (str) => {
//     let count = 1
//     for(let i=0; i<str.length; i++){
//         if(str[i] == " "){
//             count++
//         }
//     }
//     return count
// }

// console.log(count("Swach bharat ka irada kar liya hamne"))


// 	99.	Write a program to toggle a button’s background color when clicked.
 
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     btn.classList.toggle("active")
    
// })



// 	100.	Write a function to check if all elements in an array are greater than a specific value.


// let arr = [3,4,5]

// let check = (arr,num) => {

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < num){
//             return false
//         }}
//         return true


// }



// console.log(check(arr,3))



// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!
