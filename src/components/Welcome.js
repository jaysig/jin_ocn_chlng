import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from '../logo.svg';
import '../App.css';

const Welcome = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export default Welcome;
