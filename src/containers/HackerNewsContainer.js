import React, { Component } from 'react';
import SourcePage from '../components/SourcePage'

class HackerNewsContainer extends Component  {
  state = {
    source: this.props.findSource(this.props.path),
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.state.source.id);
  }

  render() {
    return (
      <SourcePage source={this.state.source}/>
    );
  }
}

export default HackerNewsContainer;