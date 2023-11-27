import React from 'react';

const OrgCardsSelections = ({ cardSelections, averageCard }) => {
  return (
    <div className="deck-container">
      <div className="deck-of-cards">
        {Object.entries(cardSelections).map(([cardValue, instances], index) => (
          <div className='cards-selections' key={index}>
            <div className='player'>{cardValue}</div>
            <p className='instances'>{instances} {instances === 1 ? 'voto' : 'votos'}</p>
          </div>
        ))}
      </div>
      {averageCard && (
        <div className="result">
          <p>Average:</p>
          <p className='number'>{averageCard}</p>
        </div>
      )}
    </div>
  );
};

export default OrgCardsSelections;
