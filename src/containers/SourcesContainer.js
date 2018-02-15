import React, { Component } from 'react';
import Sources from '../components/Sources';

class SourcesContainer extends Component {
  render() {
    return <Sources sources={this.props.sources}/> ;
  }
}

export default SourcesContainer;