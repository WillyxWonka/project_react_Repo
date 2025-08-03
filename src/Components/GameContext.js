import { createContext, useContext, useState } from "react";
import * as GTP from "../Scripts_JS/GuessThePhrase.js";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [word, setWord] = useState(GTP.TestGenerateWord());
  const [curGameState, setCurGameState] = useState("GAME");
  const [curHint, setCurHint] = useState("");
  const [hintVis, setHintVis] = useState(true);
  const [alphabetState, setAlphabetState] = useState(GTP.alphabet);
  const [selectedLetters, setSelectedLetters] = useState({});
  const [unavailableLetters, setUnavailableLetters] = useState({});
  const [curAnswer, setCurAnswer] = useState([]);
  const [turnCount, setTurnCount] = useState(1);
  const freeLetters = 5;

  function NewWord() {
    setAlphabetState(GTP.alphabet);
    setSelectedLetters({});
    setUnavailableLetters({});
    setCurAnswer([]);
    setTurnCount(1);
    const tempWord = GTP.TestGenerateWord();
    setWord(tempWord);
    setUnavailableLetters(GTP.setLetters(freeLetters, GTP.alphabet));
    setCurAnswer(GTP.SetAnswerField([], tempWord.obj_word));
  }

  return (
    <GameContext.Provider value={{ word, curGameState, setCurGameState, NewWord }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
