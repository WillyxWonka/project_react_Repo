import { useState, useEffect, useRef } from "react";
function Timer(){

const [timeState, setTimeState] = useState(0);
const [timerOn, setTimerOn] = useState(false);
const intervalRef =useRef(null);

function StartTimer()
{
  setTimerOn(true);
}
function StopTimer()
{
  setTimerOn(false);
}
function ResetTimer()
{
  setTimeState(0);
  setTimerOn(false);
}
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

useEffect(() =>{
if(timerOn)
    {
    intervalRef.current = setInterval(() =>
    {
        setTimeState((tState) => {
        return tState + 10});
    }, 10);
    }
return( () =>
    clearInterval(intervalRef.current))
}, [timerOn]);



  return(
    <>
      <div style={{display: 'flex', margin: '0 auto', height: '10vw' , justifyContent: 'center', transform: 'translate(0%, 10%)'}}>
        <button name="startBtn" style={{margin: '5em 1em'}} onClick={StartTimer}> 
          Start </button>
        <button name="stopBtn" style={{margin: '5em 1em'}} onClick={StopTimer}> 
          Stop </button>
        <button name="resetBtn" style={{margin: '5em 1em'}} onClick={ResetTimer}> 
          Reset </button>
      </div>

      <div name="time" style={{display: 'flex', margin: '0 auto', height: '10vw' , justifyContent: 'center', fontWeight: 'bolder', fontSize:'2vw'}}>
        Timer: {FormatTime()}
      </div>
    </>
  )
}
export default Timer;