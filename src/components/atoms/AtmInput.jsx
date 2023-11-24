
import React from 'react';

const AtmInput = ({ label, value, onChange, required , disabled, inputRef, customStyle }) => {

  const inputClassName = customStyle ? 'atm-input-secundary' : 'atm-input-primary';

  return (
    <div className={inputClassName}>
      <label>{label}</label>
      <input 
      type="text"
      minLength='5'
      maxLength='20'
      value={value} 
      onChange={onChange}
      required={required}
      ref={inputRef}
      disabled={disabled} />
    </div>
  );
};

export default AtmInput;
