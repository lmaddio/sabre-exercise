import React, { Component } from 'react';

import core from './modules/core';
import players from './modules/players';

class App extends Component {
  render() {
    return (
      <div className="App">
        <core.components.Header.default/>
        <players.pages.PlayersList.default/>
        <core.components.Loader.default/>
      </div>
    );
  }
}

export default App;
