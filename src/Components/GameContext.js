import { createContext, useContext, useState } from "react";
import * as GTP from "../Scripts_JS/GuessThePhrase.js";
import {GAME_CONFIG } from '../Scripts_JS/gameConfig.js';
import { searchWords } from "../Services/api.js";

const GameContext = createContext();

export function GameProvider({ children }) {
  const {freeLetters, turnMax, ALPHABET } = GAME_CONFIG;

  const [word, setWord] = useState(GTP.GenerateWord());
  const [curGameState, setCurGameState] = useState("GAME");
  const [curHint, setCurHint] = useState("");
  const [hintVis, setHintVis] = useState(true);
  const [alphabetState, setAlphabetState] = useState(ALPHABET);
  const [selectedLetters, setSelectedLetters] = useState({});
  const [unavailableLetters, setUnavailableLetters] = useState({});
  const [curAnswer, setCurAnswer] = useState([]);
  const [turnCount, setTurnCount] = useState(turnMax);
  const [curFinalGuess, setCurFinalGuess] = useState([]);

  function NewWord() {
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


  function GuessWord() {
    setCurGameState(curGameState === "GUESSING" ? "GAME" : "GUESSING");
  }


  function LetterClicked(e)
  {
      setSelectedLetters((prev) =>({
          ...prev, [e.target.id] : !prev[e.target.id]
      })); 
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
      const curAnswerString =  curAnswer.flat().join('');
      const curWordString = word.obj_word
  
      if(Object.keys(selectedLetters).length > 0){ 
      setUnavailableLetters((prev) =>({
          ...prev, ...selectedLetters
      })); 
      setSelectedLetters({});
      }
      setTurnCount(() => turnCount-1);
      if(curAnswerString === curWordString)
      {
          setCurGameState("RESET")
      }
  }


  function SubmitFromFinal(){
      if(curFinalGuess === word.obj_word)
      {
          alert("CORRECT" );
          setCurGameState("RESET");
          //set gamestate reset
          //add theme context for states
      }
      else{
          //alert("Wrong   " + curFinalGuess + "  " + word.obj_word)
      }
  }
  


function debugbtn(){
  //lert("hello ipsum")
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

        // Functions
        NewWord,
        GuessWord,
        Hint,
        debugbtn,
        SubmitFromGame,
        SubmitFromFinal,
        LetterClicked,
        LetterClickedALT
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
