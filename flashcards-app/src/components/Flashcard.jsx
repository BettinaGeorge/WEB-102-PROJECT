import React, { useState } from "react";
import "../styles.css";

export default function Flashcard({ question, answer, image, onCorrect, onNext, onPrev }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flipped, setFlipped] = useState(false);

  const checkAnswer = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
      setFeedback("✅ Correct!");
      onCorrect(); // Update score if correct
    } else {
      setFeedback("❌ Incorrect! Try again.");
    }
    setFlipped(true); // Flip to show answer
  };

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        <div className="flashcard-front">
          {image && <img src={image} alt={question} className="flashcard-image" />}
          <h2 className="flashcard-question">{question}</h2>
          <form onSubmit={checkAnswer}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Place your answer here..."
              className="answer-input"
            />
            <button type="submit" className="submit-button">Submit Guess</button>
          </form>
          <p className="feedback">{feedback}</p>
        </div>

        <div className="flashcard-back">
          <h2 className="flashcard-answer">{answer}</h2>
          <button onClick={() => setFlipped(false)} className="flip-back">Flip Back</button>
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={onPrev} className="nav-button">⬅️ Back</button>
        <button onClick={onNext} className="nav-button">Next ➡️</button>
      </div>
    </div>
  );
}
