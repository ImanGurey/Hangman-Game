// One-word movie titles to guess
var movieTitles = ['ocean 8', 'lion king', 'black panther', 'halloween', 'crazy rich asian', 'the post', 'the shape of water', 'titanic'];

// all 26 letters in the alphabet for random input
var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// shows the number of wins
var winCount = 0;

// shows the number of losses
var lossCount = 0;

// drives the win counter
var rightGuessCounter = 0;

var guessesRemaining = 10;

// placeholder for the chosen one-word movie title
var randomTitle = "";

// placeholders for letters in the one-word movie title
var lettersInTitle = [];

// number of blanks in the word 
var numBlanks = 0;

// placeholder for blanks and letter with successful hits 
var blanksAndHits = [];

// placeholder for letters with no hits 
var wrongLetters = [];


