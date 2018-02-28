import React from 'react';
import '../App.css';
import Header from './Header';

const Welcome = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default Welcome;
