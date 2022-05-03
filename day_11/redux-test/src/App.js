import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import Base from './features/base';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        {/* <Base></Base> */}
      </div>
    );
  }
}

export default App;
