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


var head = document.querySelector("#head");
var body = document.querySelector("#body");
var leftArm = document.querySelector("#left-arm");
var rightArm = document.querySelector("#right-arm");
var leftLeg = document.querySelector("#left_leg");
var rightLeg = document.querySelector("#right_leg");


var svg = document.getElementById("hangmanSVG");


var wrongGuesses = [];
var rightGuesses = [];
var totalGuesses = 6;
var totalWins = 0;
var totalLosses = 0;
// change cursor to pointer
$(".alphabetLetter").css( 'cursor', 'pointer' );

// disable a letter if it's been clicked once (instead of on click, use one click)
svg.addEventListener("load", function() {
    $(".alphabetLetter").one( "click", function( event ) {
        
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
                    rightGuesses.push(event.currentTarget.innerHTML);
                    if (rightGuesses.length == randomArrayWordLength) {
                        $( "#title" ).html("congratulations!!! u win!!!")
                        $(".alphabetLetter").css( "color", "#AEAEAE");
                        $(".playAgain").css( "opacity", "1");
                        var allLetters = document.getElementsByClassName("alphabetLetter")
                        for (let i = 0; i < allLetters.length; i++) {
                            allLetters[i].setAttribute("disabled", true);
                        }
                        $( ".wins" ).html("7 ");

                        // $(".alphabetLetter").css( "opacity", "0");
                    }
                }
            }   
        // create functionality that counts down from 6 to determine what body part to reveal 
        } else { 
            wrongGuesses.push(event.currentTarget.innerHTML);
            totalGuesses = totalGuesses - 1;
            // onClick="this.disabled=true";
            if (wrongGuesses.length == 1) {
                head.setAttribute("style", "opacity: 1");
            } else if (wrongGuesses.length == 2) {
                body.setAttribute("style", "opacity: 1");
            } else if (wrongGuesses.length == 3) {
                leftArm.setAttribute("style", "opacity: 1");
            } else if (wrongGuesses.length == 4) {
                rightArm.setAttribute("style", "opacity: 1");
            } else if (wrongGuesses.length == 5) {
                leftLeg.setAttribute("style", "opacity: 1");
            } else if (wrongGuesses.length == 6) {
                rightLeg.setAttribute("style", "opacity: 1");
                $( "#title" ).html("sorry that u suck. try again loser.")
                $(".alphabetLetter").css( "color", "#AEAEAE");
                // $(".playAgain").css( "background-color", "white");
                $(".playAgain").css( "opacity", "1");
            } 
        };

    })
});

// disable letters once user has won or lost a game








