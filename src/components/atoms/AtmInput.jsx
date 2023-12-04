import React, { useState } from 'react';

const MIN_LENGTH = 5;
const MAX_LENGTH = 20;
const MAX_NUMERIC_COUNT = 3;
const SPECIAL_CHARACTERS_REGEX = /[_.*#/-]/;
const NUMERIC_REGEX = /[0-9]/g;
const ONLY_NUMBERS_REGEX = /^\d+$/;

const AtmInput = ({ label,name, value, required, disabled, inputRef, customStyle, onChange, onValidityChange,testId }) => {
  const inputClassName = customStyle ? 'atm-input-secundary' : 'atm-input-primary';
  const [validationMessage, setValidationMessage] = useState('');

  const validateInput = (inputValue) => {
    if (inputValue.length < MIN_LENGTH || inputValue.length > MAX_LENGTH) {
      return `La longitud debe estar entre ${MIN_LENGTH} y ${MAX_LENGTH} caracteres.`;
    }

    if (SPECIAL_CHARACTERS_REGEX.test(inputValue)) {
      return 'No se permiten caracteres especiales (_.*#/-).';
    }

    const numericCount = (inputValue.match(NUMERIC_REGEX) || []).length;
    if (numericCount > MAX_NUMERIC_COUNT || ONLY_NUMBERS_REGEX.test(inputValue)) {
      return `Máximo ${MAX_NUMERIC_COUNT} números permitidos y no solo números.`;
    }

    return '';
  };

  const handleChange = (event) => {
    const message = validateInput(event.target.value);
    setValidationMessage(message);
    onValidityChange(!message);
    onChange(event);
  };

  return (
    <div className={inputClassName}>
      <label>{label}</label>
      <input
        data-testid={testId}
        name={name}
        type="text"
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        value={value}
        onChange={handleChange}
        required={required}
        ref={inputRef}
        disabled={disabled}
      />
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </div>
  );
};

export default AtmInput;
