import React from 'react';
import PropTypes from 'prop-types';

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
AtmButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  content: PropTypes.node,
  customStyle: PropTypes.bool
};

AtmButton.defaultProps = {
  disabled: false,
  customStyle: false
};

export default AtmButton;
