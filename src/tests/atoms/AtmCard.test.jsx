import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import AtmCard from '../../components/atoms/AtmCard'; 

describe('AtmCard', () => {
  const cardValue = "Ace";
  const description = "This is a test card";
  const instances = 3;
  const onCardClick = jest.fn();

  test('se renderiza correctamente', () => {
    render(<AtmCard cardValue={cardValue} showCard={true} />);
    expect(screen.getByText(cardValue)).toBeInTheDocument();
  });

  test('llama a onCardClick cuando es clickeable', () => {
    render(<AtmCard cardValue={cardValue} showCard={true} isClickable={true} onCardClick={onCardClick} />);
    fireEvent.click(screen.getByText(cardValue));
    expect(onCardClick).toHaveBeenCalledWith(cardValue);
  });

  test('se muestra con isVotingCard activado', () => {
    render(<AtmCard cardValue={cardValue} showCard={true} isVotingCard={true} instances={instances} />);
    expect(screen.getByText(`${cardValue}`)).toBeInTheDocument();
    expect(screen.getByText(`${instances} votos`)).toBeInTheDocument();
  });

  test('se muestra con isVotingCard desactivado y descripción', () => {
    render(<AtmCard cardValue={cardValue} showCard={true} description={description} />);
    expect(screen.getByText(cardValue)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('aplica clases correctas cuando está seleccionado', () => {
    render(<AtmCard cardValue={cardValue} showCard={true} isSelected={true} isClickable={true} />);
    const cardElement = screen.getByText(cardValue);
    expect(cardElement).toHaveClass('selected elevate');
  });

  test('oculta el valor de la tarjeta cuando showCard es falso', () => {
    render(<AtmCard cardValue={cardValue} showCard={false} />);
    expect(screen.queryByText(cardValue)).toBeNull();
  });
});