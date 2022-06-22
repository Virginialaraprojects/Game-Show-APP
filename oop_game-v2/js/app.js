/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Test Code:

let game= '';
const startBtn=document.getElementById("btn__reset");
//create an event listner to detect  a click on the button to start the game.
startBtn.addEventListener('click',(e)=>{
    game=new Game();
    game.startGame();
})

//Handles onscreen keyboard button clicks
//@param(HTMLButtonElement) button-The clicked button element
const qwerty=document.getElementById('qwerty');

qwerty.addEventListener('click',(e)=>{
    if(e.target.tagName === 'BUTTON'){
        game. handleInteraction(e.target);
    }
})















/*const phrase = new Phrase('Peace begins with smile');
const game = new Game(0,'Peace begins with smile','One day at a time');*/


/*const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);*/


/*const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});*/


/*const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
*/

/*const game = new Game();
const randomPhrase = game.getRandomPhrase();

const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();*/

/*const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);*/
