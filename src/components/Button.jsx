import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label, color, doubleSize, onClick,
}) => {
  const buttonStyle = {
    backgroundColor: color === 'orange' ? '#FF8C00' : '#E0E0E0',
  };

  return (
    <button className={`button ${doubleSize ? 'zero' : ''}`} style={buttonStyle} type="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  doubleSize: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  doubleSize: false,
};

export default Button;
