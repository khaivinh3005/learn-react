import React, { Component } from 'react';

class ComponentChau extends Component {
  render() {
    return (
      <div>
        <h1>Day la component Chau:</h1>
        <h2>Day là tên cha: {this.props.userCon.name}</h2>
      </div>
    );
  }
}

export default ComponentChau;
