import React, { Component } from 'react';
import HackerNews from '../components/HackerNews'

class HackerNewsContainer extends Component  {
  state = {
    source: 'Hacker News'
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.state.source)
  }

  render() {
    return (
      <HackerNews />
    );
  }
}

export default HackerNewsContainer;