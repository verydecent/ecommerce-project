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

        <div className="account-header">
          <div className="user-image">
            <img
            src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
            alt=""
            style={{
              width: "110px",
              borderRadius: "50%"
            }}
            />
          </div>
          <div className="details">
            <h1>verydecent</h1>
            <div className="static-info">
              <span>33 Transactions</span>
              <span>12 Items for sale</span>
              <span>United States</span>
            </div>
          </div>
        </div>

        <div className="account-header-spacer"></div>

        <div className="account-main">
          <SubNav />

          {/* Wrap inside of subnav */}
          <div className="account-main-content">
            <Route path="/account/settings" component={Setting} />
            <Route path="/account/messages" component={Message} />
            <Route path="/account/items" component={Items} />
            <Route path="/account/favorites" component={Favorites} />
            <Route path="/account/feedback" component={Feedback} />
            <Route path="/account/transactions" component={Transactions} />
          </div>
        </div>
      </div>
    );
  }
}

export default requiresAuth(Account);