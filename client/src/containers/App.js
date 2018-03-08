import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBarContainer from './NavBarContainer';
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
        },
        {
          id: 'cnn',
          title: 'CNN',
          faviconURL: faviconFinder('https://www.cnn.com/'),
          primaryColor: '#cc0000',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'World'
            },
            {
              name: 'Politics'
            },
            {
              name: 'Money'
            },
            {
              name: 'Health'
            },
            {
              name: 'Travel'
            },
            {
              name: 'Tech'
            }
          ]
        },
        {
          id: 'vice-news',
          title: 'Vice News',
          faviconURL: faviconFinder('https://news.vice.com/en_us'),
          primaryColor: '#000000',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'Drugs'
            },
            {
              name: 'Tech'
            },
            {
              name: 'Money'
            },
            {
              name: 'Immigration'
            },
            {
              name: 'Politics'
            },
            {
              name: 'Terrorism'
            }
          ]
        },
        {
          id: 'techcrunch',
          title: 'TechCrunch',
          faviconURL: faviconFinder('https://techcrunch.com/'),
          primaryColor: '#0D9307',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'Apple'
            }
          ]
        },
        {
          id: 'crypto-coins-news',
          title: 'Crypto News',
          faviconURL: faviconFinder('https://www.ccn.com/'),
          primaryColor: '#fea339',
          topics: [
            {
              name: 'Top'
            },
            {
              name: 'Bitcoin'
            },
            {
              name: 'Ethereum'
            },
            {
              name: 'Litecoin'
            },
            {
              name: 'Ripple'
            },
            {
              name: 'Monero'
            },
            {
              name: 'Iota'
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
          <NavBarContainer
            currentSourceID={this.state.currentSourceID}
            sources={this.state.sources}
          />
          <Route
            className="home-route"
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
                  className="source-page-route"
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
