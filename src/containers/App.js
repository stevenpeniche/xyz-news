import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import shortid from 'shortid';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import HackerNewsContainer from './HackerNewsContainer';
import './App.css';

const faviconFinder = (rootURL) => {
  return `https://besticon-demo.herokuapp.com/icon?url=${rootURL}/&size=70..120..200`
}

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentSource = this.changeCurrentSource.bind(this);
    this.findSource = this.findSource.bind(this);
    this.state = {
      sources: [
        {
          id: shortid.generate(),
          title: 'Hacker News',
          path: '/hacker-news',
          faviconURL: faviconFinder('https://news.ycombinator.com'),
          topics: ['Top', 'New', 'Best', 'Ask', 'Show', 'Jobs']
        }
      ],
      currentSourceID: null
    }
  };

  changeCurrentSource(source=null) {
    this.setState({
      currentSourceID: source
    });
  }

  findSource(path) {
    return this.state.sources.find((item) => {
      return item.path === path
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar currentSourceID={this.state.currentSourceID}/>
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
            render={(props) => (
              <HackerNewsContainer
                path={props.match.path}
                changeCurrentSource={this.changeCurrentSource}
                findSource={this.findSource}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
