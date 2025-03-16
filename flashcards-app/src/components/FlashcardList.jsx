// src/components/FlashcardList.jsx
import React, { useState } from "react";
import Flashcard from "./Flashcard";

const flashcardsData = [
  { question: "Capital of France?", answer: "Paris", image: "https://source.unsplash.com/400x300/?paris" },
  { question: "Capital of Canada?", answer: "Ottawa", image: "https://source.unsplash.com/400x300/?canada" },
  { question: "Capital of Japan?", answer: "Tokyo", image: "https://source.unsplash.com/400x300/?tokyo" },
];

export default function FlashcardList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setStreak(streak + 1);
    if (streak + 1 > longestStreak) {
      setLongestStreak(streak + 1);
    }
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
  };

  return (
    <div className="flashcard-list">
      <h1 className="title">The Ultimate Flashcards Game</h1>
      <p>Number of cards: {flashcardsData.length}</p>
      <Flashcard
        question={flashcardsData[currentIndex].question}
        answer={flashcardsData[currentIndex].answer}
        image={flashcardsData[currentIndex].image}
        onCorrect={handleCorrectAnswer}
        onNext={nextCard}
        onPrev={prevCard}
      />
      <div className="scoreboard">
        <p>Score: {score} | Longest Streak: {longestStreak}</p>
      </div>
    </div>
  );
}
