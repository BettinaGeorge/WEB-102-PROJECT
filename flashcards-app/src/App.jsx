import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./styles.css";

const flashcardsData = [
  { question: "Capital of France?", answer: "Paris", image: "https://source.unsplash.com/400x300/?paris" },
  { question: "Capital of Japan?", answer: "Tokyo", image: "https://source.unsplash.com/400x300/?tokyo" },
  { question: "Capital of Canada?", answer: "Ottawa", image: "https://source.unsplash.com/400x300/?ottawa" }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [streak, setStreak] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? flashcardsData.length - 1 : prevIndex - 1));
  };

  const shuffleCards = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcardsData.length));
  };

  const updateScore = () => {
    setScore(score + 1);
    setStreak(streak + 1);
    if (streak + 1 > longestStreak) {
      setLongestStreak(streak + 1);
    }
  };

  return (
    <div className="app">
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <p>Number of cards: {flashcardsData.length}</p>
      <Flashcard {...flashcardsData[currentIndex]} onCorrect={updateScore} />
      <div className="controls">
        <button onClick={prevCard} className="nav-button">⬅</button>
        <button onClick={shuffleCards} className="shuffle-button">Shuffle Cards</button>
        <button onClick={nextCard} className="nav-button">➡</button>
      </div>
      <p>Score: {score} | Longest Streak: {longestStreak}</p>
    </div>
  );
}
