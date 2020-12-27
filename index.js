function rollADice() {
  // get number between value 1 - 6
  var number = Math.ceil(Math.random() * 6);
  return number;
}

function setPlayerImage(player, number) {
  // generate image src
  var imageSource = `images/dice${number}.png`;
  // set attribute of the img element
  document.querySelector(`.img${player}`).setAttribute("src", imageSource);
}

function setTitleForWinner(playerOneScore, playerTwoScore) {
  if (playerOneScore > playerTwoScore) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (playerOneScore < playerTwoScore) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "It's a draw!";
  }
}

function playTheGame() {
  var playerOneScore = rollADice();
  setPlayerImage(1, playerOneScore);
  var playerTwoScore = rollADice();
  setPlayerImage(2, playerTwoScore);
  setTitleForWinner(playerOneScore, playerTwoScore);
}

playTheGame();
