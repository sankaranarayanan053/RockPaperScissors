let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  tie : 0
  };


updateScoreElement();


function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose';  
    }
    else if (computerMove === 'Paper') {
      result = 'You won';  
    }
    else if (computerMove === 'Scissors') {
      result = 'Tie';  
    }   
  } 
  
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
        result = 'You won';  
      }
      else if (computerMove === 'Paper') {
        result = 'Tie';  
      }
      else if (computerMove === 'Scissors') {
        result = 'You lose'  
     }
   } 
   
   else if (playerMove === 'Rock') {
     if (computerMove === 'Rock') {
        result = 'Tie';  
      }
      else if (computerMove === 'Paper') {
        result = 'You lose';  
      }
      else if (computerMove === 'Scissors') {
        result = 'You won'  
     }  
   }


   if ( result === 'You won') {
     score.wins += 1; 
   } else if (result === 'You lose') {
     score.losses += 1; 
   } else if (result === 'Tie') {
     score.tie +=1;  
   }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  updateMoveElement(playerMove,computerMove);

  updateResultElement(result);

}

function pickComputerMove() {
  let randomnumber1 = Math.random();

  let computerMove = '';

  if (randomnumber1 >= 0 && randomnumber1 < 1/3) {
    computerMove = 'Rock';   
  }
  else if (randomnumber1 >= 1/3 && randomnumber1 < 2/3) {
    computerMove = 'Paper';
  }
  else if (randomnumber1 >= 2/3 && randomnumber1 < 3) {
    computerMove = 'Scissors';
  } 
  return computerMove;     
}

function updateScoreElement() {
  document.querySelector('.js-score').
   innerHTML = `Wins: ${score.wins} losses: ${score.losses} tie : ${score.tie}`;
}

function updateMoveElement(playerMove, computerMove) {
  document.querySelector('.js-move').innerHTML = `You 
   <img src="/images/${playerMove}-emoji.png"
     class="move-icon" >
   <img src="/images/${computerMove}-emoji.png" 
     class="move-icon" >
   Computer `;
}

function updateResultElement(result) {
  document.querySelector('.js-result').innerHTML = `${result}`;  
}