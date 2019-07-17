import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './Account.css';
import requiresAuth from '../../Helpers/requiresAuth';

import SubNav from '../SubNavigation/SubNavigation';
import Settings from '../Setting/Settings'
import Store from '../Store/Store';
import MessageInbox from '../MessageInbox/MessageInbox';
import Favorites from '../Favorites/Favorites';
import Feedback from '../Feedback/Feedback';
import Transactions from '../Transactions/Transactions';
import PostItem from '../PostItem/PostItem';

class Account extends  React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   const endpoint = 'http://localhost:5000/api/account/settings'
  //   // Be sure to include a space in addition to 'Bearer'
  //   const token = 'Bearer' + ' ' + localStorage.getItem('jwt');
  //   const config = {
  //     headers: { authorization: token }
  //   };

  //   axios.get(endpoint, config)
  //     .then(res => {
  //       const { user } = res.data;
  //       this.setState({ user });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  render() {
    const { user } = this.props;


    // Running into a memory leak while updating the state inside of store
    // My guess is that one of these guys below VVV rendered instead  account-container rendering meaning store didnt exist, but how is it possible that the other sub account settings didnt run into that error?
    // Found out that My store is the first class component running componentdidmount... So.... that must mean this happened...
    // account rendered, then rendered Store, then we refresh the page...
    // Then account gets rendered and runs into the isLoading page first, because thats how Account was set, to be loading first.... (Why did we have to do this conditional rendering again? because I was trying to call render in one of the child components while before Account could even render, they were trying to render before they were in the virtual dom)
    // ANYWAYS... So then we tried to componentDidMount inside of Store while the Account didnt exist. I think that is my best guess, as for these messy notes if anyone ever comes here please know that this is my first project and I am just thinking to myself lols


    // if (error) {
    //   return <p>{error.message}</p>
    // }

    // if (isLoading) {
    //   return <p>Loading...</p>
    // }

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
            <h1>{user.username}</h1>
            <div className="static-info">
              <span>33 Transactions</span>
              <span>12 Items for sale</span>
              <span>{user.location}</span>
            </div>
          </div>
        </div>

        <div className="account-header-spacer"></div>

        <div className="account-main">
          <SubNav user_id={user.id}/>

          {/* Wrap inside of subnav */}

          <div className="account-main-content">

            <Route path="/account/settings" render={(props) => <Settings {...props} user={user} />} />

            <Route path="/account/post-item/:id" component={PostItem} />

            <Route path="/account/store/:id" component={Store} />

            <Route path="/account/messages" component={MessageInbox} />

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