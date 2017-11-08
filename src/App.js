import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbox from './Components/Chatbox/chatbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatbox />
      </div>
    );
  }
}

export default App;
