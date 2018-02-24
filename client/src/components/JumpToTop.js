import React, { Component} from 'react';

class JumpToTop extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      jumpVisible: false
    }
  }

  handleScroll() {
    let html = document.documentElement;

    if(html.scrollTop > 380) {
      this.setState({
        jumpVisible: true
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        { this.state.jumpVisible ?
          <div className="jump-icon">
            <i className="fas fa-angle-double-up"></i>
          </div>
          :
          <div></div>
        }
      </div>
    )
  }
}

export default JumpToTop;







