import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);

    const { total, next } = newData;
    const valueToDisplay = next || total || '0';
    setDisplayValue(valueToDisplay);
  };

  return (
    <div className="calculator">
      <div className="screen">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <Button label="AC" color="light-gray" onClick={handleButtonClick} />
          <Button label="+/-" color="light-gray" onClick={handleButtonClick} />
          <Button label="%" color="light-gray" onClick={handleButtonClick} />
          <Button label="÷" color="orange" onClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button label="7" color="gray" onClick={handleButtonClick} />
          <Button label="8" color="gray" onClick={handleButtonClick} />
          <Button label="9" color="gray" onClick={handleButtonClick} />
          <Button label="x" color="orange" onClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button label="4" color="gray" onClick={handleButtonClick} />
          <Button label="5" color="gray" onClick={handleButtonClick} />
          <Button label="6" color="gray" onClick={handleButtonClick} />
          <Button label="-" color="orange" onClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button label="1" color="gray" onClick={handleButtonClick} />
          <Button label="2" color="gray" onClick={handleButtonClick} />
          <Button label="3" color="gray" onClick={handleButtonClick} />
          <Button label="+" color="orange" onClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button label="0" color="gray" doubleSize onClick={handleButtonClick} />
          <Button label="." color="gray" onClick={handleButtonClick} />
          <Button label="=" color="orange" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

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

export default Calculator;
