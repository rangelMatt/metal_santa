

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
    
