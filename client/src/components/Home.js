import React from 'react';
import Sources from './Sources';
import './Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <Sources className ="sources" sources={props.sources}/>
    </div>
  );
}

export default Home;