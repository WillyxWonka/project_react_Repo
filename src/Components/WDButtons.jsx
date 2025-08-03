import * as GTP from '../Scripts_JS/GuessThePhrase.js';
import { searchWords } from "../Services/api.js";

function WDButtons({
  word, curGameState, setCurGameState, curHint, setCurHint, hintVis, setHintVis, setAlphabetState, 
  setSelectedLetters, setUnavailableLetters, setCurAnswer, setTurnCount, setWord, freeLetters
}) {
  async function Hint() {
    const results = await searchWords(word.obj_word, "definitions"); // API Call
    setCurHint(results);
    setHintVis(!hintVis);
  }

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

  function GuessWord() {
    setCurGameState(curGameState === "GUESSING" ? "GAME" : "GUESSING");
  }

  return (
    <section className="secondary-buttons">
      <button
        className="guess-word-btn"
        id="guess-word-btn"
        onClick={GuessWord}
        disabled={curGameState === "FINAL"}
      >
        {curGameState === "GUESSING" ? "Return" : "Guess Word" }
      </button>

      <button className="new-word-btn" id="new-word-btn" onClick={NewWord} disabled={curGameState === "FINAL"}>
        New Word
      </button>

      <button className="hint-btn" id="hint-btn" onClick={Hint}>
        Hint
      </button>

      <textarea value={curHint} disabled={hintVis}></textarea>
      
    </section>
  );
}

export default WDButtons;