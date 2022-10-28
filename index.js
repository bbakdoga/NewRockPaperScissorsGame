// Declaring consts
const displayWinner = document.getElementById('winner');
const rockId = document.getElementById('rock');
const paperId = document.getElementById('paper');
const scissorsId = document.getElementById('scissors');
const div = document.createElement("div");
const game = document.getElementsByClassName('game');
const table =document.getElementById('scoreBoard');
const result = document.getElementsByClassName('result');
const start = document.getElementsByClassName('start-page');

// declaring let values
let displayValue = null;
let counter = 0;
let wins = 0;
let losses = 0;
let draws = 0;



var myLink = document.getElementById('mylink');
/**
 * At the start page, once clicked, the game will be launched
 */
myLink.onclick = function(){
  for (var i=0;i<start.length;i+=1){
    start[i].style.display = 'none';
  }
  for (var i=0;i<game.length;i+=1){
      game[i].style.display = 'block';
    }
}
var again = document.getElementById('again');
/**
 * Button to play the game again
 */
again.onclick = function(){
  for (var i=0;i<game.length;i+=1){
    game[i].style.display = 'block';
  }

  for(var i = 0; i < result.length; i++){
    result[i].style.display = 'none';
  }
}
// Event listners
rockId.addEventListener('click',  function handleClick(event) {
  gameFunction('rock');
});
paperId.addEventListener('click',  function handleClick(event) {
  gameFunction('paper');
});
scissorsId.addEventListener('click',  function handleClick(event) {
  gameFunction('scissors');
});
// selection array
let selection = ["Rock","Paper","Scissors"];
/**
 * picks a random string from the array
 * @returns randomly selected string
 */
function computerPlay(){
  return selection[Math.floor(Math.random() * selection.length)];
}
/**
 * This function returns the outcome of the game 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns String with game outcome
 */
function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection == computerSelection.toLowerCase()){
    draws++;
    counter++;
    displayValue = "Draw, you both picked " + playerSelection.toLowerCase() + "!";
    table.rows[1].cells[1].innerHTML = displayValue;
    return displayValue;
  }
  if(playerSelection == selection[0].toLowerCase() && computerSelection == selection[2] ||
  playerSelection == selection[1].toLowerCase() && computerSelection == selection[0] || 
  playerSelection == selection[2].toLowerCase() && computerSelection == selection[1]){
    wins++;
    counter++;
    displayValue =  "Win, " + playerSelection + " beats " + computerSelection.toLowerCase() + "!";
    table.rows[1].cells[0].innerHTML = wins;
    table.rows[1].cells[1].innerHTML = displayValue;
    return displayValue;
  } 
  else {
    displayValue = "Lose, " +  computerSelection + " beats " + playerSelection.toLowerCase() + "!";
    losses++;
    counter++;
    table.rows[1].cells[2].innerHTML = losses;
    table.rows[1].cells[1].innerHTML = displayValue;
    return displayValue;
  }
}
/**
 * This main function where playround function is called 5 times
 * Displays the output of the playround and final wins
 * @param userInput
 * @return none
 */
 function gameFunction(userInput){
  displayWinner.innerText = "";
  playRound(userInput,computerPlay());
  table.rows[1].cells[3].innerHTML = counter;
  console.log(displayValue);
  console.log(counter);
  if(counter == 5){
    if(wins > losses){
      displayWinner.innerText = "Player wins!";
      var ele = document.getElementsByClassName("result")[0];
      ele.style.backgroundImage = "url(images/winner.jpg)";
      ele.style.backgroundSize="100% 100%"; 
    } else if (losses > wins ) {
      displayWinner.innerText = "Computer wins!";
      var ele = document.getElementsByClassName("result")[0];
      ele.style.backgroundImage = "url(images/losing.jpeg)";
      ele.style.backgroundSize="100% 100%";
    } else  {
      var ele = document.getElementsByClassName("result")[0];
      ele.style.backgroundImage = "url(images/game.jpeg)";
      ele.style.backgroundSize="100% 100%";
      displayWinner.innerText = "It's a draw";
    }
    counter = 0;
    wins = 0;
    losses = 0;
    draws = 0; 
    table.rows[1].cells[0].innerHTML = wins;
    table.rows[1].cells[2].innerHTML = losses;
    table.rows[1].cells[3].innerHTML = counter;
    table.rows[1].cells[1].innerHTML = '';
    for (var i=0;i<game.length;i+=1){
      game[i].style.display = 'none';
    }
    for(var i = 0; i < result.length; i++){
      result[i].style.display = 'flex';
    }
  } 
}