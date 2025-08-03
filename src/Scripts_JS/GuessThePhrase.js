
import * as Timer from "./Timer.js"; 
import wordBank from "../JSON/WordBank.json"

export const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // maybe make an api call for different languages
export let bet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let FreeLetters = 0;


//sets initial state
    export const SetAnswerField = (curAnswer, curWord) => {
        for(let i = 0; i < curWord.length; i++)
        {
            curAnswer[i] = "?" 
        }
        return  curAnswer.join("");
    }

    export const setLetters = (wd_FreeLetters, alphabetState) => {
        FreeLetters = wd_FreeLetters;
        let freeLettersArray = [];
        let tempBet = alphabetState;

        for(let i = 0; i < FreeLetters; i++)
        {
            let randLetter = Math.floor(Math.random() * tempBet.length); // get random value between array length
            freeLettersArray.push(tempBet[randLetter]);
            tempBet = tempBet.filter(letter => letter != tempBet[randLetter]);
        }  
        const returnFreeObj = () => {
        //(...Object.fromEntries(freeLettersArray.map(letter => [letter, true])))
            const entries = freeLettersArray.map(letter => [letter, true]);
            const obj = Object.fromEntries(entries);
            return obj;
        };
        return returnFreeObj;
    }
    export const TestGenerateWord = () =>{
        const tempKeys = Object.keys(wordBank);
        const randKey = Math.floor(Math.random() * tempKeys.length);
        const randCat = tempKeys[randKey];
        const randWord = Math.floor(Math.random() * wordBank[randCat].length);

        return({"obj_word": wordBank[randCat][randWord].word, "obj_difficulty": wordBank[randCat][randWord].difficulty, "obj_hint":randCat})
    }
    
    /*
    export const GenerateWord = () =>{
        const tempKeys = Object.keys(wordBank);
        const randKey = Math.floor(Math.random() * tempKeys.length);
        const randCat = tempKeys[randKey];
        const randWord = Math.floor(Math.random() * wordBank[randCat].length);

        return(wordBank[randCat][randWord]);
        //return({word: wordBank[randCat][randWord], hint: wordBank[randKey]})
    }*/

    // !!THIS IS WHERE CAN POSSIBLLY MAKE CORRECT WORD WITHOUT GUESSING IN EVENT THAT USER GUESSES ALL CORRECT LETTERS!! update: did implement did it break everything?
    export const updateanswer = (unavailableLetters, curWord, curAnswer) => {

        let newTempAnswerArray = [...curAnswer];
        let newTempUnLetters = Object.keys(unavailableLetters);


        for(let i = 0; i < newTempUnLetters.length; i++)
        {
            for(let j = 0; j < curWord.length; j++)
            {
                if(newTempUnLetters[i] == curWord[j])
                {
                    newTempAnswerArray[j] = curWord[j];
                }
                else
                newTempAnswerArray[j] = newTempAnswerArray[j]; // keeps it a "?""
            }
        }
        if(newTempAnswerArray.join("") === curWord)
        {
            alert("correct")
        }
        return newTempAnswerArray;
    } 

    function GuessCorrect(){
        
    }
