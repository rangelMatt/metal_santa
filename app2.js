

function askUserQuestion(){
    let userNameInside = prompt('Please Enter your Name.');
    if (userNameInside == 'Matt'){
        document.write(`Welcome ${userNameInside}!`)
      } else {
          document.write(`Welcome ${userNameInside}`)
      }
    // return userNameInside;
}
    

function secretMessage(){

    let userAnswer = prompt('Do you want to ROCK?! (yes or no)')

    if (userAnswer.toLowerCase() == "yes") {
        if(userAnswer == "yes") {
            document.write('Santa is the SLEIGHER!!!')
        }
    }
}


    // console.log(userNameOutside)

    function anotherPicture() {

        let anotherPhoto = prompt('Does Santa throw horns?')
    
        let picURL = "https://previews.123rf.com/images/deagreez/deagreez1810/deagreez181000040/109885875-heavy-metal-rock-on-stylish-grandfather-mature-aged-beard-santa.jpg"
        
        if (anotherPhoto.toLowerCase() == "yes") {
            document.write('<img src="' + picURL +'">')
        }
    }
    
function guessingGame() {
    let userAnswer = prompt('How many reindeer does Santa have?');
    let correctAnswer = 9; //may come back and provide different number
    let attempts = 8;

    for (let i = 1; i < attempts; i++) {
        while(userAnswer < 1 || userAnswer > 100) {
            userAnswer = prompt('Please Try Again! A number 1-100');
        }
        if (userAnswer == correctAnswer) {
            alert('YOU WON!');
            document.write("Game Winner")
            break;
        } else if (userAnswer > correctAnswer) {
            userAnswer = prompt('TOO HIGH! Please, try again.')
        } else if (userAnswer < correctAnswer) {
            userAnswer = prompt('TOO LOW! Please, try again.')
        }
        if(i == 7) {
            alert(`The correct answer was ${correctAnswer}`)
            document.write("Game Loser");
        }
    }
}