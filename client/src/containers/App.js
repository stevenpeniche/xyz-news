import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import SourcePageContainer from './SourcePageContainer';
import './App.css';

const faviconFinder = (rootURL) => {
  return `https://besticon-demo.herokuapp.com/icon?url=${rootURL}/&size=70..120..200`
}

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentSource = this.changeCurrentSource.bind(this);
    this.state = {
      sources: [
        {
          id: 'hacker-news',
          title: 'Hacker News',
          faviconURL: faviconFinder('https://news.ycombinator.com'),
          primaryColor: '#ff6600',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'New'
            },
            {
              name: 'Ask'
            },
            {
              name: 'Jobs'
            }
          ]
        },
        {
          id: 'bleacher-report',
          title: 'Bleacher Report',
          faviconURL: faviconFinder('https://bleacherreport.com'),
          primaryColor: '#000000',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'MLB'
            },
            {
              name: 'NFL'
            },
            {
              name: 'NBA'
            },
            {
              name: 'UFC'
            },
            {
              name: 'Boxing'
            },
            {
              name: 'WWE'
            }
          ]
        }
      ],
      currentSourceID: null
    }
  };

  changeCurrentSource(source=null) {
    this.setState({
      currentSourceID: source
    });
  };

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
          {
            this.state.sources.map((source) => {
              return(
                <Route
                  key={source.id}
                  exact path={`/${source.id}`}
                  render={(props) => (
                    <SourcePageContainer
                      source={source}
                      path={props.match.path}
                      changeCurrentSource={this.changeCurrentSource}
                    />
                  )}
                />
              )
            })
          }
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
