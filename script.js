// Global Constants
const cluePauseTime = 333;  
const nextClueWaitTime = 1000;  

// Global Variables
var pattern = [];  
var progress = 0;  
var gamePlaying = false;  // game played
var tonePlaying = false;  // tone being played
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;  
var clueHoldTime = 1000;  
var mode = 0;  
var mistakes = 0;  
var time;  
var intervalID;  
var delay;  
var win_count = 0;


function setPattern() {
  for(let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 8) + 1;
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  // Swap the Start and Stop buttons
  document.getElementById("Begin").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  document.getElementById("win_count").classList.remove("hidden");
  document.querySelector("#message").textContent = "Repeat the pattern back to win the game!";  
  resetTimer();  
  setPattern();  
  playClueSequence();  // Start the first clue sequence
}


function stopGame() {
  resetTimer();  // Reset the timer to the start
  setTimeout(resetTimer, delay);  
  gamePlaying = false;
  clueHoldTime = 1000;  // Reset clueHoldTime to standard in case the game is in Hard Mode
  // Swap the Start and Stop buttons
  document.getElementById("Begin").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("win_count").classList.add("hidden");
}


function playTone(btn, len){ 
  document.getElementById("audio"+btn).currentTime = 0;  // Start tone from the beginning
  document.getElementById("audio"+btn).play();
  // Stop the tone after the desired time len
  setTimeout(function(){
    stopTone(btn)
  }, len)
}


function startTone(btn){ 
  document.getElementById("audio"+btn).currentTime = 0;  // Start tone from the beginning
  document.getElementById("audio"+btn).play();
}


function stopTone(btn){
  document.getElementById("audio"+btn).pause();
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

window.onload = setTimer();  
window.onload = setEasy();  



function setTimer() {
  if(mode == 0) {  
    time = 15;
  } else {
    time = 8;
  }
  document.getElementById("time").innerHTML = time;  
}

/**
  * Start the timer and update the timer 
  */
function startTimer() {
  intervalID = setInterval(function() {
    time -= 1;  
    document.getElementById("time").innerHTML = time;  
    
    if(time <= 0) {  
      loseGame();
    }
  }, 1000);  
}


function resetTimer() {
  clearInterval(intervalID);  
  setTimer(); 
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");  // Light up the button; Change its color
}


function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");  // Dim down the button; Change its color back
}


function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);  
    playTone(btn, clueHoldTime);  
    setTimeout(clearButton, clueHoldTime, btn);  
  }
}


function playClueSequence() {
  guessCounter = 0;  
  delay = nextClueWaitTime;  
  
  for(let i = 0; i <= progress; i++) {  // For each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);  // Set a timeout to play that clue
    delay += clueHoldTime;  // Update the delay
    delay += cluePauseTime;
  }
  
  setTimeout(startTimer, delay);  
  
  if(mode == 1) {  
    clueHoldTime -= 100;
  }
}


function loseGame() {
  stopGame();
  document.querySelector("#message").textContent = "You lost. Try Harder!"
}


function winGame() {
  stopGame();
  document.querySelector("#message").textContent = "Congratulations, you are born musician!"
}


function guess(btn) {
  
  if(!gamePlaying) {  // If the game is not being played, do not do anything
    return;
  }
  
  if(btn == pattern[guessCounter]) {  
    // Correct Guess
    if(guessCounter == progress) {  
      // Last Guess of the Turn
      if(progress == pattern.length - 1) {  
        // Last Turn of the Game
        winGame();  
      } else {
        progress++;  // Increment progress
        win_count++;
        resetTimer();
        document.getElementById("win").innerHTML = win_count; 
        playClueSequence();  // Start the next turn
      }
    } else {
      guessCounter++;  // Increment the guess counter of this turn
    }
  } else {
    // Wrong Guess
    if(mode == 1) {
      // If the player makes a wrong guess in Hard Mode, they lose
      loseGame();
    } else {
      mistakes++;  
      if(mistakes == 1) {  
        document.querySelector("#message").textContent = "Strike 1. Watch out!";
        resetTimer();
        playClueSequence();  // Play this turn's clue again
      } else if(mistakes == 2) {  // Update the message to be the strike 2 text
        document.querySelector("#message").textContent = "Strike 2. Be Careful My friend!";
        resetTimer();
        playClueSequence();  // Play this turn's clue again
      } else {  // It is strike 3, 
        loseGame();
      }
    }
  }
}

function setHard() {
  if(gamePlaying) {  // If a game is in progress, stop it
    stopGame();
  }
  document.getElementById("easyBtn").classList.remove("selected");  
  document.getElementById("hardBtn").classList.add("selected"); 
  document.querySelector("#message").textContent = "Repeat right after the sound track to win!";  
  mode = 1;
  setTimer();  
}

function setEasy() {
  if(gamePlaying) {  // If a game is in progress, stop it
    stopGame();
  }
  document.getElementById("easyBtn").classList.add("selected");  
  document.getElementById("hardBtn").classList.remove("selected");  
  document.querySelector("#message").textContent = "Repeat the pattern back to win the game!";  

  mode = 0;
  setTimer();  // Set the timer -- Easy Mode
}


