import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    console.log('props:', this.props.valueHeader);
    const { namePage, navMenu } = this.props.valueHeader;
    console.log('namePage : ', namePage);
    return (
      <div
        style={{
          backgroundColor: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <span>{namePage}</span>
        <ul>
          <li>{navMenu.home}</li>
          <li>{navMenu.about}</li>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
