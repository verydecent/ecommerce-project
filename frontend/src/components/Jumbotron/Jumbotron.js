import React from 'react';
import './Jumbotron.css';
import jumbotron from '../../Images/jumbotron.jpg';

function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <img className="jumbotron" src={jumbotron} alt="" />
    </div>
  );
}

export default Jumbotron;