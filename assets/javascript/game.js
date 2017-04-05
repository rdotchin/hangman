//=========================GLOBAL VARIABLES=======================//    
var wins = 0;
var loss = 0;
var guessLeft = 9;
var wordBank = ["stranger", "orlando", "now", "nobody", "nowhere", "not"];
var currentWord;
var dashBank = [];
var wrongLetters = [];
var letters = [];

//========================FUNCTIONS================================//
function init() {
    //get random number that is the length of the wordBank array
    var randomNumber = Math.floor(Math.random() * wordBank.length);
    //use random number to pull word out of the array
    currentWord = wordBank[randomNumber];
    //split current word into indivdual letters 
    letters = currentWord.split('');
    //reset the users guesses, dashes array and letters guessed array
    reset();
    //loop through length of letters and push dashes into array
    for (var i = 0; i < letters.length; i++) {
        dashBank.push('-');
    }

    //add win, loss, guesses left, dashes and wrong letters to html page
    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById('loss').innerHTML = "loss: " + loss;
    document.getElementById('dash').innerHTML = dashBank.join(' ');
    document.getElementById('guessesLeft').innerHTML = "Guesses Remaining: " + guessLeft;
}

function checkGuess(userguess) {
    //loop through current word letters to see if userGuess matches
    var correctGuess = false;
    for (var i = 0; i < letters.length; i++) {
        if (userguess == letters[i]) {
            correctGuess = true;
        }
    }

    /*if correctGuess is true it will loop through the letters to see which is correct 
    and replace the dash with the correct letter*/
    if (correctGuess) {
        for (var i = 0; i < letters.length; i++) {
            //userguess replaced dashes with the correct letter
            if (userguess == letters[i]) {
                dashBank[i] = userguess;

            }
        }
        //display updated dashes on html page
        document.getElementById('dash').innerHTML = dashBank.join(' ');
        //check if the user completed the word
        checkWin(dashBank);
        console.log(dashBank);
    } else {
        wrong(userguess);
    }


}

init();

//Reset the game by setting guesses and wrongLetters
function reset() {
    guessLeft = 9;
    wrongLetters = [];
    dashBank = [];
}

function checkWin(word) {
    //check if dashBank is equal to the current word
    //if true the user has won, wins increase 1 and the game resets
    if (word.join('') === currentWord) {
        wins++;
        alert("you won!");
        init();
    }
}
/*if letter guessed is wrong the userGuess decreases by 1 and checks to see if the total equals 0
which results in the user losing the game*/
function wrong(userguess) {
    guessLeft--;
    //push the users wrong guess to the wrongLetters array
    wrongLetters.push(userguess);
    //update the wrongLetters array on the html page
    document.getElementById('lettersGuessed').innerHTML = wrongLetters.join(' ');
    //update the guesses left on the html page
    document.getElementById('guessesLeft').innerHTML = "Guesses Remaining: " + guessLeft;
    if (guessLeft === 0) {
        console.log("you lost");
        loss++;
        init();
    }
}



//function to check if a value exists in an array
function alreadyGuessed(array, guess) {
    return array.indexOf(guess) > -1;
}

document.onkeyup = function(event) {
    //gets the letter from the keyCode and makes it a lowercase string
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //check if the key typed is not a letter
    var letterCheck = event.keyCode >= 48 && event.keyCode <= 57;
    //check if letter exists in wrongLetters or wordBank arrays
    if (alreadyGuessed(wrongLetters, userGuess) || alreadyGuessed(wordBank, userGuess) || letterCheck) {

    }


    //if it is a letter that has not been guessed then check if it is correct
    else {
        console.log(userGuess);
        checkGuess(userGuess);
    }
};