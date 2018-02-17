import React, { Component } from 'react';
import SourcePage from '../components/SourcePage'

class HackerNewsContainer extends Component  {
  state = {
    sourceTitle: 'Hacker News',
    source: this.props.findSource('Hacker News')
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.state.sourceTitle);
  }

  render() {
    return (
      <SourcePage source={this.state.source} sourceTitle={this.state.sourceTitle}/>
    );
  }
}

export default HackerNewsContainer;