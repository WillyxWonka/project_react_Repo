
/*
    export function ChangeButtonDisabled(input)//these functions are needed for instances where a buttons style is change but is not disabled or enabled to trigger a style change
    {
        input.style.borderColor = "#000000";
        input.style.backgroundColor = ("#0000002d")
        input.disabled = true;
    }
    export function ChangeButtonEnabled(input)//these functions are needed for instances where a buttons style is change but is not disabled or enabled to trigger a style change
    {
        input.style.borderColor = "#000000";
        input.style.backgroundColor = "#e1efff"
        input.disabled = false;
    }
    function DisableAllButtons()
    {
        alphabet.forEach(element => 
        {
            let x = document.getElementById(element)
            ChangeButtonDisabled(x);
            UnavailableLetters += document.getElementById(element).id

        });
        document.getElementById("Undobtn").disabled = true;
        document.getElementById("Submitbtn").disabled = true;
        document.getElementById("guesswordbtn").disabled = true;   
        document.getElementById("generatewordbtn").disabled = false;   
    }
    function ChangeBackgroundOriginalcss()
    {
        document.getElementById("LetterButtons").style.borderColor = "#000000";
        document.getElementById("LetterButtons").style.background = "#ffeee0";
        document.getElementById("LetterButtonsHeader").style.color = "#000000";
    }

*/

/*

    export function Undo()
    {
        if(selectedLetters[0]) //bool check to make sure array isnt empty
        {
            selectionMax--
            let x = selectedLetters.pop(); 

            x = document.getElementById(x);
            ChangeButtonEnabled(x);

            console.log("Selected Letters "+ selectedLetters);

            if(selectedLetters.length == 0)
            {
                document.getElementById("guesswordbtn").disabled = false;
                document.getElementById("generatewordbtn").disabled = false;
            }
        }
        if(int == 1)//Behaves like a backspace button for finalguessinput
        {
            FinalGueassInputFieldIndicator.innerText = FinalGueassInputFieldIndicator.innerText.slice(0, -1);
        }
    }
    export function Submit()
    {
        if(int == 0) //selecting 2 letters
        {
            UnavailableLetters += selectedLetters.join("") //adds current selected letters to Unavailable letters making them untargetable for undo
            selectedLetters.forEach(element => 
                {
                    let x =document.getElementById(element)
                    ChangeButtonDisabled(x)
                });
        
            selectedLetters = [] //empties array for new word
            ResetSelecionVal()

            document.getElementById("guesswordbtn").disabled = false;// these have to be above onturnuse function call...
            document.getElementById("generatewordbtn").disabled = false;// these have to be above onturnuse function call...

            onTurnUse();  
            updateanswer(UnavailableLetters);
        }
    }

    export function onTurnUse()
    {
        if(TurnCount < TurnCountMax)
        {
            TurnCount++;
            console.log("Turns used: " + TurnCount);
            document.getElementById("TurnsUsed").innerText = "Turns Used: " +TurnCount+ "/" +TurnCountMax;
        }
        if(TurnCount >= TurnCountMax)
        {
            document.getElementById("guesswordbtn").disabled = true; // this is because user must attemt final answer when max turns are reached
            Timer.StartFinalGuessTimer();
            GuessWordBtn()

        }
    }

    function ResetSelecionVal()
    {
        selectionMax = 0;
    }


    export function check()
    {   
        if(FinalGueassInputFieldIndicator.innerText == word && int == 1)
        {
            GuessRight();
        }
        if(FinalGueassInputFieldIndicator.innerText != word && int == 1)
        {
            GuessWrong();
        }

    }
    export function GuessRight()    
    {
        DisableAllButtons()

        document.getElementById("Phrase").innerText = "Thats Right!";
        CorrectLetters.innerText = word;

        //document.getElementById("generatewordbtn").style.borderColor = "#adff2f"

        document.getElementById("LetterButtons").style.borderColor = "#497900"
        document.getElementById("LetterButtons").style.background = "#adff2f"

        Points ++
        PointCount.innerText = "Points: " + Points
        Timer.StopTimer();
    }
    export function GuessWrong()
    {
        DisableAllButtons()

        document.getElementById("Phrase").innerText = "Wrong!";
        CorrectLetters.innerText = word;

        document.getElementById("LetterButtons").style.borderColor = "#ff0000"
        document.getElementById("LetterButtons").style.background = "#ff8787"
        //document.getElementById("generatewordbtn").style.borderColor = "#adff2f"

        Points--;
        PointCount.innerText = "Points: " + Points
        Timer.StopTimer();
    }


    export function FinalGuessInput(input)
    {
        if(int == 1)
        {
            FinalGueassInputFieldIndicator.innerText += input
            console.log(FinalGueassInputFieldIndicator.innerText)
        }
    }
    function SetFinalGuessInputActive()
    {
        FinalGueassInputFieldIndicator.innerText = "";
        //document.getElementById("LetterButtonsHeader").innerText = "FINAL GUESS";

        for(let i = 0; i < UnavailableLetters.length; i++) 
        {   
            let x = document.getElementById(UnavailableLetters[i])
            ChangeButtonEnabled(x);
        }

        if(TurnCount < TurnCountMax)
        {
            document.getElementById("LetterButtons").style.borderColor = "#000000"
            document.getElementById("LetterButtons").style.background = "#c9e2ff"
        }
        else if(TurnCount >= TurnCountMax)
        {
            document.getElementById("LetterButtons").style.borderColor = "#ff0000"
        }
    }

    export function GuessWordBtn()
    { 
        if(int == 0 && selectedLetters.length == 0) // sets final guess state
        {
            int = 1;

            document.getElementById("guesswordbtn").innerText = ("Return");
            document.getElementById("generatewordbtn").disabled = true;
            
            SetFinalGuessInputActive()
            return;
        }
        if(int == 1) //sets original state
        {
            int = 0;

            document.getElementById("guesswordbtn").innerText = ("Guess Word");
            document.getElementById("guesswordbtn").style.fontWeight = ""
            document.getElementById("LetterButtonsHeader").innerText = (`Pick ${SelectionMax} Letters`)
            
            ChangeBackgroundOriginalcss();

            for(let i = 0; i < UnavailableLetters.length; i++)
            {
            ChangeButtonDisabled(document.getElementById(UnavailableLetters[i]));
            }
            document.getElementById("generatewordbtn").disabled = false;
            return;
        }
    }*/
    /*
     function OG_GenerateNewWord() //new word button
    {
        if(selectedLetters.length == 0)
        {
            bet = alphabet;

            selectedLetters = [] //empties array for new word

            ChangeBackgroundOriginalcss();
            ReactivateLetters(UnavailableLetters)
            Timer.StopTimer();
        
            CorrectLetters.style.backgroundColor = "";
            FinalGueassInputFieldIndicator.innerText = "..."
            document.getElementById("LetterButtonsHeader").innerText = (`Pick ${SelectionMax} Letters`)

            document.getElementById("guesswordbtn").disabled = false;
            document.getElementById("Undobtn").disabled = false;
            document.getElementById("Submitbtn").disabled = false;
            document.getElementById("generatewordbtn").style.borderColor = ""
            
            if(int == 1){ GuessWordBtn();} //what is this?
        
            TurnCount = 0;
            document.getElementById("TurnsUsed").innerText = "Turns Used: " +TurnCount+ "/" +TurnCountMax;

            FreeLetters = PS.CheckPoints(Points,dataSource);  // These need to be called first when new word id pressed or free letters are worong
            PS.CheckPoints(Points,dataSource);

            SetAnswerField();
            setLetters();
        }
    }
*/
/*
    function ReactivateLetters(list) //reactivates the letters onscreen button // resets unavailable letters value for new word. 
    {                                 
        UnavailableLetters = ""
        
        for(let i = 0; i < list.length; i++) //this is for the undo button
        {
            let x = document.getElementById(list[i])
            ChangeButtonEnabled(x) //changes all letterbuttons border colors back to original
            UnavailableLetters = UnavailableLetters.slice(0, -1) //removes letter sent into function from the end of unavailable letters string
        }
    }*/

    /*
    export function UpdateAvailableLetters(lettersToDisable) 
    {
        bet = bet.filter(letter => {
            if(!lettersToDisable.includes(letter))
                {return true;}
            else {   
                UnavailableLetters.push(letter)
                return false;}
        });
    }*/

        /*
    function GetWordBank(){

        if(document.getElementById("DataSourceString").innerText == "Standard")
        {
            console.log("Hi Hello how ya doin?!  Its Standard")
            dataSource = "Standard"

            GTPD.GetWordBank(Points);
            word = GTPD.word;
            console.log(word)
        }
        if(document.getElementById("DataSourceString").innerText == "Easy")
        {
            console.log("Hi Hello how ya doin?!  Its Easy")
            dataSource = "Easy"

            GTPDE.GetWordBank(Points);
            word = GTPDE.word;
            console.log(word)
        }
        if(document.getElementById("DataSourceString").innerText == "Medium")
        {
            console.log("Hi Hello how ya doin?!   Its Medium")
            dataSource ="Medium"

            GTPDM.GetWordBank(Points);
            word = GTPDM.word;
            console.log(word)
        }
        if(document.getElementById("DataSourceString").innerText == "Difficult")
        {
            console.log("Hi Hello how ya doin?!   Its Difficult")
            dataSource ="Difficult"

            GTPDD.GetWordBank(Points);
            word = GTPDD.word;
            console.log(word)
        }
            
    }*/


        /*
    export function PageLoad(wd_FreeLetters, curAnswer)
    {
        SetAnswerField(curAnswer);   
        setLetters(wd_FreeLetters);
        
        //dataSource = document.getElementById("DataSourceString").innerText /// no more html files, this might be coded out
        //PS.CheckPoints(Points, dataSource);
    }*/

    /*export function OGupdateAvailableLetters(input) // updates ingame button and things related to it when it is clicked
    {
        if(int == 0 && selectionMax < SelectionMax)
        {
            selectionMax++
            selectedLetters[selectedLetters.length] = input.id; //adds letterbuttoin to the end of selectedletter list/array until submit is selected

            input.disabled = true;
            input.style.borderColor = ("#008000")
            input.style.backgroundColor = ("#acff2f4e")
            document.getElementById("guesswordbtn").disabled = true;
            document.getElementById("generatewordbtn").disabled = true;   
        }
    } */


    /*function vibrate() {
        if (!window) {
            return;
        }

        if (!window.navigator) {
            return;
        }

        if (!window.navigator.vibrate) {
            return;
        }

        window.navigator.vibrate([200, 100, 200]);
    }*/