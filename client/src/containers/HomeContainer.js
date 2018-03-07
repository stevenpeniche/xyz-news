import React, { Component } from 'react';
import Home from '../components/Home';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.changeCurrentSource();
  }

  render() {
    return (
      <Home className="home-component" sources={this.props.sources}/>
    );
  }
}

export default HomeContainer;