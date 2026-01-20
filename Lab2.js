// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user
//var sentence = "How many vowels do you think are in this one?";

let sentence = document.getElementById(input)


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
  document.getElementById("first").innerHTML = OddAddition(first)
}
