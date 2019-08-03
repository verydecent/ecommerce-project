import React from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.css';

function Burger (props) {
  let visibility = "hide";

  if (props.menuVisibility) {
    visibility = "show";
  }

  return (
    <div id="flyoutMenu" className={visibility} onClick={props.toggleBurgerMenu}>
      <h2>
        <NavLink to="/" className="burger__nav__link" >Home</NavLink>
      </h2>
      <h2>
        <div className="burger__toggle" onClick={props.toggleLoginModal}>Login</div>      
      </h2>
      <h2>
        <div className="burger__toggle" onClick={props.toggleRegisterModal}>Register</div>
      </h2>
    </div>
  );
}

export default Burger;