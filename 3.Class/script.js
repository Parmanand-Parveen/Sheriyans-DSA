// Here are 100 new JavaScript questions, slightly harder than the previous ones, focusing on problem-solving, intermediate concepts, and advanced use of JavaScript features.

// 1. Intermediate Console and Variables (10 Questions)
// 	1.	Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.

// console.log((5+3)*2-8/4)

// **************************************************************************************************************************************

// 	2.	Log the value of a variable before and after incrementing it using ++.

//  let i = 10

//  console.log(i)
//  i++

//  console.log(i)

// **************************************************************************************************************************************

// 	3.	Write a program that swaps the values of two variables without using a third variable.

// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

// **************************************************************************************************************************************

// 	4.	Create a variable with a template literal that includes your name and age.

// let name = "Parmanand"
// let age = 21

// let details = `My name is ${name} and my age is ${age}`

// console.log(details)

// **************************************************************************************************************************************

// 	5.	Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.

// let obj = {
//     name:"Parmanand",
//     age:21,
//     city:"Muzaffarpur"
// }

// console.table(obj)

// **************************************************************************************************************************************

// 	6.	Create a program that uses console.group() to group related logs.

// console.group("Person 1")
// console.log("Name :Parmanand")
// console.log("Age : 21")
// console.log("City : Muzaffarpur")
// console.groupEnd()
// console.group("Person 2")
// console.log("Name : Mujheeb")
// console.log("Age : 22")
// console.log("City : Delhi")

// **************************************************************************************************************************************

// 	7.	Use console.time() and console.timeEnd() to measure the execution time of a simple loop.

// console.time("Loop")

// for(let i=0; i<1000; i++){
//     console.log("Hello")
// }
// console.timeEnd("Loop")

// **************************************************************************************************************************************

// 	8.	Log a variable’s value dynamically by including it in a string: "The value is: <value>".

// let value = 900

// console.log(`The value is: ${value}`)

// **************************************************************************************************************************************

// 	9.	Use console.trace() to debug a function call stack.

// let func1 = ()=>{
//     func2()
// }

// let func2 = ()=>{
//     func3()
// }

// let func3 = ()=>{
//     console.trace()
// }

// func1()

// **************************************************************************************************************************************

// 	10.	Create and log an object dynamically using computed property names.

// let val = "name"
// let obj = {
//     [val]: "Parmanand",
//     age:21
// }

// console.log(obj)

// **************************************************************************************************************************************

// 2. Advanced Loops (10 Questions)
// 	11.	Write a nested loop to generate a multiplication table (1 to 10).

// for(let i= 1 ; i<=10; i++){
//     for(let j = 1; j<=10 ; j++){
//         console.log(`${i}* X ${j}= ${i*j}`)
//     }
// }

// **************************************************************************************************************************************

// 	12.	Use a for...in loop to iterate through the properties of an object.

// let obj = {
//     name:"Parmanand",
//     age : 21,
//     City : "Muzaffarpur"
// }

// for(keys in obj){
//    if(obj[keys] !== "function"){
//     console.log(keys)
//    }
// }

// **************************************************************************************************************************************

// 	13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.

// let sum = 0

// for(let i =0; i<=100 ; i++){
//     if(i%2 ==0){
//         sum = sum+i
//     }

// }

// console.log(sum)

// **************************************************************************************************************************************

// 	14.	Use a for...of loop to iterate over a string and count the vowels.

// let str = "Swach bharat ka irada kar liya hamne "
// let countvowel = (str)=>{
//       let lowerstr = str.toLowerCase()
//      let count = 0

//      for (const elem of lowerstr) {
//         if(elem == "a" || elem == "e" || elem == "i" || elem == "o" || elem == "u"){
//             count++
//         }
//      }
//     return count
// }

// console.log(countvowel(str))

// **************************************************************************************************************************************

// 	15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).

// for (let i = 0; i <= 21; i++) {
//   if (i % 7 == 0) {
//     console.log("Here the loop break");
//     break;
//   } else {
//     console.log(i);
//   }
// }

// **************************************************************************************************************************************

// 	16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.

// for(let i = 0 ; i<=20 ; i++){
//     if(i%3==0){
//         continue
//     }else{
//         console.log(i)
//     }
// }

// **************************************************************************************************************************************

// 	17.	Use a do...while loop to prompt the user until they enter a positive number.

// let i = +prompt("Enter a positive number")

// do {
//    if(i<0){
//      i = +prompt("Enter a positive number")
//    }else{
//     break
//    }

// } while (i<0);

// **************************************************************************************************************************************

// 	18.	Write a nested loop to generate a pyramid pattern:

//    *
//   ***
//  *****
// *******

// **************************************************************************************************************************************

// 	19.	Use a loop to reverse a string "JavaScript".

// let str = "Javascript";

// for (let i = 0; i <= str.length / 2; i++) {
//   let temp = str[i];
//   str[i] = str[str.length - 1 - i];
//   str[str.length - 1 - i] = temp;
// }

// **************************************************************************************************************************************

// 	20.	Write a program to calculate the product of all numbers in an array using a loop.

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let multiple = 1

// for(let i = 0; i<arr.length ; i++){
//     multiple = multiple * arr[i]
// }

// console.log(multiple)

// **************************************************************************************************************************************

// 3. Arrays and Objects (10 Questions)
// 	21.	Write a program to merge two arrays and remove duplicate values.

// let arr1 = [1,2,3,4,5,6]
// let arr2 = [1,4,6,8,10,15,6,15]

// let merge = (arr1,arr2)=>{
//     let mergedarr = [].concat(arr1,arr2)
//     let uniqueval = new Set(mergedarr)
//   return uniqueval

// }

// console.log(merge(arr1,arr2))

// **************************************************************************************************************************************

// 	22.	Create a program to find the second largest number in an array.

// let arr = [1,2,5,45,52,4,5,54,56,5,4,5]

// let secondlargest = (arr)=>{

//   for(let i=0 ; i<arr.length; i++){
//     for(let j = i+1;j<arr.length ; j++){
//       if(arr[i]>arr[j]){
//         let temp = arr[i]
//         arr[i]= arr[j]
//         arr[j]=temp
//       }
//     }
// }

// return arr[arr.length-2]

// }

// console.log(secondlargest(arr))

// **************************************************************************************************************************************

// 	23.	Write a function that removes all falsy values from an array.

// let arr1 = [1,0,false , "", " ", -1 ,NaN, -0 , null , undefined ]

// let tryuthval = (arr)=>{
//     let newarr = []
//    for(let i = 0 ; i<arr.length ; i++){
//       if(Boolean(arr[i])){
//            newarr.push(arr[i])
//       }
//    }

// return newarr
// }

//  console.log(tryuthval(arr1))

// **************************************************************************************************************************************

// 	24.	Use .reduce() to find the total sum of numbers in an array.

// let arr =[1,2,3,4,5,6,7,8,9]

// let sum =  arr.reduce((acc,curr)=>(acc+curr),0)

// console.log(sum)

// **************************************************************************************************************************************

// 	25.	Write a program that rotates an array to the left by n positions.

// let arr =[1,2,3,4,5,6,7,8,9]
// let rotate = (arr,n)=>{
//      for(let i = 0  ; i<n ; i ++){
//     let first = arr[0]
//     for(let j = 0 ; j< arr.length-1; j++){
//        arr[j]=arr[j+1]
//     }
//     arr[arr.length-1]= first
//    }
// }

// rotate(arr,2)
// console.log(arr)

// let rotate2 =(arr,n)=>{

//   for(let i = 0 ; i<n ; i++){
//     let last = arr[arr.length - 1]
//     for(let j = arr.length-1 ; j>0 ; j--){
//       arr[j] = arr[j-1]
//     }
//     arr[0]=last
//   }
// }

// let arr1 =[1,2,3,4,5,6,7,8,9]
// rotate2(arr1,2)
// console.log(arr1)

// **************************************************************************************************************************************

// 	26.	Use .find() to locate the first even number in an array.

//  let arr = [56,15,6,164,894,6,5,1,468,46,1]

//  let ans = arr.find((i,index)=>{if(i%2 == 0){
//     return `The index of first first number is ${index}`
//  }})

//  console.log(ans)

// **************************************************************************************************************************************

// 	27.	Create a function that flattens a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).

// let arr = [1, [2, [3]]]

// let flatarr = (arr)=>{
//   return  arr.flat(Infinity)
// }

// console.log(flatarr(arr))

// **************************************************************************************************************************************

// 	28.	Write a program that counts how many times each element appears in an array.

 let arr = [1,2,2,2,2,3,3,3,35,5,5,1,1,1,1]

 let occurancecount = (arr)=>{
  let count = {}
   arr.forEach((i)=>{
      count[i] = (count[i]||0)+1
   })
   return count
 }

 console.log(occurancecount(arr))

// **************************************************************************************************************************************

// 	29.	Use .some() and .every() to check conditions on an array.

// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr.some((num) => num % 2 === 0))
// console.log(arr.every((num) => num % 2 === 0))

// **************************************************************************************************************************************

// 	30.	Sort an array of objects by a specific property.

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
//   { name: "David", age: 35 },
// ];

// let sortedUsers = (arr,type)=>{
//   for(let i = 0 ; i<arr.length ; i++){
//      for(let j = i+1; j<arr.length ; j++){
//       if(arr[i].type >arr[j].type ){
//           let temp = arr[i]
//           arr[i]= arr[j]
//           arr[j] = temp
//       }
//      }

//   }
// }
// let sortedUsers = (arr)=>{
//   for(let i = 0 ; i<arr.length ; i++){
//      for(let j = i+1; j<arr.length ; j++){
//       if(arr[i].age >arr[j].age ){
//           let temp = arr[i]
//           arr[i]= arr[j]
//           arr[j] = temp
//       }
//      }

//   }
// }

// let sortedarr = users.sort((a,b)=> a.age - b.age)

// console.log(sortedarr);

// **************************************************************************************************************************************

// 4. Functions and Closures (10 Questions)
// 	31.	Write a function that returns another function to calculate the power of a number.

// let fnc = (power)=>{
//    return  function multiply(n){
//        return Math.pow(n,power)
//     }
// }

// let power = fnc(3)
// console.log(power(5))

// **************************************************************************************************************************************

// 	32.	Create a recursive function to calculate the Fibonacci sequence up to n terms.

// **************************************************************************************************************************************

// 	33.	Write a function that uses closures to create a counter.

//  let fnc = ()=>{
//   let count = 0
//   return function (){
//       count++
//       return count
//   }
//  }

//  let counter = fnc()
//  console.log(counter())
//  console.log(counter())

// **************************************************************************************************************************************

// 	34.	Create a function that memoizes the result of a computation.

// let sum = (n)=>{
//     let sum = 0
//     for(let i = 0 ; i<= n ; i++){
//         sum += i
//     }

//     return sum
// }

// let memorize = (func)=>{
//     let cache = {}
//    return function (n){
//          if(n in cache){
//             return cache[n]
//          } else{
//             let result =  func(n)
//             cache[n] = result
//             return result
//          }
//    }
// }

// let cache = memorize(sum)

// console.time()
// console.log(cache(6))
// console.timeEnd()

// console.time()
// console.log(cache(6))
// console.timeEnd()

// **************************************************************************************************************************************

// 	35.	Write a function to debounce a button click event.

//  let serchbox = document.querySelector("#debounce")

//  serchbox.addEventListener("input",(e)=>{
//     setTimeout(() => {
//       console.log(e.target.value)
//    },1000);
//  })

//  let button = document.querySelector(".q35")

//  button.addEventListener("click",(e)=>{
//    setTimeout(() => {
//       console.log("Button clicked")
//    }, 1000);
//  })

// **************************************************************************************************************************************

// 	36.	Implement a function that throttles an API call.

// **************************************************************************************************************************************

// 	37.	Create a higher-order function that applies a callback to each element of an array.

// **************************************************************************************************************************************

// 	38.	Write a function that calculates the GCD (Greatest Common Divisor) of two numbers.

// **************************************************************************************************************************************

// 	39.	Create a function that accepts an array of functions and executes them sequentially.

// let fnc1=()=>{
//     return "From function 1"
// }
// let fnc12=()=>{
//     return "From function 2"
// }

// let funcarr = [fnc1,fnc12]

// funcarr.forEach((elem)=>{
//     console.log(elem())
// })

// **************************************************************************************************************************************

// 	40.	Write a function to curry a simple mathematical operation.

// let add = (a) => {
//   return function (b) {
//     return a + b;
//   };
// };

// let val1 = add(5)
// console.log(val1(27))

// **************************************************************************************************************************************

// 5. Strings and Regular Expressions (10 Questions)
// 	41.	Write a program to reverse the words in a sentence but not the sentence itself.

// let str = "Swach bharat ka irada kar liya hamne"

// let wordreverse =(str)=>{
//   let split = str.split(" ")
//   let ans = []
//   for(let i = 0; i< split.length; i++){
//     ans.push(split[i]?.split("")?.reverse()?.join(""))
//   }
//   return ans.join(" ")
// }

// console.log(wordreverse(str))

// **************************************************************************************************************************************

// 	42.	Use a regex to validate if a string is a valid email address.

// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// let mail = "parmanand@gmail.com"

// if(regex.test(mail)){
//   console.log("Its a valid email")
// }else{
//   console.log("Its an invalid email")
// }

// **************************************************************************************************************************************

// 	43.	Create a function to check if a string contains only digits.

// let checknum = (str) => {
//   if (isNaN(Number(str))) {
//     return false;
//   } else {
//     return true;
//   }
// };

// let str = "165436a5163"

// console.log(checknum(str))

// **************************************************************************************************************************************

// 	44.	Write a function to extract all numbers from a string and return them as an array.

// let onlynum = (str) => {
//   let strarr = str.split("");
//   let numarr = [];
//   strarr.forEach((element) => {
//     if (isNaN(Number(element))) {
//     } else {
//       numarr.push(Number(element));
//     }
//   });

//   return numarr;
// };

// let str = "as5d15v1d6f5v1sdf6vdf5bfs"

// console.log(onlynum(str))

// **************************************************************************************************************************************

// 	45.	Use .match() to find all occurrences of a word in a string.

// let str ="bgsdvbfdkjvhb vg cvsnvdhjgvfsdhjvgfcd "

// console.log(str.match(/v/g))

// **************************************************************************************************************************************

// 	46.	Create a program to capitalize the first letter of each word in a string.

// let pascal = (str)=>{
//    let copystr = str.split(" ")
//    let str2 = []
//     for(let i = 0 ; i< copystr.length ; i++){
//          str2.push(copystr[i].charAt(0).toUpperCase() + copystr[i].slice(1))
//     }

//   return str2.join(" ")

// }

// let str = "dsf rsf df sf sdfg sdg sdg vsd v sdfvfgv"

// console.log(pascal(str))

// **************************************************************************************************************************************

// 	47.	Write a function that removes duplicate characters from a string.

// let uniquestr = (str)=>{

// }

// let str ="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// console.log(uniquestr(str))

// **************************************************************************************************************************************

// 	48.	Use a regex to replace multiple spaces with a single space.

//  let str = "Swach            bharat ka                irada         kar                             liya            hamne "
//  console.log(str)

// let str2 = str.replace(/\s\s+/g, ' ')

// console.log(str2)

// **************************************************************************************************************************************

// 	49.	Write a function to check if a string is an anagram of another string.

// let anagram = (str1,str2)=>{
//   if(str1.includes(str2)){
//     return true
//   }else{
//     return false
//   }
// }

// let str1 = "oyo"
// let str2 = "fghbghbn"

// console.log(anagram(str2,str1))

// **************************************************************************************************************************************

// 	50.	Create a function to count the frequency of each word in a string.

// **************************************************************************************************************************************

// 6. Intermediate DOM Manipulation (10 Questions)
// 	51.	Write a script to dynamically create 10 buttons on a webpage.

// for(let i=1; i<=10 ; i++){
//     let button =  document.createElement("button")
//     button.innerHTML = `Button ${i}`
//     button.style.marginRight = "20px"
//    document.querySelector("body").appendChild(button)
// }

// **************************************************************************************************************************************
// 	52.	Add an event listener to a button that logs its id when clicked.

// const btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//    console.log(btn.id)
// })

// **************************************************************************************************************************************

// 	53.	Write a program to change the background color of a <div> on hover.

// const colordiv = document.querySelector(".change-color")

// colordiv.addEventListener("mouseover",()=>{
//   colordiv.classList.toggle("active")
// })

// **************************************************************************************************************************************

// 	54.	Dynamically add a CSS class to an element when a button is clicked.

// const button = document.querySelector(".q54btn")
// let div = document.querySelector(".q54")

// button.addEventListener("click",()=>{
//   div.classList.toggle("active")
// })

// **************************************************************************************************************************************

// 	55.	Create a function to toggle the visibility of an element.

// let visibility = (elem)=>{
//     return elem.classList.toggle("visible")
// }

// let list = document.querySelector(".list")

// console.log(visibility(list))

// **************************************************************************************************************************************

// 	56.	Write a program to count the number of <p> tags on a page.

// let p = document.querySelectorAll("p")

// console.log(p.length)

// **************************************************************************************************************************************

// 	57.	Implement a function to disable all input fields on a form.

// let form = document.querySelector("#myform")

// let inputs = form.querySelectorAll("input, textarea ,select, button")

// inputs.forEach((elem)=>{
//    elem.disabled =true
// })

// **************************************************************************************************************************************
// 	58.	Write a program to clone an element and append it to the DOM.

// let div = document.querySelector(".q54")

// let cloneddiv = div.cloneNode(true)

// document.querySelector("body").appendChild(cloneddiv)

// **************************************************************************************************************************************

// 	59.	Add a click event to a list of items and display the clicked item’s text.

// const list = document.querySelector(".list")
// let listitem = list.querySelectorAll("li")

// listitem.forEach((item)=>{
//   item.addEventListener("click",()=>{
//     console.log(item.innerHTML)
//   })
// })

// **************************************************************************************************************************************

// 	60.	Create a program to validate a form using JavaScript.

// **************************************************************************************************************************************

// 7. Intermediate Algorithms (10 Questions)
// 	61.	Write a function to merge two sorted arrays into one sorted array.

// let arr4 = [1, 2, 3, 4, 5, 6];
// let arr5 = [1,2,3,4,5,6,7];

// let mergedarr = (arr1, arr2) => {
//   let arr3 = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length || j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       arr3.push(arr1[i]);
//       i++;
//     } else {
//       arr3.push(arr2[j]);
//       j++;
//     }
//   }

//   return arr3;
// };

// console.log(mergedarr(arr4, arr5));

// **************************************************************************************************************************************

// 	62.	Implement a binary search algorithm.

// let arr = [1, 5, 9, 10, 15, 19, 23, 26, 28, 30];

// let binarySearch = (arr, num) => {
//   let s = 0;
//   let e = arr.length - 1;
//   while (s < e) {
//     let mid = Math.floor((s + e) / 2);
//     if (arr[mid] == num) {
//       return arr[mid];
//       return true;
//     } else if (arr[mid] > num) {
//       e = mid-1;
//     } else {
//       s = mid+1;
//     }
//   }
//   return false
// };

// console.log(binarySearch(arr,15))

// console.log()

// **************************************************************************************************************************************

// 	63.	Write a function to check if two strings are one edit away.

// **************************************************************************************************************************************

// 	64.	Create a function that finds the longest common prefix in an array of strings.

// **************************************************************************************************************************************

// 	65.	Write a program to check if a string can be rearranged into a palindrome.

// **************************************************************************************************************************************

// 	66.	Create a function to find the intersection of two arrays.

// let arr1 = [1,2,3,4,5,6]
// let arr2 = [5,6,7,8,9,10]



// let intersection = (arr1,arr2)=>{
//     let ansarr = []
//     for(let i = 0 ; i< arr2.length ; i++){
//       if(arr1.includes(arr2[i])){
//         ansarr.push(arr2[i]) 
//       }

//     }
//   return ansarr
// }



// console.log(intersection(arr1,arr2))

// **************************************************************************************************************************************

// 	67.	Implement the Sieve of Eratosthenes to find prime numbers up to n.

// **************************************************************************************************************************************

// 	68.	Write a program to generate all subsets of a given array.

// let arr = [1,2,3,4,5]

// let subSets = (arr)=>{
//     let result = []
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i ; j <arr.length ; j++){
//             result.push(arr.slice(i,j+1))
//         }
//     }
//     return result
// }


// console.log(subSets(arr))

// **************************************************************************************************************************************

// 	69.	Create a function to calculate the power of a number iteratively.

// let pow = (num,pow)=>{
//     let result = 1
//     for(let i = 0 ; i<pow ; i++){
//         result = result*num
//     }
//     return result
// }

// console.log(pow(2,4))
// **************************************************************************************************************************************

// 	70.	Implement a function to sort an array using the quicksort algorithm.




// **************************************************************************************************************************************

// 8. Advanced Error Handling (10 Questions)
// 	71.	Write a program to handle a division by zero error.

//   let fnc = (num1,num2)=>{
//     try {
//         if(num1 ==0 || num2 == 0){
//           throw Error("Zero is a invalid number for devsion")
//         } else{
//           return  (num1/num2).toFixed(2)
//         }

//     } catch (error) {
//       return  error.message
//     }
//   }

// console.log(fnc(5,3))

// **************************************************************************************************************************************

// 	72.	Use try...catch to log an error message for invalid JSON parsing.

//  let isValidJson = (jsonstr)=>{
//      try {
//         let obj =   JSON.parse(jsonstr)
//         return obj
//      } catch (error) {
//           return "Not a valid json"
//      }
//  }

//  const validJSONString = '{"name": "John", "age": 30}';
// const invalidJSONString = '{"name": "John", "age": }';

// console.log(isValidJson(invalidJSONString))

// **************************************************************************************************************************************
//
// 	73.	Write a function to validate user input and throw a custom error if invalid.

// let Capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let small = 'abcdefghijklmnopqrstuvwxyz'

// let userInput = (str)=>{
//   try {
//         let
//          if(str.length > 0 && str.includes(Capital) && str.includes(small)){
//             return true
//          } else{
//           throw Error ("Invalid input")
//          }
//   } catch (error) {
//     return error.message
//   }
// }

// console.log(userInput("Parmanand"))

// **************************************************************************************************************************************

// 	74.	Create a program to handle a failed promise using .catch().

// let data = fetch("https://picsum.photos/seed/picsum/2000")
// .then((res) => res.json())
// .then((data) => console.log( "Data",data))
// .catch((err) => console.log("Error",err));

// **************************************************************************************************************************************

// 	75.	Use finally to log a cleanup message after a promise resolves or rejects.

// let data = fetch("https://picsum.photos/seed/picsum/2000")
// .then((res) => res.json())
// .then((data) => console.log( "Data",data))
// .catch((err) => console.log("Error",err)).finally(() => console.log("Cleanup"))

// **************************************************************************************************************************************

// 	76.	Implement a function to retry a failed API call up to 3 times.

// **************************************************************************************************************************************

// 	77.	Write a function that uses try...catch inside an async function.

// let datacall = async () => {
//   try {
//     let data = await fetch("https://picsum.photos/seed/picsum/200/300");
//     console.log(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// };

// datacall();

// **************************************************************************************************************************************

// 	78.	Create a program to handle and log syntax errors dynamically.

// **************************************************************************************************************************************

// 	79.	Write a function to ensure a variable is defined before using it.

//  let A 

//  let checkDeclaration = (variable) => {
//    if(typeof variable != "undefined"){
//      console.log("A is defined")
//    } else{
//      console.log("A is not defined")
//    }
//  }



//  checkDeclaration(A)
  

// **************************************************************************************************************************************

// 	80.	Use error handling to check if a file exists before reading it.

// **************************************************************************************************************************************

// 9. Advanced Array and Object Manipulation (10 Questions)
// 	81.	Write a function that groups an array of objects by a specific property.

// **************************************************************************************************************************************

// 	82.	Use .map() to transform an array of objects into a new format.

// let data = [{name: "Parmanand", age: 22}, {name: "Rahul", age: 23}, {name: "Sahil", age: 25}, {name: "Rohit", age: 24}, {name: "Vishal", age: 26}]

// let changedData = data.map((item)=>{
//     return {name: item.name, age: item.age, gender: "Male"}
// })

// console.log(changedData)

// **************************************************************************************************************************************

// 	83.	Write a program to deep clone an object without using external libraries.

// let data = [{name: "Parmanand", age: 22}, {name: "Rahul", age: 23}, {name: "Sahil", age: 25}, {name: "Rohit", age: 24}, {name: "Vishal", age: 26}]

// let deepClone = JSON.parse(JSON.stringify(data))
// console.log(deepClone)

// **************************************************************************************************************************************

// 	84.	Create a function that merges multiple arrays into a single unique array.

// let arr1 = [1,2,5,6,8,7,9,2]
// let arr2 = [1,4,6,8,10,15,6,15]
// let arr3 = [5,4,848,456,4,6,3,135,51,54,5]

// let mergearr = (...arg)=>{
//     let ansarr = []
//     for(let i =0 ; i<arg.length; i++){
//         ansarr.push(...arg[i])
//     }

//     return [...new Set(ansarr)]
// }

// console.log(mergearr(arr1,arr2,arr3))

// **************************************************************************************************************************************

// 	85.	Write a function to count the occurrences of properties in an array of objects.

// let data = [{name: "Parmanand", age: 22}, {name: "Rahul", age: 23}, {name: "Sahil", age: 25}, {name: "Rohit", age: 24}, {name: "Vishal"}]

// let propertyCount = (obj , property )=>{
//     console.log(obj,property)
// }

// propertyCount(data,)

// **************************************************************************************************************************************

// 	86.	Implement a function to sort an array of objects by multiple properties.

// **************************************************************************************************************************************

// 	87.	Write a function to create a nested object from a flat array of key-value pairs.

// **************************************************************************************************************************************

// 	88.	Use .reduce() to transform an array into an object with grouped values.

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
//   { name: "David", age: 35 },
// ];

// let result = users.reduce((acc,person)=>{
//     acc.push({name:person.name , age : person.age , grouped: true})
//     return acc
// },[])

// console.log(result)

// **************************************************************************************************************************************

// 	89.	Create a function to find the difference between two arrays of objects.

// **************************************************************************************************************************************

// 	90.	Write a function to filter and transform an array of objects in a single step.

// let users = [
//       { name: "Alice", age: 25 },
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 20 },
//       { name: "David", age: 35 },
//     ];

//    let result = users.reduce((acc,person)=>{
//      if(person.age > 20){
//            acc.push({name : person.name , age : person.age, discount : 20})
//      }
//      return acc
//    },[])

// console.log(result)

// **************************************************************************************************************************************

// 10. Real-World Use Cases (10 Questions)
// 	91.	Create a simple program that fetches and displays user da ta from a mock API.

// let users = fetch("https://fakestoreapi.com/users").then((res)=> res.json(res)).then((data)=> console.log(data)).catch((err)=> console.log(err))

// **************************************************************************************************************************************

// 	92.	Write a program to simulate a shopping cart with add, remove, and total cost features.

// **************************************************************************************************************************************

// 	93.	Implement a simple pagination system for an array of data.

// **************************************************************************************************************************************

// 	94.	Write a program to dynamically update a chart using JavaScript.

// **************************************************************************************************************************************

// 	95.	Create a program to search for and highlight specific text on a webpage.

// **************************************************************************************************************************************

// 	96.	Write a program to simulate a basic stopwatch with start, stop, and reset functionality.

// **************************************************************************************************************************************

// 	97.	Implement a function to validate password strength based on rules.

// let checkStrength = (password) => {
//   let regex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   if (regex.test(password)) {
//     return "Password is strong";
//   } else {
//     return "Password is weak";
//   }
// };

// let password = "Abacd@12345"

// console.log(checkStrength(password))

// **************************************************************************************************************************************

// 	98.	Create a simple image slider with next/previous buttons.

// **************************************************************************************************************************************

// 	99.	Write a program to sort and display data fetched from an API.

// const getData = async()=>{
//     const res = await fetch("https://fakestoreapi.com/users")
//     const data = await res.json()
//     let sortedData = data.sort((a, b) => a.email.localeCompare(b.email))
//     return sortedData
// }

// console.log(getData().then((res=> console.log(res))))
//  let sortedData =  data?.sort((a,b)=>  a.email - b.email)

//  console.log(sortedData)

// **************************************************************************************************************************************

// 	100.	Create a program that automatically saves form data to localStorage.

// const form = document.querySelector("#q100");

// const saveFormData = () => {
//     const savedData = JSON.parse(localStorage.getItem("formData")) || [];

//     const newForm = {
//         name: form.name.value,
//         email: form.email.value,
//     };

//     savedData.push(newForm);
//     localStorage.setItem("formData", JSON.stringify(savedData));
//     form.name.value =""
//     form.email.value =""
// };

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     saveFormData();
// });

// **************************************************************************************************************************************

// let questions =[36,37,38,47,50,60,63,64,65,67,70,76,78,80,81,85,86,87,89,92,93,94,95,96,98]
// console.log(questions.length)