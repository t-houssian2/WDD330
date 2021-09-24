// Set the questions
const quiz = [
    ["Who is the best NBA Team","dallas mavericks"],
    ["Who is the best NFL Team","buffalo bills"],
    ["What is the best color?","blue"],
    ["What is the celestial language?", "spanish"],
    ["What the celestial sport?", "ping pong"]
  ];

function start(quiz){
  // initialize score
   let score = 0;

  // main game loop
  for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question){
    return prompt(question);
  }

  function check(response,answer){
    // check if answer is correct
    if(response.toLowerCase() === answer){
      alert('Correct!');
      // increase score by 1
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver(){
    // At the end of the game, report the player's score
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}

let btn = document.createElement("button");
btn.innerHTML = "Take Quiz";
btn.onclick = function(){start(quiz)};
div = document.getElementById("dojo");
div.appendChild(btn);