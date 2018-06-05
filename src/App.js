import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  FormText,
  Label, 
  Input, 
  Container,
  Table,
} from 'reactstrap';

import Header from './components/Header';
import {PlayersForm} from './modules/players/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PlayersForm.default/>
      </div>
    );
  }
}

export default App;
