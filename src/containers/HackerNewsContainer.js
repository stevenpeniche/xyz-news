import React, { Component } from 'react';
import SourcePage from '../components/SourcePage'

class HackerNewsContainer extends Component  {
  state = {
    source: 'Hacker News'
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.state.source)
  }

  render() {
    return (
      <SourcePage />
    );
  }
}

export default HackerNewsContainer;