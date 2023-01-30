import React, { Component } from 'react';
import Arithmetic from './Arithmetic';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Arithmetic Function</h1>
          <Arithmetic operator='+'/>
          <Arithmetic operator='-'/>
        </div>
    );
  }
}

export default App;