import React, { Component } from 'react';
import SourcePageContainer from './SourcePageContainer'

class HackerNewsContainer extends Component  {
  state = {
    source: this.props.findSource(this.props.path),
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.state.source.id);
  }

  render() {
    return (
      <SourcePageContainer source={this.state.source}/>
    );
  }
}

export default HackerNewsContainer;