import React, { useState } from "react";
import Flashcard from "./Flashcard";

const flashcardSet = {  // ✅ Use an object, NOT an array
  title: "Plant Trivia",
  description: "Test your knowledge about plants!",
  cards: [  // ✅ The list of cards is an array INSIDE this object
    {
      question: "What is photosynthesis?",
      answer: "Plants make food using sunlight.",
      img: "https://source.unsplash.com/350x200/?plants"
    },
    {
      question: "How often should you water a cactus?",
      answer: "Once every 2-3 weeks.",
      img: "https://source.unsplash.com/350x200/?cactus"
    },
    {
      question: "What light condition does a snake plant need?",
      answer: "Low to medium indirect light.",
      img: "https://source.unsplash.com/350x200/?indoorplant"
    }
  ]
};

const FlashcardList = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcardSet.cards.length);
  };

  return (
    <div className="flashcard-list">
      {/* ✅ Title and Description */}
      <h2>{flashcardSet.title}</h2>
      <p>{flashcardSet.description}</p>
      <p><strong>Total Cards:</strong> {flashcardSet.cards.length}</p>

      {/* ✅ Flashcard Display */}
      <Flashcard card={flashcardSet.cards[currentCardIndex]} flipped={flipped} setFlipped={setFlipped} />

      {/* ✅ Navigation Button */}
      <div className="nav-buttons">
        <button className="nav-button" onClick={nextCard}>Next ➡</button>
      </div>
    </div>
  );
};

export default FlashcardList;
