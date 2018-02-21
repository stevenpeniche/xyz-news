import React, { Component } from 'react';
import axios from 'axios';
import SourcePage from '../components/SourcePage';

class SourcePageContainer extends Component  {
  constructor(props){
    super(props);
    this.changeCurrentTopic = this.changeCurrentTopic.bind(this);
    this.state = {
      currentTopic: null,
      topicData: []
    };
  }

  changeCurrentTopic(topic) {
    this.setState({
      currentTopic: topic
    });
  };

  callAPI = async (path) => {
    const response = await axios.get(path);
    const body = await response;

    return body;
  }

  componentDidMount() {
    this.props.changeCurrentSource(this.props.source.id);
    this.callAPI(`/newsapi?source=${this.props.source.id}`)
        .then(res => {
          this.setState({
            currentTopic: this.props.source.topics[0].name,
            topicData: res.data
          });
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <SourcePage
        source={this.props.source}
        currentTopic={this.state.currentTopic}
        changeCurrentTopic={this.changeCurrentTopic}
        topicData={this.state.topicData}
      />
    );
  }
}

export default SourcePageContainer;