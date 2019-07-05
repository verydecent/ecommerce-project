import React from 'react';
import {NavLink} from 'react-router-dom';

const x = {
  width: '100%',
  border: '1px solid green'
}

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="Navigation-div" style={x}>
        <nav className="navbar">
          <div className="container">
            Nav - Navigation
            <nav>
              <NavLink to="">Home</NavLink>
              <NavLink to="">Sell</NavLink>
              <NavLink to="">Favorites</NavLink>
              <NavLink to="">Feedback</NavLink>
              <NavLink to="">Account</NavLink>
            </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;