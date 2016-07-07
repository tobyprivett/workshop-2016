import React, { Component } from 'react';
import Graph from './graph'

export default class App extends Component {
  render() {
    return (
      <Graph data={this.props.datasets[0]} />
    );
  }
}
