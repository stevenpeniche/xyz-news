import React from 'react';
import Sources from './Sources';

const Home = (props) => {
  return (
    <div>
      <Sources sources={props.sources}/>
    </div>
  );
}

export default Home;