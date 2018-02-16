import React from 'react';
import NavBar from './NavBar';
import Sources from './Sources';

const Home = (props) => {
  return (
    <div>
      <NavBar />
      <Sources sources={props.sources}/>
    </div>
  );
}

export default Home;