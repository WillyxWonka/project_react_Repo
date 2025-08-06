import { createContext, useContext, useState } from "react";
import * as GTP from "../Scripts_JS/GuessThePhrase.js";
import {GAME_CONFIG } from '../Scripts_JS/gameConfig.js';
import { searchWords } from "../Services/api.js";

const GameContext = createContext();

export function GameProvider({ children }){
  
  const {freeLetters, turnMax, ALPHABET, Difficulty,GAME_STATES } = GAME_CONFIG;

  const [word, setWord] = useState(GTP.GenerateWord());
  const [curGameState, setCurGameState] = useState(GAME_STATES.GAME);
  const [curHint, setCurHint] = useState("");
  const [hintVis, setHintVis] = useState(true);
  const [alphabetState, setAlphabetState] = useState(ALPHABET);
  const [selectedLetters, setSelectedLetters] = useState({});
  const [unavailableLetters, setUnavailableLetters] = useState({});
  const [curAnswer, setCurAnswer] = useState([]);
  const [turnCount, setTurnCount] = useState(turnMax);
  const [curFinalGuess, setCurFinalGuess] = useState([]);
  const [curDifficulty, setCurDifficulty] = useState(Object.keys(Difficulty).find(key => Difficulty[key]));

function NewWord(){
  setAlphabetState(ALPHABET);
  setSelectedLetters({});
  setUnavailableLetters({});
  setCurAnswer([]);
  setTurnCount(turnMax);
  const tempWord = GTP.GenerateWord();
  setWord(tempWord);
  setUnavailableLetters(GTP.setLetters(freeLetters, ALPHABET));
  setCurAnswer(GTP.SetAnswerField([], tempWord.obj_word));

  setCurGameState("GAME"); /// maybe put in use effect, or context for theme
}


function GuessWord(){
  setCurGameState(curGameState === "GUESSING" ? "GAME" : "GUESSING");
}


function onAlphabetKeyBTN(e){ // button mouse clicked
    setSelectedLetters((prev) =>{
      if(!prev[e.target.id] && !Object.keys(unavailableLetters).includes(e.target.id))
      {
        return {...prev, [e.target.id]: true};
      }
      else
      {
        const {[e.target.id]:_, ...left } = prev;
        return {...left}
      }
    }); 
}


function onAlphabetKey(e){ //keyboard press

    setSelectedLetters((prev) =>{
       if(!prev[e.key] && !Object.keys(unavailableLetters).includes(e.key))
       {
        return {...prev, [e.key] : !prev[e.key]}
       }
       else{
        const {[e.key]:_, ...left} = prev;
        return left;
       }
      //...prev, [e.key] : !prev[e.key]    
  }); 
}


function onEnterKey(){
  SubmitFromGame();
}


function onBackspaceKey(){
  
    setSelectedLetters((prev) =>{
      const keys = Object.keys(prev);
      const k = keys[keys.length -1];
      const {[k]:_, ...left} = prev;

      //alert(JSON.stringify(left) +  JSON.stringify(prev));
      return left;
    }); 
}


function LetterClickedALT(e)
{
    setCurFinalGuess(() => [...curFinalGuess ,e.target.id].join("")); 
}


async function Hint() {
  const results = await searchWords(word.obj_word, "definitions"); // API Call
  setCurHint(results);
  setHintVis(!hintVis);
}


function SubmitFromGame(){

    if(Object.keys(selectedLetters).length > 0){
    setUnavailableLetters((prev) =>({
        ...prev, ...selectedLetters
    })); 
    setSelectedLetters({});
    }

    setTurnCount(() => turnCount-1);
}


function SubmitFromFinal(){

}


function debugbtn(){
}


return (
  <GameContext.Provider
    value={{

      // States
      word, 
      curGameState, setCurGameState,
      curHint, 
      hintVis,
      alphabetState, setAlphabetState,
      selectedLetters, setSelectedLetters,
      unavailableLetters, setUnavailableLetters,
      curAnswer, setCurAnswer,
      turnCount, setTurnCount,
      curFinalGuess, setCurFinalGuess,
      freeLetters,
      curDifficulty, setCurDifficulty,
      
      // Functions
      NewWord,
      GuessWord,
      Hint,
      debugbtn,
      SubmitFromGame,
      SubmitFromFinal,
      onAlphabetKeyBTN,
      LetterClickedALT,
      onAlphabetKey,
      onEnterKey, 
      onBackspaceKey
    }}
  >
    {children}
  </GameContext.Provider>
);
}

export function useGame() {
  return useContext(GameContext);
}
