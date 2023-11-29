//Elements Section 

let secertNumber = Math.trunc(Math.random() * 20)+1; // Creates a Random Number Between 1 and 20  
let currentScore = 20;
let highScore = 0; 


//Functions Section 

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

const displayScore = function (score) {
  document.querySelector(".score").textContent = score
}

const changeBackground = function(backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
}




// Event Listeners for Buttons


//CHECK BUTTON
document.querySelector(".check").addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);

    //No Input 
  if(!guessedNumber){
    displayMessage("No Number ❌")

    //If The Number Is Right 
  } else if (guessedNumber === secertNumber) {
    displayMessage("You Guessed The Right Number ✅")
    changeBackground("#60b347");
    document.querySelector(".number").style.width = "30rem"
    document.querySelector(".number").textContent = secertNumber
  }
    //High Score Function
    if(currentScore > highScore) {
      highScore = currentScore // High Score Becomes Current Score If Greater
      document.querySelector(".highscore").textContent = highScore; //Stores the High Score in The Text Content
    }

    //When Guess is Wrong 
    else if (guessedNumber !== secertNumber) {
      if(currentScore > 1){
        displayMessage(guessedNumber > secertNumber ? `Too High 📈`: `Too Low 📉`)
        currentScore --;
        displayScore(currentScore);
      } else {
        displayScore(0);
        displayMessage(`YOU LOSE 🙆🏿 YOUR SCORE IS ${document.querySelector(".score").textContent}`);
      };

    }
  

});


//REST/AGAIN BUTTON

document.querySelector(".again").addEventListener("click", () => {
  currentScore = 20;
  secertNumber = Math.trunc(Math.random() * 20)+1;
  displayMessage("Start Guessing");
  displayScore(currentScore);
  changeBackground("#222");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem"
  document.querySelector(".guess").value = "";




})
