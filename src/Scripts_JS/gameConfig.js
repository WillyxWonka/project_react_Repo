// gameConfig.js
export const GAME_CONFIG = {
  freeLetters: 5,
  turnMax: 3,

  Difficulty: ["easy", "medium", "hard" ],


  ALPHABET: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],


  categories: ['Fruit', 'Animal'],
  
  api: {
    dictionaryEndpoint: 'https://api.dictionaryapi.dev/api/v2/entries/en'
  }
};


/*

function goToFinal() {
  setCurGameState(GAME_STATES.FINAL);
  // Instead of relying on curGameState, act here
  // because you know you are going to FINAL
  startFinalTimer();
} // use this and make a gamestate object so strings arent mispelled

//Game

initial state



//Selecting
entered from pressing a button




//Guessing
entered from pushing guess word button
uses alternate hook for selected letters to not lose prior selected letters if choose to not submit



//Final
entered when all turns are used
starts timer
uses same hook from guess words for letter selection

//Postsumbitions
    -guess right


    -gusswrong

  pressing new word should reset all hooks and restart the gameplay loop
*/