import React from 'react';
import AtmCard from '../atoms/AtmCard';
import PropTypes from 'prop-types';

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

OrgCardsSelections.propTypes = {
  cardSelections: PropTypes.object,
  averageCard: PropTypes.string
};

OrgCardsSelections.defaultProps = {
  cardSelections: {},
  averageCard: ''
};

export default OrgCardsSelections;