import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Navigation.css';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import Burger from './Burger';
import BurgerLoggedIn from './BurgerLoggedIn';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      visibile: false,
    };
  }

  toggleBurgerMenu = () => {
    console.log('clicked');
    this.setState((prevState) => ({visibile: !prevState.visibile }));
  }

  render() {
    const jwt = localStorage.getItem('jwt');
    const { user_id, toggleLoginModal, toggleRegisterModal, handleLogout } = this.props;
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
                <li><NavLink className="nav__link__home" to="/">Home</NavLink></li>
                <li><NavLink className="nav__link__sell" to="/account/post-item">Sell</NavLink></li>
              </ul>
            </nav>
            <div className="dropdown">
              <button className="global-nav-button">Account</button>
              <div className="dropdown-content">
                <NavLink className="nav__link" to="/account/post-item">
                  <div className="dropdown-item">Post Item</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/settings">
                  <div className="dropdown-item">Settings</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/messages/buying">
                  <div className="dropdown-item">Messages</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/store">
                  <div className="dropdown-item">My Store</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/favorites">
                  <div className="dropdown-item">Favorites</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/feedback">
                  <div className="dropdown-item">Feedback</div>
                </NavLink>
                <NavLink className="nav__link" to="/account/transactions/bought">
                  <div className="dropdown-item">Transactions</div>
                </NavLink>
                <div className="dropdown-item" id="logout-button" onClick={handleLogout}>Logout</div>
              </div>
            </div>
            <div className="burger" onClick={this.toggleBurgerMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <BurgerLoggedIn menuVisibility={this.state.visibile} toggleBurgerMenu={this.toggleBurgerMenu} handleLogout={handleLogout} />
          </div>
          <div className="spacer"></div>
          <CategoriesNav />
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
              <li><NavLink className="nav__link__home" to="/">Home</NavLink></li>
              <li onClick={toggleLoginModal}><NavLink className="nav__link__sell">Sell</NavLink></li>
            </ul>
          </nav>
          <div className="dropdown">
            <button className="global-nav-button">Account</button>
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={toggleLoginModal}>Login</div>
              <div className="dropdown-item" onClick={toggleRegisterModal}>Register</div>
            </div>
          </div>
          <div className="burger" onClick={this.toggleBurgerMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <Burger menuVisibility={this.state.visibile} toggleBurgerMenu={this.toggleBurgerMenu} toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />

        <div className="spacer"></div>
        <CategoriesNav />
      </div>
    );
  }
}

export default Navigation;