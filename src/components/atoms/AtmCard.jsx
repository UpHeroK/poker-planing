import React from 'react';
import PropTypes from 'prop-types';

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
AtmCard.propTypes = {
  description: PropTypes.string,
  cardValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSelected: PropTypes.bool,
  showCard: PropTypes.bool,
  isVotingCard: PropTypes.bool,
  instances: PropTypes.number,
  isClickable: PropTypes.bool,
  onCardClick: PropTypes.func
};

AtmCard.defaultProps = {
  description: '',
  isSelected: false,
  showCard: false,
  isVotingCard: false,
  instances: 0,
  isClickable: false,
  onCardClick: undefined
};
export default AtmCard;