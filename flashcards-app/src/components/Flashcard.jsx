// src/components/Flashcard.jsx
import React, { useState } from "react";
import "../styles.css";

export default function Flashcard({ question, answer, image, onCorrect }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flipped, setFlipped] = useState(false);

  const checkAnswer = (e) => {
    e.stopPropagation(); // Prevents event bubbling to parent div
    if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      setFeedback("✅ Correct!");
      onCorrect(); // Update score if correct
    } else {
      setFeedback("❌ Incorrect! Try again.");
    }
    setFlipped(true); // Auto-flip on submission
  };

  return (
    <div className="flashcard">
      <div className="flashcard-content">
        {image && (
          <img
          src={image}
          alt={question}
          className="flashcard-image"
          onError={(e) => (e.target.style.display = "none")}
          style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }} // ✅ FIXED
        />
        
        )}
        <h2 className="flashcard-question">{question}</h2>
      </div>
      
      <div className="flashcard-answer">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Place your answer here..."
          className="answer-input"
        />
        <button onClick={checkAnswer} className="submit-button">
          Submit Guess
        </button>
        <p className="feedback">{feedback}</p>
      </div>
    </div>
  );
}
