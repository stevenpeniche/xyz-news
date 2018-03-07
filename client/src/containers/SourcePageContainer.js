import React, { Component } from 'react';
import axios from 'axios';
import SourcePage from '../components/SourcePage';

class SourcePageContainer extends Component  {
  constructor(props){
    super(props);
    this.changeCurrentTopic = this.changeCurrentTopic.bind(this);
    this.state = {
      currentTopic: 'Top',
      topicData: []
    };
  }

  changeCurrentTopic(topic) {
    const source = this.props.source

    if(topic !== this.state.currentTopic) {
      const apiPath =  topic === 'Top' ?
                      `/newsapi?source=${source.id}` :
                      `/newsapi?source=${source.id}&q=${topic}`;

      this.callAPI(apiPath)
          .then(res => {
            this.setState({
              currentTopic: topic,
              topicData: res.data
            });
          })
          .catch(err => console.log(err));

      this.setState({
        currentTopic: topic
      });
    }
  };

  callAPI = async (path) => {
    const response = await axios.get(path);
    const body = await response;

    return body;
  }

  componentDidMount() {
    const source = this.props.source
    this.props.changeCurrentSource(source.id);

    this.callAPI(`/newsapi?source=${source.id}`)
        .then(res => {
          this.setState({
            topicData: res.data
          });
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <SourcePage
        className="source-page-component"
        source={this.props.source}
        currentTopic={this.state.currentTopic}
        changeCurrentTopic={this.changeCurrentTopic}
        topicData={this.state.topicData}
      />
    );
  }
}

export default SourcePageContainer;