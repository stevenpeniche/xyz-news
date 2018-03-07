import React, { Component } from 'react';
import Home from '../components/Home';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.changeCurrentSource();
  }

  render() {
    return (
      <Home sources={this.props.sources}/>
    );
  }
}

export default HomeContainer;