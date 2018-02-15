import React, { Component } from 'react';
import Home from '../components/Home';
import NavBarContainer from './NavBarContainer';
import SourcesContainer from './SourcesContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home />
        <NavBarContainer />
        <SourcesContainer />
      </div>
    );
  }
}

export default HomeContainer;