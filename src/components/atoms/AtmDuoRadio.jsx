import React from 'react';

const AtmDuoRadio = ({ onRoleChange }) => {
  const radioOptions = [
    { label: 'Jugador', value: 'jugador' },
    { label: 'Espectador', value: 'espectador' }
  ];

  return (
    <div className="atm-duo-radio">
      {radioOptions.map((option, index) => (
        <label key={index}>
          {option.label}
          <input 
            type="radio" 
            name="role" 
            value={option.value} 
            className="custom-radio" 
            required 
            onChange={onRoleChange} 
          />
        </label>
      ))}
    </div>
  );
};

export default AtmDuoRadio;
