import React, { Component } from 'react';
import SourcePage from '../components/SourcePage'

class SourcePageContainer extends Component  {
  constructor(props){
    super(props);
    this.changeCurrentTopic = this.changeCurrentTopic.bind(this);
    this.state = {
      currentTopic: 'Top'
    };
  }

  changeCurrentTopic(topic) {
    this.setState({
      currentTopic: topic
    });
  };

  render() {
    return (
      <SourcePage
        source={this.props.source}
        currentTopic={this.state.currentTopic}
        changeCurrentTopic={this.changeCurrentTopic}
      />
    );
  }
}

export default SourcePageContainer;