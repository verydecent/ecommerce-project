import React from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.css';

function BurgerLoggedIn (props) {
  let visibility = "hide";

  if (props.menuVisibility) {
    visibility = "show";
  }

  return (
    <div id="flyoutMenu" className={visibility} onClick={props.toggleBurgerMenu}>
      <h2>
        <NavLink to="/" className="burger__nav__link">Home</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/post-item" className="burger__nav__link">Post Item</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/settings" className="burger__nav__link">Settings</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/messages/buying" className="burger__nav__link">Messages</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/store" className="burger__nav__link">My Store</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/favorites" className="burger__nav__link">Favorites</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/feedback" className="burger__nav__link">Feedback</NavLink>
      </h2>
      <h2>
        <NavLink to="/account/transactions/bought" className="burger__nav__link">Transactions</NavLink>
      </h2>
      <h2>
        <div className="burger__toggle" onClick={props.handleLogout}>Log Out</div>
      </h2>
    </div>
  );
}

export default BurgerLoggedIn;