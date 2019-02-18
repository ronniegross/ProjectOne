// generate a word for the user to guess
let generateRandomWord = () => {
    var wordBank = ["banana", "cat", "hello"];
    var randomNumber = Math.random();
    var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
    var randomArrWord = wordBank[randomWholeNumber];
    // console.log(randomArrWord);
    return randomArrWord;

    // // get the length of the randomly generated word
    // var randomArrWordLength = randomArrWord.length;

    // // create a series of boxes that corresponds to that length
    // for (let i = 0; randomArrWordLength > i; i++) {
    //     var letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
    //     $( ".letterArea" ).append(letterBox);
    // }

    
}

// you always get a random word from the array 
var randomArrayWord = generateRandomWord();

console.log(randomArrayWord);

// alphabet problems -->

// create a function that disables clicked letters once they've been clicked
// var disableOneLetter = () => {
    // $(".alphabetLetter").on( "click", function( event ) {
            
        // when user selects a letter, grey out the letter in the alphabet list
        // $(event.delegateTarget).css( "opacity", "0");

        // $(event.delegateTarget).css( "color", "#AEAEAE");


        // disable letter
        // $(event.delegateTarget).css( "color", "#AEAEAE");
        // $(event.delegateTarget).disabled = "disabled";
        // currentLetter = document.getElementsByClassName("alphabetLetter");


        // currentLetter = $(event.delegateTarget);
        // console.log(currentLetter);
        // currentLetter.setAttribute("disabled", true);
//     })
// }




// create a function that disables all letters once game ends

// create a function that enables letters once new game starts





// function that creates letter Divs -->

// let letterDiv = () => {

//     // have the letter that was clicked on appear in a div *** never used
//     let addLetter = () => {
//         $(".letterBox").append(event.currentTarget.innerHTML); 
//     }
//     // get the length of the randomly generated word
//     var randomArrayWordLength = randomArrayWord.length;

//     // create a series of boxes that corresponds to that length
//     var letterBox = "";
//     for (let i = 0; randomArrayWordLength > i; i++) {
//         letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
//         $( ".letterArea" ).append(letterBox);
//     }
// }

// letterDiv();


// have the letter that was clicked on appear in a div *** never used
let addLetter = () => {
    $(".letterBox").append(event.currentTarget.innerHTML); 
}
// get the length of the randomly generated word
var randomArrayWordLength = randomArrayWord.length;

// create a series of boxes that corresponds to that length
var letterBox = "";
for (let i = 0; randomArrayWordLength > i; i++) {
    letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
    $( ".letterArea" ).append(letterBox);
}

// parts of the svg hangman 
var head = document.querySelector("#head");
var body = document.querySelector("#body");
var leftArm = document.querySelector("#left-arm");
var rightArm = document.querySelector("#right-arm");
var leftLeg = document.querySelector("#left_leg");
var rightLeg = document.querySelector("#right_leg");

// variable for the svg hangman 
var svg = document.getElementById("hangmanSVG");

// array for the amount of wrong guesses
var wrongGuesses = [];
// array for the amount of right guesses
var rightGuesses = [];
// array for the amount of wrong guesses the user starts with
var totalGuesses = 6;
// array for the amount of wins the player has
var totalWins = 0;
// array for the amount of losses the player has
var totalLosses = 0;

// change cursor to pointer
$(".alphabetLetter").css( 'cursor', 'pointer' );

// whole game logic
let setUpGame = () => {
    // wait for the svg to load before game begins
    svg.addEventListener("load", function() {

        // when user clickes on a letter with the class of alphabet letter
        $(".alphabetLetter").on( "click", function( event ) {
            
            // // when user selects a letter, grey out the letter in the alphabet list
            $(event.delegateTarget).css( "color", "#AEAEAE");

            // // creates a an array for the letter that has been selected
            // var letterSelected = [];

            // // pushes the letter that was selected into that array
            // letterSelected.push(event.currentTarget.innerHTML);

            // // console logs that array
            // console.log(letterSelected);

            // // disables any element in this array

            var selectedLetter = $(event.delegateTarget);

            selectedLetter.prop('disabled', true);

            // $(event.delegateTarget).prop('disabled', true);

            console.log(selectedLetter);

            // $(function () {
            //     $(".alphabetLetter").keyup(function (event) {
            //         if ($(this).val() == '') {
            //             $(event.delegateTarget).prop('disabled', true);
            //         } else {
            //             $(event.delegateTarget).prop('disabled', false);
            //         }
            //     });
            // });


            // document.getElementsByClassName("alphabetLetter").contentEditable = "false";

            // disable button after it has been selected 
            // disableOneLetter();

            // $(event.delegateTarget).disabled = "disabled";
            // currentLetter = document.getElementsByClassName("alphabetLetter");
            // currentLetter.setAttribute("disabled", true);

            // see if the string word contains the letter that was clicked

            // index of the location in randomArrayWord where letter is located
            var includesLetterIndex = randomArrayWord.indexOf(event.currentTarget.innerHTML); 
            if (randomArrayWord.includes(event.currentTarget.innerHTML)) {

                // need to target the exact location(s) in the word where the letter is located and add letter to that location
                for (let i = 0; i < randomArrayWord.length; i++) {
                    if (randomArrayWord[i] == event.currentTarget.innerHTML) {

                        // creates a p tag with the letter selected 
                        var letterInBox =  `<p>${event.currentTarget.innerHTML}</p>`;

                        // inserts that p tag into the corresponding box
                        $("#box"+i).append(letterInBox);

                        // adds the letters put into boxes into array 
                        rightGuesses.push(event.currentTarget.innerHTML);
                        // return rightGuesses;

                        // checks to see if the array of correctly guessed letters matches the length of the randomly generated word
                        if (rightGuesses.length == randomArrayWordLength) {

                            // changes title 
                            $( "#title" ).html("congratulations!!! u win!!!")

                            // changes the colors of the alphabet buttons 
                            // $(".alphabetLetter").css( "color", "#AEAEAE");

                            // changes opacity to of play again button
                            $(".playAgain").css( "opacity", "1");

                            // creates a variable targeting all alphabet buttons
                            var allLetters = document.getElementsByClassName("alphabetLetter");
                            // for (let i = 0; i < allLetters.length; i++) {
                            //     allLetters[i].setAttribute("disabled", true);
                            //     // $(".alphabetLetter").css( 'cursor', 'none' );
                            // }

                            // adds a win to the totalWinns variable
                            totalWins = totalWins + 1;

                            // changes wins number to the value of the variable totalWins
                            $( ".wins" ).html(`${totalWins} `);

                            // changes games to game if total games won is 1
                            $( ".gamesWon" ).html('game');

                            // if total wins is greater than one, changes game back to games
                            if (totalWins > 1) {
                                $( ".gamesWon" ).html('games');
                            }
                    
                            // changes color of all letters to grey
                            $(".alphabetLetter").css( "color", "#AEAEAE");

                            // returns the variable total wins
                            return totalWins;
                            // $(".alphabetLetter").css( "opacity", "0");
                        }
                    }
                }   
            // create functionality that counts down from 6 to determine what body part to reveal 
            } else { 

                // pushes incorrectly guessed letter into wrongGuesses array
                wrongGuesses.push(event.currentTarget.innerHTML);

                // subtracts from the variable total guesses by one
                totalGuesses = totalGuesses - 1;
                // onClick="this.disabled=true";

                // shows head
                if (wrongGuesses.length == 1) {
                    head.setAttribute("style", "opacity: 1");
                
                // shows body 
                } else if (wrongGuesses.length == 2) {
                    body.setAttribute("style", "opacity: 1");

                // shows left arm
                } else if (wrongGuesses.length == 3) {
                    leftArm.setAttribute("style", "opacity: 1");
                
                // shows right arm
                } else if (wrongGuesses.length == 4) {
                    rightArm.setAttribute("style", "opacity: 1");

                // shows left leg
                } else if (wrongGuesses.length == 5) {
                    leftLeg.setAttribute("style", "opacity: 1");

                // shows right leg + player loses the game 
                } else if (wrongGuesses.length == 6) {
                    
                    // disables whole alphabet
                    // function disable() {
                    //     document.getElementsByClassName("alphabetLetter").disabled = true;
                    //     }
                    // disable();

                    //shows right leg
                    rightLeg.setAttribute("style", "opacity: 1");

                    // changes title 
                    $( "#title" ).html("sorry that u suck. try again loser.")

                    // changes the color of the alphabet buttons (disabled)
                    $(".alphabetLetter").css( "color", "#AEAEAE");
                    // $(".playAgain").css( "background-color", "white");

                    // changes play again button opacity to full
                    $(".playAgain").css( "opacity", "1");

                    // adds to the variable total losses by one
                    totalLosses = totalLosses + 1;

                    // changes the total of losses to totalLosses variable 
                    $( ".lose" ).html(`${totalLosses} `);

                    // changes games in games lost to game
                    $( ".gamesLost" ).html('game');

                    // if user has lost more than one game, game changes to games
                    if (totalLosses > 1) {
                        $( ".gamesLost" ).html('games');
                    }

                    // return the amount of total losses
                    return totalLosses;
                } 
            };
        })
    });
}




// ***** really messed up code idk if it works

// checks to see if the array of correctly guessed letters matches the length of the randomly generated word
// if (rightGuesses.length == randomArrayWordLength) {

//     // changes title 
//     $( "#title" ).html("congratulations!!! u win!!!")

//     // changes the colors of the alphabet buttons 
//     // $(".alphabetLetter").css( "color", "#AEAEAE");

//     // changes opacity to of play again button
//     $(".playAgain").css( "opacity", "1");

//     // creates a variable targeting all alphabet buttons
//     var allLetters = document.getElementsByClassName("alphabetLetter");
//     // for (let i = 0; i < allLetters.length; i++) {
//     //     allLetters[i].setAttribute("disabled", true);
//     //     // $(".alphabetLetter").css( 'cursor', 'none' );
//     // }

//     // adds a win to the totalWinns variable
//     totalWins = totalWins + 1;

//     // changes wins number to the value of the variable totalWins
//     $( ".wins" ).html(`${totalWins} `);

//     // changes games to game if total games won is 1
//     $( ".gamesWon" ).html('game');

//     // if total wins is greater than one, changes game back to games
//     if (totalWins > 1) {
//         $( ".gamesWon" ).html('games');
//     }
//     // returns the variable total wins
//     return totalWins;
//     // $(".alphabetLetter").css( "opacity", "0");
// }   else { 

//         // pushes incorrectly guessed letter into wrongGuesses array
//         wrongGuesses.push(event.currentTarget.innerHTML);

//         // subtracts from the variable total guesses by one
//         totalGuesses = totalGuesses - 1;
//         // onClick="this.disabled=true";

//         // shows head
//         if (wrongGuesses.length == 1) {
//             head.setAttribute("style", "opacity: 1");
    
//         // shows body 
//         } else if (wrongGuesses.length == 2) {
//             body.setAttribute("style", "opacity: 1");

//         // shows left arm
//         } else if (wrongGuesses.length == 3) {
//             leftArm.setAttribute("style", "opacity: 1");
    
//         // shows right arm
//         } else if (wrongGuesses.length == 4) {
//             rightArm.setAttribute("style", "opacity: 1");

//         // shows left leg
//         } else if (wrongGuesses.length == 5) {
//             leftLeg.setAttribute("style", "opacity: 1");

//         // shows right leg + player loses the game 
//         }   else if (wrongGuesses.length == 6) {
        
//             //shows right leg
//             rightLeg.setAttribute("style", "opacity: 1");

//             // changes title 
//             $( "#title" ).html("sorry that u suck. try again loser.")

//             // changes the color of the alphabet buttons (disabled)
//             $(".alphabetLetter").css( "color", "#AEAEAE");
//             // $(".playAgain").css( "background-color", "white");

//             // changes play again button opacity to full
//             $(".playAgain").css( "opacity", "1");

//             // adds to the variable total losses by one
//             totalLosses = totalLosses + 1;

//             // changes the total of losses to totalLosses variable 
//             $( ".lose" ).html(`${totalLosses} `);

//             // changes games in games lost to game
//             $( ".gamesLost" ).html('game');

//             // if user has lost more than one game, game changes to games
//             if (totalLosses > 1) {
//                 $( ".gamesLost" ).html('games');
//             }

//             // return the amount of total losses
//             return totalLosses;
//     } 
// };









// triggers a game to begin / allows user to insert letters
setUpGame();

// new game button -->
    // clears old divs
    // generates new word from random word array
    // inserts new divs for newrandomword.length 
    // adds to total wins and total losses

// when the play again button is clicked...
$( ".playAgain" ).click(function(event) {

    // enables letters again
    $(".alphabetLetter").prop('disabled', false);

    head.setAttribute("style", "opacity: 0");
    
    body.setAttribute("style", "opacity: 0");

    leftArm.setAttribute("style", "opacity: 0");
    
    rightArm.setAttribute("style", "opacity: 0");

    leftLeg.setAttribute("style", "opacity: 0");

    rightLeg.setAttribute("style", "opacity: 0");


    // changes title back to postironic hangman
    $( "#title" ).html("post ironic hangman");
    
    // empty out the previously created letter boxes
    $( ".letterArea" ).empty(letterBox);

    // created a new variable and set it to a randomly generated word
    randomArrayWord = generateRandomWord();
    console.log(randomArrayWord);

    // get the length of the randomly generated word
    randomArrayWordLength = randomArrayWord.length;

    // create a series of boxes that corresponds to that length
    var letterBox = "";
    for (let i = 0; randomArrayWordLength > i; i++) {
        letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
        $( ".letterArea" ).append(letterBox);   
    }

    // changes letters back to white
    $(".alphabetLetter").css( "color", "white");

    // resets arrays --> 

    // array for the amount of wrong guesses
    wrongGuesses = [];
    // array for the amount of right guesses
    rightGuesses = [];
    // array for the amount of wrong guesses the user starts with
    totalGuesses = 6;

    // console.log(wrongGuesses);
    // console.log(rightGuesses);
    // console.log(totalGuesses);

    // logic to check to see if user has won or lost a game

    // when user clickes on a letter with the class of alphabet letter
    // $(".alphabetLetter").on( "click", function( event ) { 
            
    //     // when user selects a letter, grey out the letter in the alphabet list
    //     $(event.delegateTarget).css( "color", "#AEAEAE");

    //     if (randomArrayWord.includes(event.currentTarget.innerHTML)) {

    //         // need to target the exact location(s) in the word where the letter is located and add letter to that location
    //         for (let j = 0; j < randomArrayWord.length; j++) {
    //             if (randomArrayWord[j] == event.currentTarget.innerHTML) {

    //                 //removes previously create letters in letter in box divs
    //                 $("#box"+i).empty();

    //                 // creates a p tag with the letter selected 
    //                 var letterInBox =  `<p>${event.currentTarget.innerHTML}</p>`;

    //                 // inserts that p tag into the corresponding box
    //                 $("#box"+j).append(letterInBox);

                    
    //                 // adds the letters put into boxes into array 
    //                 rightGuesses.push(event.currentTarget.innerHTML);

    //                 console.log(rightGuesses);

    //                 // checks to see if the array of correctly guessed letters matches the length of the randomly generated word
    //                 if (rightGuesses.length == randomArrayWordLength) {

    //                     // changes title 
    //                     $( "#title" ).html("congratulations!!! u win!!!")

    //                     // changes the colors of the alphabet buttons 
    //                     // $(".alphabetLetter").css( "color", "#AEAEAE");

    //                     // changes opacity to of play again button
    //                     $(".playAgain").css( "opacity", "1");

    //                     // creates a variable targeting all alphabet buttons
    //                     var allLetters = document.getElementsByClassName("alphabetLetter");
    //                     // for (let i = 0; i < allLetters.length; i++) {
    //                     //     allLetters[i].setAttribute("disabled", true);
    //                     //     // $(".alphabetLetter").css( 'cursor', 'none' );
    //                     // }

    //                     // adds a win to the totalWinns variable
    //                     totalWins = totalWins + 1;

    //                     // changes wins number to the value of the variable totalWins
    //                     $( ".wins" ).html(`${totalWins} `);

    //                     // changes games to game if total games won is 1
    //                     $( ".gamesWon" ).html('game');

    //                     // if total wins is greater than one, changes game back to games
    //                     if (totalWins > 1) {
    //                         $( ".gamesWon" ).html('games');
    //                     }
    //                     // returns the variable total wins
    //                     return totalWins;
    //                     // $(".alphabetLetter").css( "opacity", "0");
    //                 }
    //             }
    //         }   
    //     // create functionality that counts down from 6 to determine what body part to reveal 
    //     } else { 

    //         // pushes incorrectly guessed letter into wrongGuesses array
    //         wrongGuesses.push(event.currentTarget.innerHTML);

    //         // subtracts from the variable total guesses by one
    //         totalGuesses = totalGuesses - 1;
    //         // onClick="this.disabled=true";

    //         // shows head
    //         if (wrongGuesses.length == 1) {
    //             head.setAttribute("style", "opacity: 1");
            
    //         // shows body 
    //         } else if (wrongGuesses.length == 2) {
    //             body.setAttribute("style", "opacity: 1");

    //         // shows left arm
    //         } else if (wrongGuesses.length == 3) {
    //             leftArm.setAttribute("style", "opacity: 1");
            
    //         // shows right arm
    //         } else if (wrongGuesses.length == 4) {
    //             rightArm.setAttribute("style", "opacity: 1");

    //         // shows left leg
    //         } else if (wrongGuesses.length == 5) {
    //             leftLeg.setAttribute("style", "opacity: 1");

    //         // shows right leg + player loses the game 
    //         } else if (wrongGuesses.length == 6) {
                
    //             //shows right leg
    //             rightLeg.setAttribute("style", "opacity: 1");

    //             // changes title 
    //             $( "#title" ).html("sorry that u suck. try again loser.")

    //             // changes the color of the alphabet buttons (disabled)
    //             $(".alphabetLetter").css( "color", "#AEAEAE");
    //             // $(".playAgain").css( "background-color", "white");

    //             // changes play again button opacity to full
    //             $(".playAgain").css( "opacity", "1");

    //             // adds to the variable total losses by one
    //             totalLosses = totalLosses + 1;

    //             // changes the total of losses to totalLosses variable 
    //             $( ".lose" ).html(`${totalLosses} `);

    //             // changes games in games lost to game
    //             $( ".gamesLost" ).html('game');

    //             // if user has lost more than one game, game changes to games
    //             if (totalLosses > 1) {
    //                 $( ".gamesLost" ).html('games');
    //             }

    //             // return the amount of total losses
    //             return totalLosses;
    //         } 
    //     };
    // })









    // letterBox();

    // created a variable and set it to a a div with the class of LetterBox
    // letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;

    // generates a div for every length of the randomly created word and inserts it into the letter area div with a class of letterArea
    // for (let i = 0; randomArrayWord.length > i; i++) {
    //     $( ".letterArea" ).append(letterBox);
    // } 

    //                     // creates a p tag with the letter selected 
    // var letterInBox =  `<p>${event.currentTarget.innerHTML}</p>`;

    //                     // inserts that p tag into the corresponding box
    // $("#box"+i).append(letterInBox);

    //                     // adds the letters put into boxes into array 
    // rightGuesses.push(event.currentTarget.innerHTML);

    // console.log(event.currentTarget.innerHTML);

    // // logs the new randomly created word
    // console.log(randomArrayWord);

    // make the letters work agian -->
    // creates a variable targeting all letter buttons
    // var allLetters = document.getElementsByClassName("alphabetLetter");
    // console.log(document.getElementsByClassName("alphabetLetter"))
    // allLetters.setAttribute("disabled", "");
    // document.getElementsByClassName("alphabetLetter").setAttribute("disabled", false);

    // for (let i = 0; i < allLetters.length; i++) {
    //     // allLetters[i].setAttribute("disabled", "false");
    //     $(".alphabetLetter").css( "color", "white");

        // $(allLetters).removeAttr('disabled');
        // allLetters[i].disabled = false;
        // if (allLetters[i].setAttribute("disabled", false)) {
        //     $(".alphabetLetter").css( 'cursor', 'pointer' );
        // }
        // console.log(allLetters[i]);
    // }
    // setUpGame(console.log("setupGameCalled"));






    // setUpGame();






    // console.log(allLetters);
    // console.log(generateRandomWord());
    // $(".letterBox").empty(event.currentTarget.innerHTML);
    // generateRandomWord();
    // for (let i = 0; randomArrayWordLength > i; i++) {
    //     var letterBox = `<div id='box${i}' class='letterBox'><div class='underlinedLetterArea'></div></div>`;
    //     $( ".letterArea" ).append(letterBox);
    // }
});


// remove previously generated div letter nodes

// add new nodes for word








