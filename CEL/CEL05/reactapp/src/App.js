import React from 'react';
import "./App.css";
import Subject from "./Subject";  
const App = () => { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <Subject title="React" /> 
        <Subject title="Angular" /> 
      </header> 
    </div> 
  ); 
}; 
export default App; 