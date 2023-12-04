import React, { useState } from 'react';
import AtmCard from '../atoms/AtmCard';

const OrgDeck = ({ onCardSelect, cardValues }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardValue) => {
    setSelectedCard(cardValue);
    onCardSelect(cardValue);
  };

  return (
    <div className="deck-container">
      <p>Elije una carta 👇</p>
      <div className="deck-of-cards">
        {cardValues.map((cardValue, index) => (
          <AtmCard
            key={index}
            cardValue={cardValue}
            isSelected={selectedCard === cardValue}
            showCard={true}
            isClickable={true}
            onCardClick={handleCardClick} />

        ))}
      </div>
    </div>
  );
};

export default OrgDeck;
