import React from 'react';
import AtmCard from '../atoms/AtmCard';

const OrgCardsSelections = ({ cardSelections = {}, averageCard }) => {
  return (
    <div className="deck-container">
      <div className="deck-of-cards">
        {Object.entries(cardSelections).map(([cardValue, instances], index) => (
          <AtmCard 
            key={index}
            cardValue={cardValue}
            isVotingCard={true}
            instances={instances}
            showCard={true} 
          />
        ))}
      </div>
      {averageCard && (
        <div className="result">
          <p>Promedio:</p>
          <p className='number'>{averageCard}</p>
        </div>
      )}
    </div>
  );
};

export default OrgCardsSelections;