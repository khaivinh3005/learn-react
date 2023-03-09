import React, { Component } from 'react';

export default class PropsComponent extends Component {
  render() {
    const { name, user } = this.props;
    const { age, name: nameUser } = user;
    return (
      <div>
        <h1>Xin chào {name}</h1>
        <h2>Day la {nameUser}</h2>
        <h3>Tuoi: {age}</h3>
      </div>
    );
  }
}
