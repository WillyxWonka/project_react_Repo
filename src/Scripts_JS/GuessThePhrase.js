
import wordBank from "../JSON/WordBank.json"



//sets initial state
export const SetAnswerField = (curAnswer, curWord) => {
    for(let i = 0; i < curWord.length; i++)
    {
        curAnswer[i] = "?" 
    }
    return  curAnswer.join("");
}


export const setLetters = (wd_FreeLetters, alphabetState) => {

    let freeLettersArray = [];
    let tempBet = alphabetState;

    for(let i = 0; i < wd_FreeLetters; i++)
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
export const GenerateWord = () =>{
    const tempKeys = Object.keys(wordBank);
    const randKey = Math.floor(Math.random() * tempKeys.length);
    const randCat = tempKeys[randKey];
    const randWord = Math.floor(Math.random() * wordBank[randCat].length);

    return({"obj_word": wordBank[randCat][randWord].word, "obj_difficulty": wordBank[randCat][randWord].difficulty, "obj_hint":randCat})
}

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
        
    }
    return newTempAnswerArray;
} 

function GuessCorrect(){
    
}





export function BubbleSort()
{

    let list = [1,5,8,4,6,-2,-10,100,7,-7,8];
    let i =1;
    let k = 1;
    alert(list);
    while(k < list.length)
    {
        for(let j =i-1; i < list.length ; i++){
            if(list[j] > list[i])
            {
                const tmp = list[i];
                list[i] = list[j];
                list[j] = tmp;
            }
        }
        k++;
        i = k;
    }
    alert(list);
}
