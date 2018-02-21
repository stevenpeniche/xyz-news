import React from 'react';
import Sources from './Sources';
import './Home.css';

const Home = (props) => {
  return (
    <div className="home">
      <Sources sources={props.sources}/>
    </div>
  );
}

export default Home;