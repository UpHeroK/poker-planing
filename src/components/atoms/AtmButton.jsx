import React from 'react';

const AtmButton = ({ onClick, disabled, content }) => {
  return (
    content != null ?(
    <button className='atm-button' onClick={onClick} disabled={disabled}>
      {content}
    </button>
  ) : (<></> ));
};

export default AtmButton;
