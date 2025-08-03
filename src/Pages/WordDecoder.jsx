import { useEffect, useState,useRef} from "react";
import Header from "../Components/Page-Header";
import '../Styles_CSS/WD.css';
import * as GTP from '../Scripts_JS/GuessThePhrase.js';
import { useGame } from '../Components/GameContext.js';
import {GAME_CONFIG } from '../Scripts_JS/gameConfig.js';

function WordDecoder(){
const{ALPHABET, Difficulty} = GAME_CONFIG;
  
const { word, curGameState, setCurGameState,curHint, hintVis, alphabetState, setAlphabetState,selectedLetters,unavailableLetters, 
setUnavailableLetters,curAnswer, setCurAnswer,turnCount, setTurnCount,freeLetters, NewWord, Hint,GuessWord, debugbtn, SubmitFromFinal, 
SubmitFromGame, curFinalGuess, setCurFinalGuess, LetterClicked, LetterClickedALT} = useGame(); //Context // separate this out

const [buttonState, setButtonState] = useState({});
const [points, setPoints] = useState(0);
const hasRun = useRef(false);


//watches curGamestate and runs code on specific state
useEffect(() => {
    switch(curGameState)
    {
        case "GAME":
            setCurFinalGuess([]);
            break;
        case "FINAL":
            //start timer
            //turn off all but hint and submit buttons
            break;
        case "RESET":
            //adjust css for correct or wrong
            //turn off all buttons besides new word

            break;
    }
}, [curGameState]); 
//Watches SelectedLetters to switch State
useEffect(() =>{
}, [selectedLetters]);
//disables button when added to unavailable state
useEffect(() => {
    setButtonState({
        ...unavailableLetters  
    });

    setAlphabetState(
        alphabetState.filter((letter) =>{
            if(Object.keys(unavailableLetters).includes(letter))
            {return false;}
            else return true;
    }));

    setCurAnswer(GTP.updateanswer(unavailableLetters, word.obj_word, curAnswer)); 
}, [unavailableLetters])
//sets turncount
useEffect(() => {
    if(turnCount === 0){
        setTurnCount(0);
        setCurGameState("FINAL");
        return;
    }
}, [turnCount])
//runs once at mount
useEffect(() => {
    if(!hasRun.current){
        setUnavailableLetters(GTP.setLetters(freeLetters, alphabetState));
        setCurAnswer(GTP.SetAnswerField(curAnswer, word.obj_word));
        hasRun.current = true;
    }
}, []);


return(
    <>
        <Header> Standard Mode! </Header>
        <button onClick={debugbtn}>debug</button>
        <main>

            <div className="FinalGuessInputCont">
                <div id = "FinalGuessInputFieldIndicator">{curFinalGuess}</div>
            </div>

            <div id="Phrase">Guess the {word.obj_hint}, {word.obj_difficulty}</div>   
            <div id="CorrectLetters">{curAnswer}</div>

            <div id="" style={{textAlign: 'center'}}>
                Test Unavailable Letters:{<span style={{color: 'goldenrod'}}>
                    {Object.keys(unavailableLetters)}__{word.obj_word}___{alphabetState}             
                </span>}
                </div>  
            
            <section className="core-game-space">
                <fieldset className="LetterButtons" id="LetterButtons">

                    <div id="LetterButtonsHeader"></div>
                    <div id='Timer' aria-label="Timer">Timer</div>  

                    {curGameState === "GAME" ? //this should theoretically work when FINAL gamestate is initiated
                        ALPHABET?.map((letter, index) =>(
                            <button 
                            key={index} 
                            type="button" 
                            className={['alphabetbtn', selectedLetters[letter] ? 'btn-selected' : 'btn-unselected', 
                            unavailableLetters[letter] ? 'btn-unavailable' : ''].join(' ')} // if is in unavailble remove selected tag 
                            disabled={buttonState[letter]}//assign this to a className state
                            id={ALPHABET[index]}
                            onClick={(e)=>{LetterClicked(e)}}
                            >{letter.toUpperCase()}</button>
                    )) :           
                        ALPHABET?.map((letter, index) =>(
                            <button 
                            key={index} 
                            type="button" 
                            className={['alphabetbtn','btn-unselected'].join(' ')}
                            id={ALPHABET[index]}
                            onClick={(e)=>{LetterClickedALT(e)}}
                            >{letter.toUpperCase()}</button>
                        ))  
                    }   

                    <section className="main-buttons">
                        <button type="button" className="undo-btn" id="Undobtn"  aria-pressed="false" >Undo</button>
                        <button type="button" className="submit-btn" id="Submitbtn" onClick={curGameState === "GAME" ? 
                        () => SubmitFromGame(): () => SubmitFromFinal()}>Submit</button>
                    </section>    

                </fieldset>

            </section>
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

        </main>
        
        <aside aria-label="Game information, stats">
            <div className="game-info"> 
                <div id='TurnsUsed' aria-label="Turns info">
                    Turns: {turnCount}
                </div>   
                <div id='Points' aria-label="Points info">
                    Points: {points}
                </div>  
                <div id='curDifficulty' aria-label="Difficulty info">
                    Difficulty: {Difficulty[0]}
                </div>  
                <div id='FreeLetters' aria-label="Free Letters info">
                    Free Letters: {freeLetters}
                </div>  
            </div>
        </aside>

        <div id="DataSourceString" aria-hidden="true"> 
            Easy
        </div>  
    </>
    );
}
export default WordDecoder;


/*
const [curAnswer, setCurAnswer] = useState([]);

const [curGameState, setCurGameState] = useState("GAME"); //["GAME", "SELECTING", "GUESSING", "FINAL", RESET]
const [selectedLetters, setSelectedLetters] = useState({}); // {button id : current className/tag}
const [unavailableLetters, setUnavailableLetters] = useState({});
const [alphabetState, setAlphabetState] = useState(ALPHABET); //letter buttons display // fix this 
const [TurnCount, setTurnCount] = useState(turnMax);
const [word, setWord] = useState(GTP.GenerateWord);


const [hintVis, setHintVis] = useState(true);
const [curHint, setCurHint] = useState("");//API Stuff 
*/

/*
function NewWord() {
    setAlphabetState(ALPHABET);
    setSelectedLetters({});
    setUnavailableLetters({});
    setCurAnswer([]);
    setTurnCount(1);
    const tempWord = GTP.GenerateWord();
    setWord(tempWord);
    setUnavailableLetters(GTP.setLetters(freeLetters, ALPHABET));
    setCurAnswer(GTP.SetAnswerField([], tempWord.obj_word));
  }
*/


/*
    const {
    word, setWord,
    curGameState, setCurGameState,
    curHint, setCurHint,
    hintVis, setHintVis,
    alphabetState, setAlphabetState,
    selectedLetters, setSelectedLetters,
    unavailableLetters, setUnavailableLetters,
    curAnswer, setCurAnswer,
    turnCount, setTurnCount,
    //freeLetters,
    NewWord,
    Hint,
    GuessWord,
    gameConfig,
    setCurFinalGuess,
    curFinalGuess,
    TurnCount,
    setButtonState,
    buttonState,
    hasRun,
    } = useGame();
*/

/*
        <WDButtons
    word={word} curGameState={curGameState} setCurGameState={setCurGameState} curHint={curHint} setCurHint={setCurHint} hintVis={hintVis} 
    setHintVis={setHintVis} setAlphabetState={setAlphabetState} setSelectedLetters={setSelectedLetters} setUnavailableLetters={setUnavailableLetters}
    setCurAnswer={setCurAnswer} setTurnCount={setTurnCount} setWord={setWord} freeLetters={freeLetters} />
*/

/*
async function Hint(){
const results = await searchWords(word.obj_word, "definitions"); // Call API
setCurHint(results); // Store API result in state
setHintVis(!hintVis);
};
function NewWord(){ 
setAlphabetState(ALPHABET);       
setSelectedLetters({});
setUnavailableLetters({});
setCurAnswer([]);
setTurnCount(1);

const tempWord =GTP.GenerateWord()
setWord(tempWord);
setUnavailableLetters(GTP.setLetters(freeLetters, ALPHABET));
setCurAnswer(GTP.SetAnswerField([], tempWord.obj_word));
}
function GuessWord(){

setCurGameState(() => curGameState === "GUESSING" ? "GAME" : "GUESSING");
}
*/
/*
    <section className="secondary-buttons">
            <button className="guess-word-btn" id="guess-word-btn" 
            onClick={() => GuessWord()}
            disabled={curGameState === "SELECTING" ? true : false}>
                {curGameState ==="GUESSING" ? "Return" : "Guess Word" } </button>

            <button className="new-word-btn" id="new-word-btn" 
            onClick={() => NewWord()}>
                    New Word</button>
            <button className="new-word-btn" id="new-word-btn" 
            onClick={() => Hint()}>
                    Hint</button>
            <textarea value={curHint} disabled={hintVis}></textarea>
    </section>
*/