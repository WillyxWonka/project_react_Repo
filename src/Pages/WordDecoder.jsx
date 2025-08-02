import { useEffect, useState,useRef} from "react";
import Header from "../Components/Page-Header";
import '../Styles_CSS/WD.css';
import * as GTP from '../Scripts_JS/GuessThePhrase.js';
import GTP_Timer from "../Components/GTP_Timer.jsx";
import wordBank from "../JSON/WordBank.json"
import { searchWords } from "../Services/api.js";

function WordDecoder(){
    let freeLetters = 5;
    let Difficulty = 'Easy';
    let TurnMax = 3;

    const [curAnswer, setCurAnswer] = useState([]);
    const [buttonState, setButtonState] = useState({});

    const [curGameState, setCurGameState] = useState("GAME"); //["GAME", "SELECTING", "GUESSING", "FINAL"]

    const [selectedLetters, setSelectedLetters] = useState({}); // {button id : current className/tag}
    const [unavailableLetters, setUnavailableLetters] = useState({});

    const [alphabetState, setAlphabetState] = useState(GTP.alphabet); //letter buttons display // fix this 
    const [TurnCount, setTurnCount] = useState(1);
    //const {_word, _hint} = GTP.TestGenerateWord(); //currently separate from actually word
    //const [word, setWord] = useState(() => GTP.GenerateWord());
    const [word, setWord] = useState(GTP.TestGenerateWord);
    const hasRun = useRef(false);
 
const [hintVis, setHintVis] = useState(true);
const [curHint, setCurHint] = useState("");//API Stuff

    

    async function Hint(){
        const results = await searchWords(word.obj_word, "definitions"); // Call API
        setCurHint(results); // Store API result in state
        setHintVis(!hintVis);
    };

    function LetterClicked(e)
    {
        setSelectedLetters((prev) =>({
            ...prev, [e.target.id] : !prev[e.target.id]
        })); 
    }
    function SubmitButton(){
        //adds current selected letters to unavailable
        if(Object.keys(selectedLetters).length > 0){ 
        setUnavailableLetters((prev) =>({
            ...prev, ...selectedLetters
        })); 
        setSelectedLetters({});
        }
        setTurnCount(() => TurnCount < TurnMax ? TurnCount+1 : TurnMax);
    }
    
    function NewWord(){ 
        setAlphabetState(GTP.alphabet);       
        setSelectedLetters({});
        setUnavailableLetters({});
        setCurAnswer([]);
        setTurnCount(1);

        const tempWord =GTP.TestGenerateWord()
        setWord(tempWord);
        setUnavailableLetters(GTP.setLetters(freeLetters, GTP.alphabet));
        setCurAnswer(GTP.SetAnswerField([], tempWord.obj_word));
    }

    function GuessWord(){

        setCurGameState(() => curGameState === "GUESSING" ? "GAME" : "GUESSING");
    }


    //watches curGamestate and runs code on specific state
    useEffect(() => {
        switch(curGameState)
        {
            case "GAME":
                break;
            case "GUESSING":   
                break;
            case "SELECTING":
                break;
        }
        //debugbtn();    
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
        if(TurnCount > TurnMax){
            alert("Turncount max reached change state")
        }
    }, [TurnCount])
    //runs once at mount
    useEffect(() => {
        if(!hasRun.current){
            setUnavailableLetters(GTP.setLetters(freeLetters, alphabetState));
            setCurAnswer(GTP.SetAnswerField(curAnswer, word.obj_word));
            hasRun.current = true;
        }
    }, []);

    function debugbtn(){
    alert(curAnswer + "  "+ word.obj_word)
    //const {word, hint} = GTP.TestGenerateWord();
    //alert(JSON.stringify(word + " : " + hint));
    }
    /*const debugbtn = async () => {
        const results = await searchWords(_word, hint); // Call API
        setWords(results); // Store API result in state
    };*/
    return(
    <>
        <Header> Standard Mode! </Header>
        <button onClick={debugbtn}>debug</button>
        <main>

            <div className="FinalGuessInputCont">
                <div id = "FinalGuessInputFieldIndicator"></div>
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

                        {GTP.alphabet.map((letter, index) =>(
                            <button 
                            key={index} 
                            type="button" 
                            className={['alphabetbtn', selectedLetters[letter] ? 'btn-selected' : 'btn-unselected', 
                            unavailableLetters[letter] ? 'btn-unavailable' : ''].join(' ')} // if is in unavailble remove selected tag 
                            disabled={buttonState[letter]}//assign this to a className state
                            id={GTP.alphabet[index]}
                            onClick={(e)=>{LetterClicked(e)}}
                            >{letter.toUpperCase()}</button>
                        ))}
                        
                        <section className="main-buttons">

                            <button type="button" className="undo-btn" id="Undobtn"  aria-pressed="false" >Undo</button>
                            <button type="button" className="submit-btn" id="Submitbtn" onClick={() => SubmitButton()}>Submit</button>
                        </section>    
                </fieldset>
            </section>

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
        </main>
        
        <aside aria-label="Game information, stats">
            <div className="game-info"> 
                <div id='TurnsUsed' aria-label="Turns info">
                    Turn: {TurnCount}/{TurnMax}
                </div>   
                <div id='Points' aria-label="Points info">
                    Points: 0
                </div>  
                <div id='curDifficulty' aria-label="Difficulty info">
                    Difficulty: {Difficulty}
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

    function debugbtn(){
        //alert(curGameState);
       const newGameState = Object.fromEntries(
        Object.keys(gameState).map(key => [key, key === "final"])
        );

        setGameState(newGameState);
        const activeKey = Object.entries(gameState).find(([key, value])=> value === true)
        setCurGameState(activeKey[0])

        alert(JSON.stringify(gameState) + "  " + curGameState)
        
        //alert( Object.entries(gameState).find(([key, value]) =>(key === "selecting")
        //));
    }

*/
//const [gameState, setGameState] = useState({"game": true, "selecting": false, "guessing":false, "final":false});  //["game", "letters-selected", "guessing-word", "final-guess"] this is what the magic number floating around the javascript file is referencing
/*
    //sets curGamestate when GameState is changed
    useEffect(() => {
    setCurGameState(() => {
    const activeKey = Object.entries(gameState).find(([key, val]) => val === true);
    return activeKey[0];
    });
    }, [gameState]);
    */