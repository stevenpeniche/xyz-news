import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import HackerNewsContainer from './HackerNewsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentSource = this.changeCurrentSource.bind(this);
    this.state = {
      sources: [
        {title: 'HackerNews', path: '/hacker-news'}
      ],
      currentSource: null
    }
  };

  changeCurrentSource(source) {
    this.setState({
      currentSource: source
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route
            exact path="/"
            render={() => (
              <Home
                sources={this.state.sources}
              />
            )}
          />
          <Route
            exact path="/hacker-news"
            render={() => (
              <HackerNewsContainer
                changeCurrentSource={this.changeCurrentSource}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
