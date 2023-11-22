
import React from 'react';

const AtmInput = ({ label, value, onChange, required }) => {
  return (
    <div className='atm-input'>
      <label>{label}</label>
      <input 
      type="text"
      minLength='5'
      maxLength='20'
      value={value} 
      onChange={onChange}
      required={required} />
    </div>
  );
};

export default AtmInput;
