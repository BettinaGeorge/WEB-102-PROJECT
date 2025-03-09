import React from "react";
import FlashcardList from "./components/FlashcardList";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <p>Click a card to flip it. Click "Next" to get a new card!</p>
      <FlashcardList />
    </div>
  );
};

export default App;
