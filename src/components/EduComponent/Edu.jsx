import React, { Component } from 'react';
import Header from '../header';
import HeaderComponent from './Header/HeaderComponent';

class Edu extends Component {
  render() {
    const valueHeader = {
      namePage: 'educature',
      navMenu: {
        home: 'Home',
        about: 'About',
      },
    };
    return (
      <div>
        <HeaderComponent valueHeader={valueHeader} />
        {/* Carousel */}
        {/* Section */}
      </div>
    );
  }
}

export default Edu;
