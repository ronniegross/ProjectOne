// generate a word for the user to guess
var wordBank = ["banana"];
var randomNumber = Math.random();
var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
var randomArrayWord = wordBank[randomWholeNumber];


// get the length of the randomly generated word
var randomArrayWordLength = randomArrayWord.length;

// create a series of boxes that corresponds to that length
for (let i = 0; randomArrayWordLength > i; i++) {
    var letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
    $( ".letterArea" ).append(letterBox);
}

// have the letter that was clicked on appear in a div 
let addLetter = () => {
    $(".letterBox").append(event.currentTarget.innerHTML)
}

console.log(randomArrayWord)

var svg = document.getElementById("hangmanSVG")
svg.addEventListener("load", function() {
    $(".alphabetLetter").on( "click", function( event ) {
        // when user selects a letter, grey out the letter in the alphabet list
        $(event.delegateTarget).css( "color", "#AEAEAE");
        // see if the string word contains the letter that was clicked
        // index of the location in randomArrayWord where letter is located
        var includesLetterIndex = randomArrayWord.indexOf(event.currentTarget.innerHTML); 
        if (randomArrayWord.includes(event.currentTarget.innerHTML)) {
            // need to target the exact location(s) in the word where the letter is located and add letter to that location
            for (let i = 0; i < randomArrayWordLength; i++) {
                if (randomArrayWord[i] == event.currentTarget.innerHTML) {
                    var letterInBox =  `<p>${event.currentTarget.innerHTML}</p>`;
                    $("#box"+i).append(letterInBox);
                }
            }   
        } else { 
                var head = document.getElementById("head")
                head.setAttribute("display", "none")
                console.log("butts")
            };
    })
});


