import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./Styles_CSS/Website.css";
import TestPage from "./Pages/TestPage";
import NotesPage from "./Pages/NotesPage";
import Words from "./Pages/Words";
import MainPage from "./Pages/MainPage";
import WordDecoder from "./Pages/WordDecoder";
import { GameProvider } from "./Components/GameContext";

function App() {
  // Load notes from localStorage or default to two empty strings
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : ["", ""];
  });

  // Persist notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Pages/TestPage" element={<TestPage />} />
        <Route path="/Pages/NotesPage" element={<NotesPage notes={notes} setNotes={setNotes} />}/>
        <Route path="/Pages/Words" element={<Words />} />
        <Route path="/Pages/WordDecoder" element={
          <GameProvider>
              <WordDecoder/>
          </GameProvider>} />
      </Routes>

    </>
  );
}

export default App;
