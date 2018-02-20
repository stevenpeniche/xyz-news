import React, { Component } from 'react';
import SourcePage from '../components/SourcePage'

class SourcePageContainer extends Component  {
  constructor(props){
    super(props);
    this.changeCurrentTopic = this.changeCurrentTopic.bind(this);
    this.state = {
      currentTopic: null
    };
  }

  componentDidMount() {
    this.setState({
      currentTopic: this.props.source.topics[0]
    })
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