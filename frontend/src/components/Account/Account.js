import React from 'react';
import { Route } from 'react-router-dom';

import './Account.css';
import requiresAuth from '../../Helpers/requiresAuth';
import { uploadUserPicture, getUserPicture } from '../../Helpers/devEndpoints';

import SubNav from '../SubNavigation/SubNavigation';
import EditItem from '../EditItem/EditItem';
import Settings from '../Setting/Settings'
import Store from '../Store/Store';
import MessageInbox from '../MessageInbox/MessageInbox';
import Favorites from '../Favorites/Favorites';
import Feedback from '../Feedback/Feedback';
import Transactions from '../Transactions/Transactions';
import PostItem from '../PostItem/PostItem';
import axios from 'axios';

class Account extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      profile: '',
    };
  }

  componentDidMount() {
    axios.get(getUserPicture(this.props.authUser.id))
      .then(response => {
        this.setState({ profile: response.data.url })
      })
      .catch(error => console.error(error));
  }

  handleChange = (event) => {
    this.setState({ selectedImage: event.target.files[0]});
  }

  handleSubmit = (event) => {
    if (!this.state.selectedImage) {
      return alert("Please Choose a Photo to Upload by clicking on the Profile Image");
    }
    const { id } = this.props.authUser;
    const { selectedImage } = this.state;
    const data = new FormData();
    data.append('user-image', selectedImage);

    axios.put(uploadUserPicture(id), data)
      .then(response => {
        console.log('pop off?')
        this.setState({ profile: response.data })
      })
      .catch(error => console.error(error));
  }

  render() {
    const { authUser, liked, handleLike } = this.props;
    const { profile } = this.state;

    console.log('state profile ', profile)

    // Running into a memory leak while updating the state inside of store
    // My guess is that one of these guys below VVV rendered instead  account-container rendering meaning store didnt exist, but how is it possible that the other sub account settings didnt run into that error?
    // Found out that My store is the first class component running componentdidmount... So.... that must mean this happened...
    // account rendered, then rendered Store, then we refresh the page...
    // Then account gets rendered and runs into the isLoading page first, because thats how Account was set, to be loading first.... (Why did we have to do this conditional rendering again? because I was trying to call render in one of the child components while before Account could even render, they were trying to render before they were in the virtual dom)
    // ANYWAYS... So then we tried to componentDidMount inside of Store while the Account didnt exist. I think that is my best guess, as for these messy notes if anyone ever comes here please know that this is my first project and I am just thinking to myself lols

      return (
        <div className="account-container">
          <div className="account-header">
            <div className="details">
              <h1>{authUser.username}</h1>
              <span>{authUser.location}</span>
            </div>
            <div className="user-image">
              <label htmlFor="file-input">
                <img
                src={profile}
                alt=""
                />
              </label>
              <input id="file-input" encType="multipart/form-data" type="file" name="user-image" onChange={this.handleChange} />
              <button className="user-image-button" onClick={this.handleSubmit}>Upload</button>
            </div>
          </div>
  
          <div className="account-header-spacer"></div>
  
          <div className="account-main">
            {/* <SubNav /> */}
  
            <div className="account-main-content">

              <Route
                path="/account/edit-item/:id"
                render={(props) =>
                  <EditItem {...props} authUser={authUser} />
                }
              />
  
              <Route
                path="/account/settings"
                render={(props) =>
                  <Settings {...props} authUser={authUser} />
                }
              />
  
              <Route
                path="/account/post-item/"
                render={(props) =>
                  <PostItem {...props} user_id={authUser.id} />
                }
              />
  
              <Route
                path="/account/store"
                exact
                render={(props) =>
                  <Store {...props} user_id={authUser.id} liked={liked} handleLike={handleLike} />
                }
              />
  
              <Route
                path="/account/messages"
                render={(props) =>
                  <MessageInbox {...props} user_id={authUser.id} />
                }
              />
  
              <Route
                path="/account/favorites"
                render={(props) =>
                  <Favorites {...props} user_id={authUser.id} liked={liked} handleLike={handleLike} />
                }
              />
  
              <Route
                path="/account/feedback"
                render={(props) =>
                  <Feedback user_id={authUser.id} />
                } 
              />
              
              <Route
                path="/account/transactions"
                render={(props) =>
                  <Transactions {...props} user_id={authUser.id} />
                }
              />
              
            </div>
            <SubNav />
          </div>
        </div>
      );
  }
}

export default requiresAuth(Account);