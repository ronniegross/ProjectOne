// generate a word for the user to guess
var wordBank = ["hey", "banana", "candy"];
var randomNumber = Math.random();
var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
var randomArrayWord = wordBank[randomWholeNumber];

// generate a series of underlined divs that corresponds to the length of the randomly generated word
// var letterBox = $( ".letterArea" ).append( "<div class='letterBox'><div class='underlinedLetterArea'></div></div>" );
var letterBox = "<div class='letterBox'><div class='underlinedLetterArea'></div></div>";

// get the length of the randomly generated word
var randomArrayWordLength = randomArrayWord.length;

// create a series of boxes that corresponds to that length
for (let i = 0; randomArrayWordLength > i; i++) {
    $( ".letterArea" ).append(letterBox);
}

// when user selects a letter, grey out the letter in the alphabet list

$(".alphabetLetter").on( "click", function( event ) {
    $(event.delegateTarget ).css( "color", "#AEAEAE");
    $(".letterBox").append("a")
  });

  // have the letter that was clicked on appear in a div 