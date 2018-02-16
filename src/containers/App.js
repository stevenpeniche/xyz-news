import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [
        {title: 'HackerNews', path: '/hacker-news'}
      ],
      currentSource: null,
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact path="/"
            sources={this.state.sources}
            render={(sources) => (
              <Home sources={this.state.sources} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
