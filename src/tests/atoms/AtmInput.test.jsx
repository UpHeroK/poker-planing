import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AtmInput from '../../components/atoms/AtmInput'; 

describe('AtmInput', () => {
  const testId = 'input-test';
  const handleChange = jest.fn();
  const handleValidityChange = jest.fn();

  test('se renderiza el input correctamente con las propiedades adecuadas', () => {
    render(<AtmInput 
      label="Test Input" 
      name="testInput" 
      value="Test" 
      required={true} 
      testId={testId} 
      onChange={handleChange} 
      onValidityChange={handleValidityChange}
    />);
    const input = screen.getByTestId(testId);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testInput');
    expect(input).toHaveAttribute('required');
    expect(input.value).toBe('Test');
  });

  test('valida la longitud del texto correctamente', () => {
    render(<AtmInput 
      name="testInput" 
      value="" 
      testId={testId} 
      onChange={handleChange} 
      onValidityChange={handleValidityChange}
    />);
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 'Abc' } });
    expect(screen.getByText('La longitud debe estar entre 5 y 20 caracteres.')).toBeInTheDocument();
  });

  test('valida caracteres especiales correctamente', () => {
    render(<AtmInput 
      name="testInput" 
      value="" 
      testId={testId} 
      onChange={handleChange} 
      onValidityChange={handleValidityChange}
    />);
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 'Test#123' } });
    expect(screen.getByText('No se permiten caracteres especiales (_.*#/-).')).toBeInTheDocument();
  });

  test('valida la cantidad de números correctamente', () => {
    render(<AtmInput 
      name="testInput" 
      value="" 
      testId={testId} 
      onChange={handleChange} 
      onValidityChange={handleValidityChange}
    />);
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: '1234Test' } });
    expect(screen.getByText('Máximo 3 números permitidos y no solo números.')).toBeInTheDocument();
  });

  test('cambia el valor al escribir en el input', () => {
    render(<AtmInput 
      name="testInput" 
      value="" 
      testId={testId} 
      onChange={handleChange} 
      onValidityChange={handleValidityChange}
    />);
    const input = screen.getByTestId(testId);
    fireEvent.change(input, { target: { value: 'Nuevo valor' } });
    expect(handleChange).toHaveBeenCalled();
  });
});