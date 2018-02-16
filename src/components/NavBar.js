import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <Link to="/" id="logo">XYZ news</Link>
      <Link to="#" className="nav-bar-link">Sources<i className="down-icon fas fa-chevron-down"></i></Link>
    </nav>
  );
}

export default NavBar;