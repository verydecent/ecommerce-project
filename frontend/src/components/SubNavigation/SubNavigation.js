import React from 'react';
import { NavLink } from 'react-router-dom';

import './SubNavigation.css';

function SubNavigation(props) {
  const { user_id } = props;
  console.log('user_id from subnav', user_id);
  return (
    <div className="account-sub-nav">
      <div className="account-sub-nav-header">
        <h4>Account Menu</h4>
      </div>

      <div className="account-sub-nav-spacer"></div>

      <div className="account-sub-nav-content">
        <NavLink className="nav-link" to={`/account/post-item/${user_id}`}>Post Item</NavLink>
        <NavLink className="nav-link" to="/account/settings">Settings</NavLink>
        <NavLink className="nav-link" to="/account/messages">Messages</NavLink>
        <NavLink className="nav-link" to="/account/store">My Store</NavLink>
        {/* <NavLink className="nav-link" to={`/account/store/${user_id}`}>My Store</NavLink> */}
        <NavLink className="nav-link" to={`/account/favorites/${user_id}`}>Favorites</NavLink>
        <NavLink className="nav-link" to="/account/feedback">Feedback</NavLink>
        <NavLink className="nav-link" to="/account/transactions">Transactions</NavLink>
      </div>
    </div>
  );
}

export default SubNavigation;