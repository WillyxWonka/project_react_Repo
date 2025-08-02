const API_KEY = "e65e3af7eemsh1a89fe31059b4d7p178ef3jsn68c25b201cda";
const BASE_URL = " wordsapiv1.p.rapidapi.com";



export async function searchWords(word, search) {
  const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/${search}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse JSON, not text
    console.log("API Result:", result);

    switch(search)
    {
        case "definitions":
        {
            let data = result.definitions.map(d => d.definition)
            return data;
        }
        case "antonyms":
        {
            // This logic forces every entry to have a ending space so it wraps properly, because every value currently ahs no spaces before or after comments
            return result.antonyms && Array.isArray(result.antonyms) && result.antonyms.length > 0 
            ? 
            [result.antonyms.map(word => word + " ")] : ["no antonyms found"];
        }
        case "synonyms":
        {
            return result.synonyms  && Array.isArray(result.synonyms) && result.synonyms.length > 0 
            ? 
            [result.synonyms.map(word => word + " ")] : ["no synonyms found"];
        }
        default:
            return["Not for User: [check logs!]"]
    }

  } catch (error) {
    console.error("API Error:", error);
    return []; // Return empty array on failure so app doesn’t crash
  }
}















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const obsolete = async () => {
    /*const response = await fetch(`${BASE_URL}/words/lovely?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results */
    const url = 'https://wordsapiv1.p.rapidapi.com/words/lovely/synonyms';
    const options = {
        method: 'GET',
        headers: {
        'x-rapidapi-key': 'e65e3af7eemsh1a89fe31059b4d7p178ef3jsn68c25b201cda',  // Replace with your actual key
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // API returns JSON
        console.log(data);
    } catch (error) {
        console.error("API call failed:", error);
        return []; // Fallback
    }
}
export const searchobsolete = async (query) => {
    const response = await fetch(`${BASE_URL}/search/word?api_key=${API_KEY}&query=${encodeURIComponent}(query) )}`);
        const data = await response.json();
        return data.results;
};

export async function getWords() {
  try {
    const res = await fetch("https://wordsapiv1.p.rapidapi.com/words");
    const data = await res.json();
    return Array.isArray(data) ? data : []; // Always return an array
  } catch (err) {
    console.error("API fetch failed", err);
    return []; // Fallback
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////