import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {}
  classSelector = (value) => {
    const classValue = ['button','button-text'];
    // Adding Class For Correct Button Size
    if (value === 'clear') {
      classValue.push('button-large');
    } else if (value === '=') {
      classValue.push('button-medium');
    } else {
      classValue.push('button-small');
    }
    // Adding Colour For Correct Button
    if (['*', '÷', '=', '+', '-'].includes(value)) {
      classValue.push('button-color-operator');
    } else if (value === 'clear') {
      classValue.push('button-color-clear');
    } else {
      classValue.push('button-color-number');
    }
    // Return the class with correct styling
    return classValue.join(' ');
  };

  render() {
    return (
      <button onClick={this.handleClick} className={this.classSelector(this.props.buttonValue)}>
        {this.props.buttonValue}
      </button>
    );
  }
}

export default Button;
