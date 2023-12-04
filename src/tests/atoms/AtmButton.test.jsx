import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import AtmButton from '../../components/atoms/AtmButton'; 

describe('AtmButton', () => {
  test('se renderiza con contenido', () => {
    render(<AtmButton content="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('no se renderiza cuando content es null', () => {
    const { container } = render(<AtmButton content={null} />);
    expect(container.firstChild).toBeNull();
  });

  test('maneja el evento onClick', () => {
    const handleClick = jest.fn();
    render(<AtmButton content="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('aplica estilos secundarios cuando customStyle es true', () => {
    render(<AtmButton content="Styled Button" customStyle={true} />);
    expect(screen.getByText('Styled Button')).toHaveClass('atm-button-secundary');
  });

  test('aplica estilos primarios cuando customStyle es false', () => {
    render(<AtmButton content="Styled Button" customStyle={false} />);
    expect(screen.getByText('Styled Button')).toHaveClass('atm-button-primary');
  });
});
