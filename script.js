$(document).ready(function() {
    console.log("jquery active")

    // generate a word for the user to guess
    let generateRandomWord = () => {
        var wordBank = ["aesthetic", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces", "gucci", "lmao", "plz", "rose", "scooting", "buckethat", "buckhead"];
        // var wordBank = ["to"];
        var randomNumber = Math.random();
        var randomWholeNumber = Math.floor(randomNumber * wordBank.length);
        var randomArrWord = wordBank[randomWholeNumber];
        return randomArrWord;   
    }

    // you always get a random word from the array 
    var randomArrayWord = generateRandomWord();

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

                var selectedLetter = $(event.delegateTarget);

                selectedLetter.prop('disabled', true);

                // see if the string word contains the letter that was clicked
                // index of the location in randomArrayWord where letter is located
                var includesLetterIndex = randomArrayWord.indexOf(event.currentTarget.innerHTML); 
                if (randomArrayWord.includes(event.currentTarget.innerHTML)) {
                    console.log(event);
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
                        
                        //shows right leg
                        rightLeg.setAttribute("style", "opacity: 1");

                        // changes title 
                        $( "#title" ).html("u suck. try again loser.")

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

                        // clear out previously created p letter tags that were inserted 
                        $(".letterBox").empty();

                        // push correct letter at correct index of created divs -->
                            // need to insert the letter of randomly generated word into divs that correspond with the word index
                        for (let i = 0; i < randomArrayWord.length; i++) {

                            // insert letter at index i to box at index i -->
                                // need to differentiate between new letters being inserted vs overall
                            $("#box"+i).append(`<p>${randomArrayWord[i]}</p>`);
                        }

                        // return the amount of total losses
                        return totalLosses;
                    } 
                };
            })
        });
    }

    // triggers a game to begin / allows user to insert letters
    setUpGame();

    // new game button -->
        // clears old divs
        // generates new word from random word array
        // inserts new divs for newrandomword.length 
        // adds to total wins and total losses

    // when the play again button is clicked...
    $( ".playAgain" ).click(function(event) {


        // changes play again button opacity
        $(".playAgain").css( "opacity", ".6");

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
        // console.log(randomArrayWord);

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
    });

    // tutorial modal
    $(".infoButton").click(function () {
        // $(".tutorialModal").show();
        $(".tutorialModal").css("display", "flex");
        // $("body").css("background-color", "black");
        $(".overlay").show();
    })
    
    $(".noButton").click(function() {
        $(".tutorialModal").hide();
        $(".overlay").hide();
    })
    
    $(".yesButton").click(function() {
        $(".tutorialModal").hide();
        $(".overlay").hide();
        anime({
                targets: "#firstTutorial",
            translateX: 150,
            opacity: 1
            // delay: anime.stagger(100,{start: 500})
        });
    })
    
})