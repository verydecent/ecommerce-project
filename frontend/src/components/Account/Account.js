import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Account.css';
import requiresAuth from '../Helpers/requiresAuth';

import Setting from '../Setting/Setting'
import Items from '../Item/Item';
import Message from '../Message/Message';
import Favorites from '../Favorites/Favorites';
import Feedback from '../Feedback/Feedback';
import Transactions from '../Transactions/Transactions';

import SubNav from '../SubNavigation/SubNavigation';

class Account extends  React.Component {
  constructor() {
    super();
    this.state = {
      user_id: null,
      user_username: null,
    };
  }

  render() {

    return (
      <div className="account-container">
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

        {/* Wrap inside of subnav */}
        <div className="account-main-content">
          <Route path="/account/settings" component={Setting} />
          <Route path="/account/messages" component={Message} />
          <Route path="/account/items" component={Items} />
          <Route path="/account/favorites" component={Favorites} />
          <Route path="/account/feedback" component={Feedback} />
          <Route path="/account/transactions" component={Transactions} />
        </div>

        {/* <SubNav /> */}
      </div>
    );
  }
}

export default requiresAuth(Account);