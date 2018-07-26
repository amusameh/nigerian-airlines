import React, { Component } from 'react';
import '../../App.css';
import './button.css'

class Button extends Component {
  render() {
    const { textvalue } = this.props;
    return (
      <button className='btn-style'>{textvalue}</button>
    );
  }
}

export default Button;
