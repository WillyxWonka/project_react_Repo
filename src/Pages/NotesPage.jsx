import { useState } from "react";
import Header from "../Components/Page-Header";


function NotesPage({notes, setNotes }) {

  const count = notes.length;
  const [scrapNotes, setScrapNotes] = useState([]);

  function CreateNewNote() 
  {
    setNotes([...notes, ""]);
  }
  function DeleteSelectedNote(index) 
  {
    const filteredNotes = notes.filter((_ , i) => i !== index );
    setNotes(filteredNotes);
  }
  function DeleteAllNotes() 
  {
    setNotes([]);   
    setScrapNotes([]);
  }
  
  const noteClicked =(event, index) =>
  {
    if(event.shiftKey && !scrapNotes.includes(index))
      {
      setScrapNotes((add) =>{
        const updated = [...add, index];
        console.log("updated: " + updated);
        return updated;   
          });
          
      }
    if(event.ctrlKey )
      {
        setScrapNotes((remove) =>{
          const updated = remove.filter((_, i) => i !== index);
          console.log("updated: " + updated);
          return updated;
        });
      }
    }


  return (
    <>

      <Header>
        <nav className="notes-page-navbar">
          <div id="user-icon">User</div>
          <div id="cur-note-count">Current notes: {count}</div>
          <button className="nav-btn" onClick={CreateNewNote}>
            Create Note
          </button>
          <button className="nav-btn" onClick={DeleteAllNotes}>
            Delete All
          </button>
        </nav>
      </Header>
      <div className="notes-cont" >

        {notes.map((note, index) => (

          <div className="notes-card" key={index} onClick={(e) => noteClicked(e, index)}>
            <textarea
              className="note-pad"
              placeholder={(index)}
              value={note}
              rows="10"

              onChange = {(txtArea) => {
                const updatedText = [...notes];
                updatedText[index] = txtArea.target.value;
                setNotes(updatedText); 
                }}
              >
            </textarea>
            <button className="delete-btn" onClick={ () => DeleteSelectedNote(index)}>Delete Note</button>
          </div>

        ))}
        
      </div>
    </>
  );
}
export default NotesPage;


















      /*<button className="HPbtn" onClick={createNewNote}>Create Note</button>

      {notes.map((note, index) => (
        <div className="notes-card" key={index}>
          <textarea
            className="note-pad"
            placeholder={`Note ${index + 1}`}
            rows="10"
            value={note}
            onChange={(e) => {
              const newNotes = [...notes];
              newNotes[index] = e.target.value;
              setNotes(newNotes);
            }}
          ></textarea>
        </div>
      ))}*/