import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './Account.css';
import requiresAuth from '../Helpers/requiresAuth';

import Settings from '../Setting/Settings'
import Store from '../Store/Store';
import Message from '../Message/Message';
import Favorites from '../Favorites/Favorites';
import Feedback from '../Feedback/Feedback';
import Transactions from '../Transactions/Transactions';

import SubNav from '../SubNavigation/SubNavigation';

class Account extends  React.Component {
  constructor() {
    super();
    this.state = {
      user_info: {},
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const endpoint = 'http://localhost:5000/api/account/settings'
    const token = 'Bearer' + ' ' + localStorage.getItem('jwt');
    const config = {
      headers: { authorization: token }
    };

    axios.get(endpoint, config)
      .then(res => {
        const { user_info } = res.data;
        this.setState({ user_info, isLoading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { user_info, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className="account-container">
        <div className="account-header">
          <div className="user-image">
            <img
            src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
            alt="-user-profile-picture"
            />
          </div>
          <div className="details">
            <h1>{user_info.username}</h1>
            <div className="static-info">
              <span>33 Transactions</span>
              <span>12 Items for sale</span>
              <span>{user_info.location}</span>
            </div>
          </div>
        </div>

        <div className="account-header-spacer"></div>

        <div className="account-main">
          <SubNav />

          {/* Wrap inside of subnav */}

          <div className="account-main-content">

            <Route path="/account/settings" render={(props) => <Settings {...props}user_info={this.state.user_info} />} />

            <Route path="/account/messages" component={Message} />

            <Route path="/account/store" render={(props) => <Store {...props} id={user_info.id} />} />

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