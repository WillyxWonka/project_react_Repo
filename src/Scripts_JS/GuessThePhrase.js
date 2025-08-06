import wordBank from "../JSON/WordBank.json"
import { GAME_CONFIG } from "./gameConfig";

const {GAME_STATES} = GAME_CONFIG;
//sets initial state
export const SetAnswerField = (curAnswer, curWord) => {
    for(let i = 0; i < curWord.length; i++)
    {
        curAnswer[i] = "?" 
    }
    return  curAnswer.join("");
}


export const setLetters = (wd_FreeLetters, alphabetState) => {

    let freeLettersArray = [];
    let tempBet = alphabetState;

    for(let i = 0; i < wd_FreeLetters; i++)
    {
        let randLetter = Math.floor(Math.random() * tempBet.length); // get random value between array length
        freeLettersArray.push(tempBet[randLetter]);
        tempBet = tempBet.filter(letter => letter != tempBet[randLetter]);
    }  
    const returnFreeObj = () => {
    //(...Object.fromEntries(freeLettersArray.map(letter => [letter, true])))
        const entries = freeLettersArray.map(letter => [letter, true]);
        const obj = Object.fromEntries(entries);
        return obj;
    };
    return returnFreeObj;
}


export const GenerateWord = () => {
    const {Difficulty} = GAME_CONFIG; // this is set through setdifficulty hook and Game-config communication
    const _difficulty = Object.keys(Difficulty).find((key => Difficulty[key]));

    const tempKeys = Object.keys(wordBank);
    const randKey = Math.floor(Math.random() * tempKeys.length);
    const randCat = tempKeys[randKey];
    const randWord = Math.floor(Math.random() * wordBank[randCat][_difficulty].length);
    
    return({"obj_word": wordBank[randCat][_difficulty][randWord].word, "obj_difficulty": wordBank[randCat][_difficulty][randWord].difficulty, "obj_hint":randCat})

}


// !!THIS IS WHERE CAN POSSIBLLY MAKE CORRECT WORD WITHOUT GUESSING IN EVENT THAT USER GUESSES ALL CORRECT LETTERS!! update: did implement did it break everything?
export const updateanswer = (unavailableLetters, curWord, curAnswer) => {

    let newTempAnswerArray = [...curAnswer];
    let newTempUnLetters = Object.keys(unavailableLetters);

    for(let i = 0; i < newTempUnLetters.length; i++)
    {
        for(let j = 0; j < curWord.length; j++)
        {
            if(newTempUnLetters[i] == curWord[j])
            {
                newTempAnswerArray[j] = curWord[j];
            }
            else
            newTempAnswerArray[j] = newTempAnswerArray[j]; // keeps it a "?""
        }
    }
    if(newTempAnswerArray.join("") === curWord)
    {
        
    }
    return newTempAnswerArray;
} 


export const SetDifficulty = (Difficulty) => { // currently difficulty is random and not selection or point based

    Object.keys(Difficulty).forEach(key => Difficulty[key] = false); // sets all false
    const tempKeys = Object.keys(Difficulty); // isolates keys as an array
    const rand = Math.floor(Math.random() * Object.keys(Difficulty).length); 

    Object.keys(Difficulty).forEach(key =>{ 
        if(key === tempKeys[rand]){
        Difficulty[key] = true}
        })
    return(Object.keys(Difficulty).find(key => Difficulty[key]));
}


export function OnGameStateFINAL(setCurGameState){
    setCurGameState(GAME_STATES.FINAL);
    startFinalTimer();

  // Instead of relying on curGameState, act here   
  // because you know you are going to FINAL

} // use this and make a gamestate object so strings arent mispelled


function startFinalTimer(){
    
}
function GuessCorrect(){
    //stop timer
}
function Wrong(){
    //stop timer
}







export function BubbleSort(){
    let list = [1,5,8,4,6,-2,-10,100,7,-7,8];
    let i =1;
    let k = 1;
    alert(list);
    while(k < list.length)
    {
        for(let j =i-1; i < list.length ; i++){
            if(list[j] > list[i])
            {
                const tmp = list[i];
                list[i] = list[j];
                list[j] = tmp;
            }
        }
        k++;
        i = k;
    }
    alert(list);
}
