import React, { Component } from 'react';
import './App.css';
// import intro from './components/intro.js';
import Videoplyr from './components/Videoplyr.js';
// import script from './components/script.js';

class App extends Component {
  render(){
    return (
      <div>
        {/*<h1>App test </h1>*/}
        <Videoplyr name="Plyr"/>
      </div>
    );
  }
}

export default App;
