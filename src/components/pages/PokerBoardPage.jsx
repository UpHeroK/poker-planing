import React, { useState, useEffect } from 'react';
import OrgHeader from '../organisms/Orgheader';
import TmpModal from '../templates/TmpModal';
import OrgForm from '../organisms/OrgForm';
import OrgDeck from '../organisms/OrgDeck';
import OrgFormCopy from '../organisms/OrgFormCopy';
import AtmButton from '../atoms/AtmButton';
import OrgCardsSelections from '../organisms/OrgCardsSelections';
import circulos from'../../assets/circulos.svg'   

const PokerBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalCopyOpen, setisModalCopyOpen] = useState(false);
  const [game, setGame] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [gameStarted, setGameStarted] = useState(true);
  const [playersCards, setPlayersCards] = useState([1, 2, 3, 5, 8, 5, null, 5]);
  const [showCards, setShowCards] = useState(false);
  const [averageCard, setAverageCard] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const [cardSelections, setCardSelections] = useState({});
  const [countingVotes, setCountingVotes] = useState(false);
  const [PlayerName, setPlayerName] = useState('Jhon Doe');

  useEffect(() => {
    const storedGame = localStorage.getItem('game');
    setGame(storedGame || '');
  }, []);

  useEffect(() => {
    const allPlayersSelectedCard = playersCards.every((card) => card !== null);

    if (allPlayersSelectedCard && showCards) {
      const updatedCardSelections = { ...cardSelections };

      playersCards.forEach((card) => {
        if (card !== null) {
          updatedCardSelections[card] = (updatedCardSelections[card] || 0) + 1;
        }
      });

      setCardSelections(updatedCardSelections);
      console.log('Selecciones de cartas:', updatedCardSelections);
    }
  }, [playersCards, gameStarted]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const HandleModalCopy = () => {
    setisModalCopyOpen(true);
  };

  const closeCopyModal = () => {
    setisModalCopyOpen(false);
  };

  const handleCardSelect = (card) => {
    if (gameStarted) {
      const playersLength = playersCards.length;
      setPlayersCards((prevPlayersCards) => [
        ...prevPlayersCards.slice(0, playersLength - 2),
        card,
        ...prevPlayersCards.slice(playersLength - 1),
      ]);
      setSelectedCard(card);
      console.log(playersCards);
    }
  };

  const handleRevealCards = () => {
    setCountingVotes(true);

    setTimeout(() => {
      setShowCards(true);
      setGameStarted(false);
      setResetKey(resetKey + 1);

      const filteredCards = playersCards.filter((card) => card !== null && card !== '?' && card !== '☕');
      const sum = filteredCards.reduce((acc, card) => acc + card, 0);
      const average = sum / filteredCards.length;

      setAverageCard(Number(average.toFixed(1)));
      setCountingVotes(false);
    }, 1000);
  };

  const handleNewVote = () => {
    setShowCards(false);
    setGameStarted(true);
    setSelectedCard(null);
    setPlayersCards([1, 2, 3, 5, 8, 5, null, 5]);
    setAverageCard(null);
    setCardSelections({});
  };

  return (
    <>
      <OrgHeader title={game || 'Sprint 21'} content='Invitar jugadores' player={`${PlayerName.substring(0, 2).toUpperCase()}`} openModal={HandleModalCopy} />
      <TmpModal content={OrgForm} isOpen={isModalOpen} onClose={closeModal}
        componentProps={{ label: 'Tu nombre', content: 'Continuar', radio: true }} />
      <TmpModal isOpen={isModalCopyOpen} header={true} onClose={closeCopyModal} headerContent={'invitar jugadores'}
        content={OrgFormCopy} componentProps={{ content: 'Copiar link' }} />

      <div className="poker-table">
        <div className="cell"></div>
        <div className="cell spot">
          <div className='card'>
            <div className={`player ${playersCards[0] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[0] : ''}</div>
            <p>play1</p>
          </div>
          <div className='card'>
            <div className={`player ${playersCards[1] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[1] : ''}</div>
            <p>play2</p>
          </div>
          <div className='card'>
            <div className={`player ${playersCards[2] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[2] : ''}</div>
            <p>play3</p>
          </div>
        </div>
        <div className="cell "></div>
        <div className="cell spot">
          <div className='card'>
            <div className={`player ${playersCards[3] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[3] : ''}</div>
            <p>play4</p>
          </div>
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
          <div className='card'>
            <div className={`player ${playersCards[4] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[4] : ''}</div>
            <p>play5</p>
          </div>
        </div>
        <div className="cell "></div>
        <div className="cell spot bottom">
          <div className='card'>
            <div className={`player ${playersCards[5] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[5] : ''}</div>
            <p>play6</p>
          </div>
          <div className='card'>
            <div className={`player ${selectedCard !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? selectedCard : ''}</div>
            <p>{PlayerName}</p>
          </div>
          <div className='card'>
            <div className={`player ${playersCards[7] !== null && gameStarted ? 'selected' : ''}`}>
              {showCards ? playersCards[7] : ''}</div>
            <p>play8</p>
          </div>
        </div>
        <div className="cell "></div>
      </div>

      {showCards && (
        <OrgCardsSelections cardSelections={cardSelections} averageCard={averageCard} />
      )}

      {gameStarted && !showCards && (
        <OrgDeck
          onCardSelect={handleCardSelect}
          averageCard={averageCard}
          resetKey={resetKey}
          cardValues={[0, 1, 3, 5, 8, 13, 21, 34, 55, 89, '?', '☕']}
        />
      )}


    </>
  );
};

export default PokerBoard;
