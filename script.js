//Elements Section 

let secertNumber = Math.trunc(Math.random() * 20)+1; // Creates a Random Number Between 1 and 20  
let currentScore = 20;
let highScore = 0; 









// Event Listeners for Buttons


//CHECK BUTTON
document.querySelector(".check").addEventListener("click", () => {
  const guessedNumber = Number(document.querySelector(".guess").value);

    //No Input 
  if(!guessedNumber){
    document.querySelector(".message").textContent = "No Number ❌"; 

    //If The Number Is Right 
  } else if (guessedNumber === secertNumber) {
    document.querySelector(".message").textContent = "You Guessed The Right Number ✅"; 
    document.body.style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"
    document.querySelector(".number").textContent = secertNumber

    //High Score Function

    if(currentScore > highScore) {
      highScore = currentScore // High Score Becomes Current Score If Greater
      document.querySelector(".highscore").textContent = highScore; //Stores the High Score in The Text Content
    }



    //If The Number Is Too High 
  } else if (guessedNumber > secertNumber) {
    if(currentScore > 1){
      document.querySelector(".message").textContent = "Too High 📈";
      currentScore --;
      document.querySelector(".score").textContent = currentScore; 
    } else {
      document.querySelector(".message").textContent = "YOU LOSE 🙆🏿";
      document.querySelector(".score").textContent = 0; 
    };

    //If The Number Is Too Low 
  } else if (guessedNumber < secertNumber) {
    if(currentScore > 1){
      document.querySelector(".message").textContent = "Too Low 📉";
      currentScore --;
      document.querySelector(".score").textContent = currentScore; 
    } else {
      document.querySelector(".message").textContent = "YOU LOSE 🙆🏿";
      document.querySelector(".score").textContent = 0; 
    };
  }

});


//REST/AGAIN BUTTON

document.querySelector(".again").addEventListener("click", () => {
  currentScore = 20;
  secertNumber = Math.trunc(Math.random() * 20)+1;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".score").textContent = currentScore;
  document.body.style.backgroundColor = "#222"
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem"
  document.querySelector(".guess").value = "";




})

