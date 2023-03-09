import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  render() {
    console.log('color: ', this.props.bgColor);
    return (
      <div
        className='headerComponent'
        style={{ backgroundColor: this.props.bgColor }}
      ></div>
    );
  }
}
