import React, { Component } from 'react';

import Header from './components/Header';
import {PlayersList} from './modules/players/scenes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PlayersList.default/>
      </div>
    );
  }
}

export default App;
