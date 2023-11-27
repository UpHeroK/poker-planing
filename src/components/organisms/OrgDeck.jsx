import React, { useState, useEffect } from 'react';

const OrgDeck = ({ onCardSelect, resetKey, cardValues }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardValue) => {
    setSelectedCard(cardValue);
    onCardSelect(cardValue);
  };

  useEffect(() => {
    setSelectedCard(null);
  }, [resetKey]);

  return (
    <div className="deck-container">
      <p>Elije una carta 👇</p>
      <div className="deck-of-cards">
        {cardValues.map((cardValue, index) => (
          <div
            key={index}
            className={`player ${selectedCard === cardValue ? 'selected elevate' : ''}`}
            onClick={() => handleCardClick(cardValue)}
          >
            {cardValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgDeck;
