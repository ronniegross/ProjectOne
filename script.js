// generate a word for the user to guess
var wordBank = ["hello", "banana", "candy"];
var randomNumber = Math.random();
var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
var randomArrayWord = wordBank[randomWholeNumber];

// generate a series of underlined divs that corresponds to the length of the randomly generated word

var letterBox = $( ".underlinedLetterArea" ).append("<div class='letterBox'></div>");
console.log(letterBox)

