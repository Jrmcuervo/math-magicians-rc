import PropTypes from 'prop-types';
import '../styles/Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="screen">0</div>
    <div className="buttons">
      <div className="row">
        <Button label="AC" color="light-gray" />
        <Button label="+/-" color="light-gray" />
        <Button label="%" color="light-gray" />
        <Button label="÷" color="orange" />
      </div>
      <div className="row">
        <Button label="7" color="gray" />
        <Button label="8" color="gray" />
        <Button label="9" color="gray" />
        <Button label="×" color="orange" />
      </div>
      <div className="row">
        <Button label="4" color="gray" />
        <Button label="5" color="gray" />
        <Button label="6" color="gray" />
        <Button label="-" color="orange" />
      </div>
      <div className="row">
        <Button label="1" color="gray" />
        <Button label="2" color="gray" />
        <Button label="3" color="gray" />
        <Button label="+" color="orange" />
      </div>
      <div className="row">
        <Button label="0" color="gray" doubleSize />
        <Button label="." color="gray" />
        <Button label="=" color="orange" />
      </div>
    </div>
  </div>
);

const Button = ({ label, color, doubleSize }) => {
  const buttonStyle = {
    backgroundColor: color === 'orange' ? '#FF8C00' : '#E0E0E0',
    gridColumn: doubleSize ? 'span 2' : 'span 1',
  };

  return (
    <button className="button" style={buttonStyle} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  doubleSize: PropTypes.bool,
};

Button.defaultProps = {
  doubleSize: false,
};

export default Calculator;
