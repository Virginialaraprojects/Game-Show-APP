/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Step2



class Phrase{
//gets the phrase and converts letters to all lowercase.
    constructor(phrase){
        this.phrase= phrase.toLowerCase();
    };
// add method to display random phrase in an individual listitem for each letter and space.
    addPhraseToDisplay(){
        const ul=document.querySelector('#phrase ul');
        const letters= this.phrase.split('');
       
        for(let i=0; i<letters.length; i++){
            const listItem=document.createElement('li');    
            listItem.textContent=letters[i];
                if(letters[i] === ' '){
                    listItem.classList.add('space');
                }else{
                    listItem.classList.add('letter'); 
                 }
            ul.appendChild(listItem);
        }
    };
//checks to see if the letter matches a letter in the phrase
//@param(string) letter-letter to check
    checkLetter(letter){
        return this.phrase.includes(letter);
    };
//reveals the letter on the board that matches the player selection.
//@param (string) letter-letter to display  
    showMatchedLetter(letter){
        const playerpick=document.querySelectorAll('#phrase li');

        for (let i=0; i<playerpick.length;i++){
            let correctListItem= playerpick[i];
                if(correctListItem.textContent=== letter){
                    correctListItem.classList.add('show');
                } else{
                    correctListItem.classList.add('hide');
                }
        }
    };


}

