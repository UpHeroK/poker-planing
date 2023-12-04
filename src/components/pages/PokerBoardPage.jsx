import React, { useState, useEffect } from 'react';
import OrgHeader from '../organisms/OrgHeader';
import TmpModal from '../templates/TmpModal';
import OrgForm from '../organisms/OrgForm';
import OrgDeck from '../organisms/OrgDeck';
import OrgFormClipboard from '../organisms/OrgFormClipboard';
import OrgPokerTable from '../organisms/OrgPokerTable';
import OrgCardsSelections from '../organisms/OrgCardsSelections';

const PokerBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalClipboardOpen, setisModalClipboardOpen] = useState(false);
  const [game, setGame] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [gameStarted, setGameStarted] = useState(true);
  const [playersCards, setPlayersCards] = useState([1, 2, 3, 5, 8, 5, null, 5]);
  const [showCards, setShowCards] = useState(false);
  const [averageCard, setAverageCard] = useState(null);
  const [cardSelections, setCardSelections] = useState({});
  const [countingVotes, setCountingVotes] = useState(false);
  const [PlayerName, setPlayerName] = useState('');
  const [playerType, setPlayerType] = useState('Espectador')
  const CardValues = [1, 2, 3, 5, 8, 13, 21, 34, 55, '?', '☕'];
  useEffect(() => {
    const storedGame = localStorage.getItem('gameName');
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
    }
  }, [playersCards, gameStarted]);

  const closeModal = (formData) => {
    setPlayerName(formData.name);
    setPlayerType(formData.role);
    setIsModalOpen(false);
  };

  const HandleModalClipboard = () => {
    setisModalClipboardOpen(true);
  };

  const closeModalClipboard = () => {
    setisModalClipboardOpen(false);
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
    }
  };

  const handleRevealCards = () => {
    setCountingVotes(true);

    setTimeout(() => {
      setShowCards(true);
      setGameStarted(false);

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
      <OrgHeader title={game || 'Sprint 21'} content='Invitar jugadores' player={`${PlayerName.substring(0, 2).toUpperCase()}`} onButtonClick={HandleModalClipboard} />
      <TmpModal content={OrgForm} isOpen={isModalOpen} onClose={closeModal}
        componentProps={{ label: 'Tu nombre', content: 'Continuar', radio: true }} />
      <TmpModal isOpen={isModalClipboardOpen} header={true} onClose={closeModalClipboard} headerContent={'invitar jugadores'}
        content={OrgFormClipboard} componentProps={{ content: 'Copiar link' }} />

      <OrgPokerTable
        playersCards={playersCards}
        showCards={showCards}
        gameStarted={gameStarted}
        countingVotes={countingVotes}
        handleRevealCards={handleRevealCards}
        handleNewVote={handleNewVote}
        PlayerName={PlayerName}
        selectedCard={selectedCard}
      />

      {showCards && (
        <OrgCardsSelections cardSelections={cardSelections} averageCard={averageCard} />
      )}

      {gameStarted && !showCards && playerType !== 'Espectador' && (
        <OrgDeck
          onCardSelect={handleCardSelect}
          averageCard={averageCard}
          cardValues={CardValues}
        />
      )}


    </>
  );
};

export default PokerBoard;
