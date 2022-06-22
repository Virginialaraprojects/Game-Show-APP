/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(missed,phrases,activePhrase){
        this.missed= 0;
    //array of phrases that are used in the fame.
        this.phrases=[
        new Phrase('Peace begins with smile'),
        new Phrase('Nothing is impossible'),
        new Phrase('Chose to shine'),
        new Phrase('One day at a time'),
        new Phrase('I failed my way to sucess'),
    ];
        this.activePhrase= null;
    };
    //selects a random phrase from the phrase array
    getRandomPhrase(){
        let randomPhrase=this.phrases[Math.floor(Math.random()*this.phrases.length)];
        return randomPhrase;
    };
    startGame(){
    //displays the random phrase to the player
        const screenOverlay=document.getElementById('overlay');
        screenOverlay.style.display='none';
        this.activePhrase=this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay()
       
    };
    //checks to see if the button clicked by the player matches the letter on phrase
    //@param{HTMLButtonElement}- the click button element
    handleInteraction(button){
        const guessedLetter= this.activePhrase.checkLetter(button.textContent);
            if(guessedLetter){
                button.disabled= true;
                button.className='chosen'
                this.activePhrase.showMatchedLetter(button.textContent);

                if(this.checkForWin()){
                    this.gameOver(true)
                };
                }else{
                    button.className='wrong';
                    if(button.disabled!==true){
                        button.disabled= true;
                        this.removeLife();
                    }
                }
            };


//checks for the winning move
//@return {boolean} true if fame has been won, false if game didn'y win
    checkForWin(){
        const classLetter= document.getElementsByClassName('letter');
        const classShow =document.getElementsByClassName('show')
            if(classLetter.length === classShow.length){
                return true;
            }else{
                return false;
            }
    };
//Increase the value of missed property
//remove the life from the scoreboard
//checks if player has remaining lives and ends the game if not
    removeLife(){
        const imageHeart=document.querySelectorAll('.tries img');
        imageHeart[this.missed].src='images/lostHeart.png';
        this.missed += 1;
            if(this.missed >=5){
                 this.gameOver();
            }   
    };
//Displays the game over message
//@param {boolean} gameWon-Wheater or not the user won the game.
    gameOver(gameWon){
        const screenOverlay=document.getElementById('overlay');
        screenOverlay.style.display='';
            if(gameWon){
                document.getElementById('game-over-message').innerHTML='Congratulations, You won!'
                screenOverlay.className='win';
                this.resetGame();
            }else{
                document.getElementById('game-over-message').innerHTML='Sorry better luck next time!'
                screenOverlay.className='lose';
                this.resetGame();
            }
    };
//resets the game win or lose
    resetGame(){
        const phraseDiv=document.getElementById('phrase');
// removes the li elemennts
        phraseDiv.querySelector('ul').innerHTML='';

        this.missed=0;

        const qwerty=document.getElementById('qwerty');
        const button=qwerty.getElementsByTagName('button');

        for(let i=0; i<button.length; i++){
            button[i].disabled= false;
            button[i].classList.remove('chosen');
            button[i].classList.remove('wrong');
        }
//resets all the heart images
        const hearts=document.getElementsByClassName('tries');
        for(let i=0;i<hearts.length; i++ ){
            let image= hearts[i].firstElementChild;
            image.src="images/liveHeart.png";
        }
    };
}





