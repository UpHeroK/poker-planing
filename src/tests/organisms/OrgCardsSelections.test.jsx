import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import OrgCardsSelections from '../../components/organisms/OrgCardsSelections';
import PropTypes from 'prop-types';

jest.mock('../../components/atoms/AtmCard', () => {
  const MockedAtmCard = ({ cardValue, showCard, onCardClick }) => (
    <div onClick={onCardClick}>{showCard ? cardValue : null}</div>
  );
  MockedAtmCard.displayName = 'MockedAtmCard';
  MockedAtmCard.propTypes = {
    cardValue: PropTypes.string.isRequired,
    showCard: PropTypes.bool,
    onCardClick: PropTypes.func
  };
  
  MockedAtmCard.defaultProps = {
    showCard: false,
    isClickable: false,
    onCardClick: () => {}
  };
  return MockedAtmCard;
});
describe('OrgCardsSelections', () => {
  test('renderiza AtmCard para cada selección de tarjeta', () => {
    const cardSelections = {
      '3': 2,
      '5': 1
    };
    render(<OrgCardsSelections cardSelections={cardSelections} />);

    const cards = screen.getAllByTestId('mock-atm-card');
    expect(cards.length).toBe(Object.keys(cardSelections).length);
    expect(cards[0]).toHaveTextContent('3');
    expect(cards[1]).toHaveTextContent('5');
  });

  test('muestra el promedio cuando averageCard está presente', () => {
    const averageCard = '4.5';
    render(<OrgCardsSelections averageCard={averageCard} />);
    expect(screen.getByText('Promedio:')).toBeInTheDocument();
    expect(screen.getByText(averageCard)).toBeInTheDocument();
  });

  test('no muestra el promedio cuando averageCard no está presente', () => {
    render(<OrgCardsSelections />);
    expect(screen.queryByText('Promedio:')).not.toBeInTheDocument();
  });
});
