import React from 'react';

const AtmCard = ({ description, cardValue, isSelected, showCard, isVotingCard, instances, isClickable, onCardClick }) => {
  const handleClick = () => {
    if (isClickable && onCardClick) {
      onCardClick(cardValue);
    }
  };

  let playerClass = 'player';
  if (isSelected) {
    playerClass += isClickable ? ' selected elevate' : ' selected';
  }

  return (
    <div className={`card `} onClick={handleClick}>
      {isVotingCard ? (
        <>
          <div className='player'>{cardValue}</div>
          <p className='instances card-text'>{instances} {instances === 1 ? 'voto' : 'votos'}</p>
        </>
      ) : (
        <>
          <div className={playerClass}>
            {showCard ? cardValue : ''}
          </div>
          {description && <p className='card-text'>{description}</p>}
        </>
      )}
    </div>
  );
};

export default AtmCard;