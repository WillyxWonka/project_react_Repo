import * as GTP from "./GuessThePhrase.js";

let isTimer = false;
let SecondsMax = 30
let seconds = SecondsMax;

export function StartFinalGuessTimer()
{
    if(isTimer == false)
    {
        document.getElementById("LetterButtonsHeader").innerText = "FINAL GUESS ENDS: " + seconds + "s"
        document.getElementById("LetterButtonsHeader").style.color = "#ff0000"
        setTimeout(FinalGuessTimeOut, 1000);
        isTimer = true;
    }
}
function FinalGuessTimeOut()
{
    //document.getElementById("Timer").innerText = "..." + seconds
    document.getElementById("LetterButtonsHeader").innerText = "FINAL GUESS ENDS: " + seconds + "s";

    if(seconds <= 0)
    {
        StopTimer();
        GTP.GuessWrong();
        console.log("seconds done: ");
        //GTP.checkTimer("Timer");
    }
    else
    {
        setTimeout( Seconds, 1025);
        console.log("seconds: "+ seconds);
    }
}
function Seconds()
{
    if(isTimer)
    {
        seconds--
         FinalGuessTimeOut()
    }
}

export function StopTimer()
{   
    isTimer = false;
    seconds = SecondsMax;
    //document.getElementById("Timer").innerText = "" 
    document.getElementById("LetterButtonsHeader").innerText = " ";
    //document.getElementById("LetterButtonsHeader").style.color = "#000000"
}
