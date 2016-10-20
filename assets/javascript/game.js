var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loss = 0;
var guessLeft = 13;
var wordBank = ["stranger", "orlando", "now", "nobody", "nowhere", "not"];
var dashBank = [];
var guesses = [];
var splitArray = [];


/*This will produce a random number between 0-26, this will be used 
to choose a word out of the alphabet array*/
function randomNumber() {
  var number = Math.floor(Math.random(number) * 6);
    return number; 
};

//randomNumber() test
/*var numberTest = randomNumber();
console.log(numberTest);*/


//This will take the number from randomNumber and retrieve that word from the wordBank array
function wordChoice() {
        var num = randomNumber();
        var word = wordBank[num];
       
        console.log(window.word);
        return word;
}

//wordChoice() test
/*var wordTest = wordChoice();
console.log(wordTest);*/

//this will replace the letters of the word with dashes
function dashes(dash) {
    /*var dash = [];*/  
    /*var word = wordChoice();*/  
    for(var i = 0; i < word.length; i++) {
        dashBank.push('_'); 
        console.log(word);
    }
    return dashBank;

}
//dashes() test
var dashTest = dashes();
console.log(dashTest);

//this will split the string into an array of individual letters
function splitString(word) {
    splitArray = word.split(['']);
    return splitArray;
}

var splitStringTest = splitString();
console.log(splitStringTest);


function init() {
	wordChoice();
	dashes();
	/*splitString();*/
};





























