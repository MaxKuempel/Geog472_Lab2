// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user
//var sentence = "How many vowels do you think are in this one?";
const vowels = ["a", "e", "i", "o", "u"]


function VowelCounter(sentence) {
vowel_count = 0
vowel_index = 0
for(let i = 0; i < vowels.length; i++){

for (let i = 0; i < sentence.length; i++) {
if (sentence[i] == vowels[vowel_index])
vowel_count++
 // console.log(sentence[i] == "a")
}
vowel_index++
}
return "There are " + vowel_count + " vowels in your sentence"
}

console.log(VowelCounter("How many vowels do you think are in this one?"))



