import React from 'react';
import { NavLink } from 'react-router-dom';

import './SubNavigation.css';

function SubNavigation() {
  return (
    <div className="account-sub-nav">
      <div className="account-sub-nav-header">
        <h4>Account Menu</h4>
      </div>

      <div className="account-sub-nav-spacer"></div>

      <div className="account-sub-nav-content">
        <NavLink className="nav-link" to="/account/settings">Settings</NavLink>
        <NavLink className="nav-link" to="/account/messages">Messages</NavLink>
        <NavLink className="nav-link" to="/account/items">My Items</NavLink>
        <NavLink className="nav-link" to="/account/favorites">Favorites</NavLink>
        <NavLink className="nav-link" to="/account/feedback">Feedback</NavLink>
        <NavLink className="nav-link" to="/account/transactions">Transactions</NavLink>
      </div>
    </div>
  );
}

export default SubNavigation;