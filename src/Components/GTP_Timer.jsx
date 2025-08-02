import { useState, useEffect, useRef } from "react";

function GTP_Timer(){

const [timeState, setTimeState] = useState(5000);
const [timerOn, setTimerOn] = useState(false);
const intervalRef =useRef(null);
let boool = false;

function FormatTime()
{
    let minutes = Math.floor(timeState/(1000 * 60) %60).toString()
    .padStart(2, "0");
    let seconds = Math.floor(timeState/(1000) %60).toString()
    .padStart(2, "0");
    let millisec = Math.floor((timeState%1000)/10).toString()
    .padStart(2, "0");
    return `${minutes}:${seconds}:${millisec}` ;
}

function startTimer(val)
{
  boool = true;
  if(boool){
    intervalRef.current = setInterval(() =>
    {
      setTimeState((tState) => {    
        
        if(tState <= 0){ 
          boool=false;
          setTimeState(5000)
          clearInterval(intervalRef.current); }
      return tState - 10 })}, 10);
      setTimeState(val);
  }
}

/* useEffect(() =>{
  if(timerOn){
    intervalRef.current = setInterval(() =>
    {
      setTimeState((tState) => {    
        
        if(tState <= 0){ 
          setTimerOn(false)
          clearInterval(intervalRef.current);
            return }

      return tState - 10 })}, 10);\
}}, []); */


  return(
    <>
    <button onClick={() => startTimer(5000)}> press</button>
      <div name="time" style={{display: 'flex', margin: '0 auto', justifyContent: 'center', fontWeight: 'bolder', fontSize:'1.5rem'}}>
        Timer: {FormatTime()}
      </div>
    </>
  )
}
export default GTP_Timer;