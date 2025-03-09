import React from "react";

const Flashcard = ({ card, flipped, setFlipped }) => {
  return (
    <div 
      className={`flashcard ${flipped ? "flipped" : ""}`} 
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <img src={card.img} alt="flashcard" className="flashcard-img" />
          <p>{card.question}</p>
        </div>
        <div className="flashcard-back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
