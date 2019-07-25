import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Navigation.css';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    const jwt = localStorage.getItem('jwt');
    const { user_id, toggleLoginModal, toggleRegisterModal } = this.props;
    if (user_id && jwt) {
      return (
        <div className="global-nav-container">
          <div className="global-nav">
            <div className="logo-container">
              <NavLink to="/">
                <img className="logo" src={logo} alt="" />
              </NavLink>
            </div>
            <nav>
              <ul className="nav__links">
                <li><NavLink className="nav__link" to="/">Home</NavLink></li>
                <li onClick={this.toggleLoginModal}>Login</li>
                <li onClick={this.toggleRegisterModal}>Register</li>
                <li><NavLink className="nav__link" to="/account/settings">Account</NavLink></li>
                <li onClick={this.handleLogout}>Log Out</li>
              </ul>
            </nav>

            <div className="dropdown">
              <button className="global-nav-button">Account</button>
              <div className="dropdown-content">
                <div className="dropdown-item">Post Item</div>
                <div className="dropdown-item">Settings</div>
                <div className="dropdown-item">Messages</div>
                <div className="dropdown-item">My Store</div>
                <div className="dropdown-item">Favorites</div>
                <div className="dropdown-item">Transactions</div>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      );
    }
    
    return (
      <div className="global-nav-container">
        <div className="global-nav">
          <div className="logo-container">
            <NavLink to="/">
              <img className="logo" src={logo} alt="" />
            </NavLink>
          </div>
          <nav>
            <ul className="nav__links">
              <li><NavLink className="nav__link" to="/">Home</NavLink></li>
              <li onClick={this.toggleLoginModal}>Login</li>
              <li onClick={this.toggleRegisterModal}>Register</li>
              <li><NavLink className="nav__link" to="/account/settings">Account</NavLink></li>
              <li onClick={this.handleLogout}>Log Out</li>
            </ul>
          </nav>

          <div className="dropdown">
            <button className="global-nav-button">Account</button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={toggleLoginModal}>Login</div>
              <div className="dropdown-item" onClick={toggleRegisterModal}>Register</div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Navigation;