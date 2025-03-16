import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "../styles.css";

const flashcardsData = [
  {
    question: "Capital of France?",
    answer: "Paris",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg"
  },
  {
    question: "Capital of Japan?",
    answer: "Tokyo",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Tokyo_Tower_and_city_view.jpg"
  },
  {
    question: "Capital of Canada?",
    answer: "Ottawa",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Ottawa_Skyline.jpg"
  }
];

export default function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(flashcardsData);
  const [score, setScore] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledCards.length - 1 : prevIndex - 1
    );
  };

  const shuffleCards = () => {
    const shuffled = [...flashcardsData].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setCurrentStreak(currentStreak + 1);
    if (currentStreak + 1 > longestStreak) {
      setLongestStreak(currentStreak + 1);
    }
  };

  return (
    <div className="flashcard-app">
      <h1>The Ultimate Plant Parent!</h1>
      <p className="subtitle">How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <p className="card-count">Number of cards: {shuffledCards.length}</p>
      <Flashcard 
        question={shuffledCards[currentIndex].question} 
        answer={shuffledCards[currentIndex].answer} 
        image={shuffledCards[currentIndex].image} // ✅ Pass image prop
        onCorrect={handleCorrectAnswer}
      />
      <div className="controls">
        <button onClick={prevCard} className="nav-button">←</button>
        <button onClick={shuffleCards} className="shuffle-button">Shuffle Cards</button>
        <button onClick={nextCard} className="nav-button">→</button>
      </div>
      <p className="score-display">Score: {score} | Longest Streak: {longestStreak}</p>
    </div>
  );
}
