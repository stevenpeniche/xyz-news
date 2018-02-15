import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HomeContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
