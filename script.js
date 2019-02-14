// generate a word for the user to guess
var wordBank = ["hello", "banana", "candy"];
var randomNumber = Math.random();
var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
var randomArrayWord = wordBank[randomWholeNumber]

console.log(randomArrayWord);