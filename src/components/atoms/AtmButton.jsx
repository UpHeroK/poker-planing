import React from 'react';

const AtmButton = ({ onClick, disabled, content, customStyle }) => {
  const buttonClassName = customStyle ? 'atm-button-secundary' : 'atm-button-primary';

  return content != null ? (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  ) : (
    <></>
  );
};

export default AtmButton;
