import React, { useState } from "react";

const OrgDeck = ({ onCardSelect, averageCard }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardValue) => {
    // Cambiar la carta seleccionada
    setSelectedCard(cardValue);

    // Enviar el valor de la carta al componente padre
    onCardSelect(cardValue);
  };

  return (
    <div className="deck-container">
      <p>Elije una carta 👇</p>
      <div className="deck-of-cards">
        {[0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕'].map((cardValue, index) => (
          <div
            key={index}
            className={`player ${selectedCard === cardValue ? 'selected elevate' : ''}`}
            onClick={() => handleCardClick(cardValue)}
          >
            {cardValue}
          </div>
        ))}
      </div>
       {averageCard && (
        <div className="result">
          <p>Carta promedio: {averageCard}</p>
        </div>
       )}
    </div>
  );
};

export default OrgDeck;
