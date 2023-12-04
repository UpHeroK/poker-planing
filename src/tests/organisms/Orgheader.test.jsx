import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OrgHeader from '../../components/organisms/OrgHeader'; 

jest.mock('../../components/atoms/AtmButton', () => ({ content, onClick }) => <button onClick={onClick}>{content}</button>);

describe('OrgHeader', () => {
  test('renderiza el contenido correctamente', () => {
    const props = {
      description: 'Descripción de prueba',
      title: 'Título de Prueba',
      playerName: 'JP',
      buttonText: 'Hacer Click',
      onButtonClick: jest.fn(),
    };

    render(<OrgHeader {...props} />);

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.playerName)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: props.buttonText })).toBeInTheDocument();
  });

  test('llama a onButtonClick cuando se hace clic en el botón', () => {
    const props = {
      buttonText: 'Hacer Click',
      onButtonClick: jest.fn(),
    };

    render(<OrgHeader {...props} />);
    fireEvent.click(screen.getByRole('button', { name: props.buttonText }));

    expect(props.onButtonClick).toHaveBeenCalled();
  });

  test('no muestra el icono del jugador si playerName no está presente', () => {
    const props = {
      description: 'Descripción de prueba',
      title: 'Título de Prueba',
      buttonText: 'Hacer Click',
      onButtonClick: jest.fn(),
    };
  
    const { container } = render(<OrgHeader {...props} />);
    const playerIcon = container.querySelector('.icon-player');
  
    expect(playerIcon).toBeNull();
  });
  
});
