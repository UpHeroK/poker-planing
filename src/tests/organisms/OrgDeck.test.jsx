import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OrgDeck from '../../components/organisms/OrgDeck';

describe('OrgDeck', () => {
  const cardValues = ['3', '5', '8'];
  const onCardSelect = jest.fn();

  test('renderiza las tarjetas según cardValues', () => {
    render(<OrgDeck cardValues={cardValues} onCardSelect={onCardSelect} />);
    cardValues.forEach((cardValue) => {
      expect(screen.getByText(cardValue)).toBeInTheDocument();
    });
  });

  test('selecciona una tarjeta y llama a onCardSelect', () => {
    render(<OrgDeck cardValues={cardValues} onCardSelect={onCardSelect} />);
    const firstCard = screen.getByText('3');
    fireEvent.click(firstCard);
    expect(firstCard).toHaveClass('selected elevate');
    expect(onCardSelect).toHaveBeenCalledWith('3');
  });

});
