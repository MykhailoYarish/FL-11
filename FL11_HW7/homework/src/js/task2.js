let confirmPlaying = confirm('Do you want to play a game?');

if (!confirmPlaying) {
  alert('You did not become a billionaire, but can.');
} else {
    const attemptsNumber = 3;
    const initialMaxRange = 9;
    const firstAttemptNumber = 3;
    const secondAttemptNumber = 2;
    const thirdAttemptNumber = 1;
    const incrementMaxRangeNumber = 4;
    const prizeMultValue = 2;
    const initialMaxPrize = 100;
    const initialAvgPrize = 50;
    const initialMinPrize = 25;

    let randomMaxRange = initialMaxRange;
    let attempts = attemptsNumber;
    let totalPrize = 0;
    let maxPrize = initialMaxPrize;
    let avgPrize = initialAvgPrize;
    let minPrize = initialMinPrize;
    let possiblePrize = maxPrize;
    let randomNumber = Math.floor(Math.random() * randomMaxRange);

  while (confirmPlaying) {
    let pocketNumber = 
      prompt(`Choose a roulette pocket from 0 to ${randomMaxRange - 1} 
Attempts left: ${attempts} 
Total prize: ${totalPrize}$ 
Possible prize on current atempth: ${possiblePrize}$`);

    // Checking if user clicked 'cancel button. If true - quit the game'
    if(pocketNumber === null){
        confirmPlaying = false;
        break;
    }
    pocketNumber = parseInt(pocketNumber)
    // Checking if user entered correct number from 0 to max number in range
    if (
      !isNaN(pocketNumber) &&
      pocketNumber >= 0 &&
      pocketNumber < randomMaxRange
    ) {
        //User entered right number
      if (randomNumber === pocketNumber) {
        if (attempts === firstAttemptNumber) {
          totalPrize += maxPrize;
          alert(`Congratulation, you won! Your prize is: ${totalPrize}$`);
          confirmPlaying = confirm('Do you want to continue ?');
          //If user confirm to continue, set values for next round
          if (confirmPlaying) {
            randomMaxRange += incrementMaxRangeNumber;
            attempts = attemptsNumber;
            maxPrize *= prizeMultValue;
            avgPrize *= prizeMultValue;
            minPrize *= prizeMultValue;
            possiblePrize = maxPrize;
            randomNumber = Math.floor(Math.random() * randomMaxRange);
          } else {
            alert(
              `Thank you for your participation. Your prize is: ${totalPrize}$`
            );
            confirmPlaying = confirm('Would you like to play again ?');
            //Confirm for next game, if user confirmed, set all values to defaults
            if (confirmPlaying) {
              randomMaxRange = initialMaxRange;
              attempts = attemptsNumber;
              totalPrize = 0;
              maxPrize = initialMaxPrize;
              avgPrize = initialAvgPrize;
              minPrize = initialMinPrize;
              possiblePrize = maxPrize;
              randomNumber = Math.floor(Math.random() * initialMaxRange);
            } else {
            //User does not want to play again
              alert(
                'Thank you for your participation. You did not want to play again.'
              );
            }
          }
        } else if (attempts === secondAttemptNumber) {
          totalPrize += avgPrize;
          alert(`Congratulation, you won! Your prize is: ${totalPrize}$`);
          confirmPlaying = confirm('Do you want to continue ?');
          if (confirmPlaying) {
            randomMaxRange += incrementMaxRangeNumber;
            attempts = attemptsNumber;
            maxPrize *= prizeMultValue;
            avgPrize *= prizeMultValue;
            minPrize *= prizeMultValue;
            possiblePrize = maxPrize;
            randomNumber = Math.floor(Math.random() * randomMaxRange);
          } else {
            alert(
              `Thank you for your participation. Your prize is: ${totalPrize}$`
            );
            confirmPlaying = confirm('Would you like to play again ?');
            if (confirmPlaying) {
              randomMaxRange = initialMaxRange;
              attempts = attemptsNumber;
              totalPrize = 0;
              maxPrize = initialMaxPrize;
              avgPrize = initialAvgPrize;
              minPrize = initialMinPrize;
              possiblePrize = maxPrize;
              randomNumber = Math.floor(Math.random() * initialMaxRange);
            } else {
              alert(
                'Thank you for your participation. You did not want to play again.'
              );
            }
          }
        } else if (attempts === thirdAttemptNumber) {
          totalPrize += minPrize;
          alert(`Congratulation, you won! Your prize is: ${totalPrize}$`);
          confirmPlaying = confirm('Do you want to continue ?');
          if (confirmPlaying) {
            randomMaxRange += incrementMaxRangeNumber;
            attempts = attemptsNumber;
            maxPrize *= prizeMultValue;
            avgPrize *= prizeMultValue;
            minPrize *= prizeMultValue;
            possiblePrize = maxPrize;
            randomNumber = Math.floor(Math.random() * randomMaxRange);
          } else {
            alert(
              `Thank you for your participation. Your prize is: ${totalPrize}$`
            );
            confirmPlaying = confirm('Would you like to play again ?');
            if (confirmPlaying) {
              randomMaxRange = initialMaxRange;
              attempts = attemptsNumber;
              totalPrize = 0;
              maxPrize = initialMaxPrize;
              avgPrize = initialAvgPrize;
              minPrize = initialMinPrize;
              possiblePrize = maxPrize;
              randomNumber = Math.floor(Math.random() * initialMaxRange);
            } else {
              alert(
                'Thank you for your participation. You did not want to play again.'
              );
            }
          }
        }
        //User entered wrong number
      } else {
          //User had last attempt
        if (attempts === thirdAttemptNumber) {
          alert(
            `Thank you for your participation. Your prize is: ${totalPrize}$`
          );
          confirmPlaying = confirm('Would you like to play again ?');
          if (confirmPlaying) {
            randomMaxRange = initialMaxRange;
            attempts = attemptsNumber;
            totalPrize = 0;
            maxPrize = initialMaxPrize;
            avgPrize = initialAvgPrize;
            minPrize = initialMinPrize;
            possiblePrize = maxPrize;
            randomNumber = Math.floor(Math.random() * initialMaxRange);
          }
          //User has some attempts
        } else {
          attempts -= 1;
          possiblePrize /= prizeMultValue;
        }
      }
    } else {
        //If user entered incorect number alert will be shown
      alert(`Enter number from 0 to ${randomMaxRange - 1}`);
    }
  }
}
