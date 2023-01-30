import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
        <div>
        <Movie name="Spiderman"/>
        <Movie/>
        <Movie name="Manifest"/>
        <Movie/>
        </div>
    );
  }
}

export default App;