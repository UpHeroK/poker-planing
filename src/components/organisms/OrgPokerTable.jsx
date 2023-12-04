import React from 'react';
import circulos from '../../assets/circulos.svg';
import AtmButton from '../atoms/AtmButton';
import AtmCard from '../atoms/AtmCard';

const PokerTable = ({ playersCards, showCards, gameStarted, countingVotes, handleRevealCards, handleNewVote, PlayerName, selectedCard }) => {
    const renderCard = (cardIndex, description) => {
        let cardValue = showCards ? playersCards[cardIndex] : '';
        let isSelected = playersCards[cardIndex] !== null && gameStarted;

        if (cardIndex === 6) {
            cardValue = showCards ? selectedCard : '';
            isSelected = selectedCard !== null && gameStarted;
        }
        return (
            <AtmCard
                cardValue={cardValue}
                description={description}
                isSelected={isSelected}
                showCard={showCards}
            />
        );
    };
    return (
        <div className="poker-table">
            <div className="cell"></div>
            <div className="cell spot">
                {renderCard(0, 'play1')}
                {renderCard(1, 'play2')}
                {renderCard(2, 'play3')}
            </div>
            <div className="cell "></div>
            <div className="cell spot">
                {renderCard(3, 'play4')}
            </div>
            <div className="cell center ">
                <div className="board">
                    {countingVotes && (
                        <div className="vote-counting-text">
                            <img className='circle-loader' src={circulos} alt="loader-vote" />
                            <p>Contando votos...</p>
                        </div>
                    )}

                    {(!countingVotes && playersCards.every((card) => card !== null) && gameStarted) && (
                        <AtmButton content="Revelar cartas" onClick={handleRevealCards} />
                    )}
                    {(!countingVotes && !gameStarted) && (
                        <AtmButton content="Nueva votación" onClick={handleNewVote} />
                    )}
                </div>
                <div className="middle"></div>
                <div className="outline"></div>
            </div>
            <div className="cell spot">
                {renderCard(4, 'play5')}
            </div>
            <div className="cell "></div>
            <div className="cell spot bottom">
                {renderCard(5, 'play6')}
                {renderCard(6, PlayerName)}
                {renderCard(7, 'play8')}
            </div>
            <div className="cell "></div>
        </div>
    );
};

export default PokerTable;

