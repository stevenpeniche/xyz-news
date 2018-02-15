import React, { Component } from 'react';
import NavBarContainer from './NavBarContainer';
import SourcesContainer from './SourcesContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <SourcesContainer sources={this.props.sources}/>
      </div>
    );
  }
}

export default HomeContainer;