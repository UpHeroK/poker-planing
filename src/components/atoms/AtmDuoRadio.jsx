import React from 'react';

const AtmDuoRadio = () => {
  return (
    <div className="atm-duo-radio">
      <label>
        <input type="radio" name="role" value="jugador" />
        Jugador
      </label>
      <label>
        <input type="radio" name="role" value="espectador" />
        Espectador
      </label>
    </div>
  );
};

export default AtmDuoRadio;
