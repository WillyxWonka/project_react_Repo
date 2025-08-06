import { useState, useRef, useEffect } from "react";
import { useGame } from '../Components/GameContext.js';
import { GAME_CONFIG } from "../Scripts_JS/gameConfig.js";

function GTP_Timer(){

const {curGameState} = useGame();
const {GAME_STATES} = GAME_CONFIG;

const [timeState, setTimeState] = useState(0);
const intervalRef =useRef(null);
let boool = false;

  function FormatTime(){
      let seconds = Math.floor(timeState/(1000) %60).toString().padStart(1, "0");
      let millisec = Math.floor((timeState%1000)/10).toString().padStart(2, "0");
      return `${seconds}:${millisec}`}

  function startTimer(val){
    boool = true;
    if(boool){
      intervalRef.current = setInterval(() =>{
        setTimeState((tState) => {    
          if(tState <= 0){ 
            boool=false;
            setTimeState(0)
            clearInterval(intervalRef.current); 
          }
        return tState - 10 })}, 10);

        setTimeState(val);
    }};

  useEffect(() =>{
    if(curGameState === GAME_STATES.FINAL){
      startTimer(10000);
    }
  }, [curGameState]);

  return(
    <>
      {FormatTime()}
    </>
  )
}
export default GTP_Timer;