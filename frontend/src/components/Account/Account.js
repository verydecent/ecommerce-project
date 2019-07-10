import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import requiresAuth from '../Helpers/requiresAuth';

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
        Account

        Account id: {this.state.user_id}
        Account username: {this.state.username}
        
      </div>
    );
  }
}

export default requiresAuth(Account);