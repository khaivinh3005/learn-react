import React, { Component } from 'react';
import ComponentCon from './componentCon';
import Header from './header';

class ComponentCha extends Component {
  render() {
    const bgColor = 'brown';
    return (
      <div>
        <Header bgColor={bgColor} />
      </div>
    );
  }
}

export default ComponentCha;
