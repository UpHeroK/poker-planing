import React from 'react';

const AtmDuoRadio = () => {
  return (
    <div className="atm-duo-radio">
      <label>
        Jugador
        <input type="radio" name="role" value="jugador" className="custom-radio" required />
      </label>
      <label>
        Espectador
        <input type="radio" name="role" value="espectador" className="custom-radio" required />
      </label>
    </div>
  );
};

export default AtmDuoRadio;
