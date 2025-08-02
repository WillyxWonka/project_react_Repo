import{useState, useEffect} from "react";
import {searchWords} from "../Services/api"
import Header from "../Components/Page-Header";

function Words()
{
  const [words, setWords] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hint, setHint] = useState("definitions");


const handleKeyDown = async (event) => {
  if (event.key === "Enter" && inputValue.trim() !== "") 
  {
    const results = await searchWords(inputValue, hint); // Call API
    setWords(results); // Store API result in state
  }
  };
  
  const handleChange = (event) => {
  setInputValue(event.target.value);
  };

  const handleSelectChange = async (e) =>{

    const hintproper = e.target.value;
    setHint(hintproper);
    if(inputValue)
    {
      await test(inputValue, hintproper);
    }
  }

    async function test(input, hintval){
    try {
    const results = await searchWords(input, hintval); // Call API with latest value
    setWords(results); // Store API result in state
    } catch (error) {
    console.error("Error fetching words:", error);
    }
  }


  return(
    <>
        <Header>
        </Header>
        <div className="Body">
        </div>

      <input onKeyDown={handleKeyDown} onChange={handleChange} placeholder="type word"></input>

      <select name="hints" onChange={handleSelectChange}> 
        <option value="definitions">Definitions</option>
        <option value="antonyms">antonyms</option>
        <option value="synonyms">synonyms</option>
      </select>

      <div className="notes-cont">
        {words.map((word, index) => (
          <div className="notes-card" key={index}>
            <textarea
              className="note-pad"
              rows="10"
              value={word}
              spellCheck={false}

            ></textarea>
          </div>
        ))}
      </div>
    </>
  )
}
export default Words;
  //const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);
  
  //if (loading) return <p>Loading words...</p>;
  //if (error) return <p style={{ color: "red" }}>{error}</p>;