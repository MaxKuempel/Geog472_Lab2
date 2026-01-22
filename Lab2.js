// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user
//var sentence = "How many vowels do you think are in this one?";

function VowelCounter(sentence) {


vowel_count = 0
vowel_index = 0
const vowels = ["a", "e", "i", "o", "u"]
for(let i = 0; i < vowels.length; i++){

for (let i = 0; i < sentence.length; i++) {
if (sentence[i] == vowels[vowel_index])
vowel_count++
 
}
vowel_index++
}
 document.getElementById("vowels").innerHTML = "There are " + vowel_count + " vowels in the sentence \"" + sentence +"\""
}

// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each.
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
console.log("constants loaded!")



function IsEven(input){
  
  if ((input % 2) == 1) {
    return false
  }
  else{
return true
  }
  
}

function OddAddition(input)
{
even_counter = 0
  for(let i = 0; i < input.length; i++)
  {
    if(IsEven(input[i])) {
even_counter ++
    }
  }

if(even_counter == 0){
product = input[0]
   for(let i = 1; i < input.length; i++){
    product = product * input[i]
  }
  return product
}
else {
    sum = 0
  for(let i = 0; i <input.length; i++){
    sum = sum + input[i]
  }
  return sum
}

}

function first_add(){
  document.getElementById("first_dis").innerHTML = OddAddition(first)
  console.log(OddAddition(first))
}
window.onload = function() {
  first_add()
};

function testing(){
  document.getElementById("test").innerHTML = 1 + 1
}



// Question 3 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8,
//Fizz ....
function Multiple3(input){
  if ((input % 3)==0){
    return true
  }
  else{
    return false
  }
}

function Multiple5(input){
  if ((input % 5)==0){
    return true
  }
  else{
    return false
  }
}

function FizzBuzz(){
var list = []
for(let i = 0; i < 100; i++) {
  list[i] = i+1
}
for(let j = 0; j < list.length; j++){
  if(Multiple3(list[j])&&Multiple5(list[j])){
    list[j]= "fizzbuzz"
  }
  else if (Multiple3(list[j])) {
    list[j]= "fizz"
  } 
  else if (Multiple5(list[j])) {
    list[j] = "buzz"
  }
  else{
    list[j]=list[j]
  }
}

console.log(list)

var fizzbuzz_out = document.getElementById("fizzbuzz")
fizzbuzz_out.innerHTML = list

}

window.onload = function initilize() {
  FizzBuzz();
  car.start;
}

// Question 4 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car
//started!" or something similar
// Call the start method

var car = {
  make: "Kia",
  model: "Soul",
  year: 2015,
  color: "Neon-Green", 
  start: function(){
    console.log("Vroom Vroom!");
    
  }
}

// Question 5 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et
//al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city
//names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data
//is not created within them, this is different from the example in Chapter
//2)
// The function should take in the arrays, combine them into an HTML
//FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"
var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']

function cities_create(input){
  document.createElement
}