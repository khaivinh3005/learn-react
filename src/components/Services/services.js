import React, { Component } from 'react';
import FooterComponent from '../Footer/footer';
import HeaderComponent from '../Header/header';

class ServiesComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className='text-center'>
          <p className='text-danger'>SERVICES WE ARE OFFERING</p>
          <h1 className='font-weight-bold'>
            WE DESIGN DIGITAL PRODUCTS THAT HELP <br /> GROW BUSINESSES.
          </h1>
          <h4 className='text-muted font-weight-lighter'>
            We are committed to providing our customers with exceptional service{' '}
            <br />
            while offering our employees the best training.
          </h4>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ServiesComponent;
