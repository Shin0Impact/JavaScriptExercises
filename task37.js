const Secret=42;

function checkGuess(guess){
    for(let i=0; i<guess.length; i++){
        if(guess[i] === Secret){
            console.log(`Correct!`)
        }else{
            guess[i] >= Secret ? console.log(`Too high`):console.log(`Too low`);
        }
    }
}
const guesses=[10, 60, 42];
checkGuess(guesses);