export let FreeLetters = 0;
export function CheckPoints(Points, dataSource)
{
    //let Difficulty = document.getElementById("p5");
    //let FreeLetterIndicator = document.getElementById("p6");
    let Difficulty = document.getElementById("curDifficulty");
    let FreeLetterIndicator = document.getElementById("FreeLetters");
    
    switch (dataSource)
    {
        case "Standard":
            if(Points <= -3)
            {
                FreeLetters = 7
                Difficulty.innerText = "Difficulty: Very Easy"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
            if(Points >= 0)
            {
                FreeLetters = 5;
                Difficulty.innerText = "Difficulty: Easy"
                Difficulty.style.color = "#008000"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
            if(Points >= 3)
            {
                FreeLetters = 4;
                Difficulty.innerText = "Difficulty: Medium"
                Difficulty.style.color = "#8B8000"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
            if(Points >=7)
            {
                FreeLetters = 3
                Difficulty.innerText = "Difficulty: Difficult"
                Difficulty.style.color = "#ff0000"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
            if(Points >=10)
            {
                FreeLetters = 2
                Difficulty.innerText = "Difficulty: ALL"
                Difficulty.style.color = "#9090ff"
                document.getElementById("header").innerText = ("CONGRATULATIONS! You beat the Word Decoder alpha. All word difficulties are now possible, Good Luck!")
                Difficulty.innerText = "Difficulty: All"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
            //return(FreeLetters)
        break;
        case "Easy":
        if(Points >= 0)
        {
            FreeLetters = 5;
            Difficulty.innerText = "Difficulty: Easy"
            Difficulty.style.color = "#008000"
            FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
        }
        break;
        case "Medium":
            if(Points >= 0)
            {
                FreeLetters = 4;
                Difficulty.innerText = "Difficulty: Medium"
                Difficulty.style.color = "#8B8000"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
        break;
        case "Difficult":
            if(Points >= 0)
            {
                FreeLetters = 3;
                Difficulty.innerText = "Difficulty: Difficult"
                Difficulty.style.color = "#ff0000"
                FreeLetterIndicator.innerText = "Free Letters: " + FreeLetters
            }
        break;
    }

}