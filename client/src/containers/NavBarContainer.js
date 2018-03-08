import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import shortid from 'shortid';
import './NavBarContainer.css';

class NavBar extends Component {
  state = {
    menuActive: false
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  setMenuStatus = (target) => {
    this.setState((prevState) => {
      const nextState = target === 'logo' ? false : !prevState.menuActive
      return {menuActive: nextState}
    });
  }

  render() {
    const visibility = this.state.menuActive ? "visible" : "hidden";
    const menuAnimationClass = this.state.menuActive ? "animated fadeIn" : "";
    return (
      <nav className="nav-bar">
        <Link to="/"
          id="logo"
          onClick={(e) => this.setMenuStatus(e.target.id)}
        >
          XYZ news
        </Link>
        {this.props.currentSourceID ?
          <div className="nav-bar-menu">
            <div className="nav-bar-menu-icon animated fadeInLeft" onClick={this.setMenuStatus}>
              <i className="menu-icon fas fa-bars"></i>
            </div>
            <div className={`nav-bar-menu-list-container ${menuAnimationClass}`} style={{"visibility": visibility}}>
              <div className="nav-bar-menu-list">
                {this.props.sources.map((source) => {
                  return(
                    <Link to={`/${source.id}`} key={shortid.generate()}
                      className="nav-bar-menu-list-item"
                      onClick={this.setMenuStatus}>
                      <div className="menu-item-source-icon-container">
                        <img
                          className="source-icon levitate"
                          src={source.faviconURL}
                          alt={source.title}
                          style={{backgroundColor: source.primaryColor}}
                        />
                      </div>
                      <div className="source-title">
                        {source.title}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          :
          <div></div>
        }
        <div className="scroll-to-top-section"  onClick={this.scrollToTop}>
        ...
        </div>
      </nav>
    );
  }
}

export default NavBar;