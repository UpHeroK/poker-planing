import React, { useState } from 'react';

const AtmInput = ({ label, value, onChange, required, disabled, inputRef, customStyle }) => {
  const inputClassName = customStyle ? 'atm-input-secundary' : 'atm-input-primary';
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length < 5 || inputValue.length > 20) {
      setValidationMessage('La longitud debe estar entre 5 y 20 caracteres.');
    } else if (/[_.*#/-]/.test(inputValue)) {
      setValidationMessage('No se permiten caracteres especiales (_.*#/-).');
    } else {
      const numericCount = (inputValue.match(/[0-9]/g) || []).length;
      if (numericCount > 3 || /^\d+$/.test(inputValue)) {
        setValidationMessage('Máximo 3 números permitidos y no solo números.');
      } else {
        setValidationMessage('');

      }
    }
  };

  return (
    <div className={inputClassName}>
      <label>{label}</label>
      <input
        type="text"
        minLength='5'
        maxLength='20'
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
