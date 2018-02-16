import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import HackerNewsContainer from './HackerNewsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentSource = this.changeCurrentSource.bind(this);
    this.state = {
      sources: [
        {title: 'Hacker News', path: '/hacker-news', acronym: 'HN'}
      ],
      currentSource: null
    }
  };

  changeCurrentSource(source=null) {
    this.setState({
      currentSource: source
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar currentSource={this.state.currentSource}/>
          <Route
            exact path="/"
            render={() => (
              <HomeContainer
                sources={this.state.sources}
                changeCurrentSource={this.changeCurrentSource}
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
