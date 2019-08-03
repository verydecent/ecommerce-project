import React from 'react';
import axios from 'axios';
import { updateUserInfo, updateUserPassword } from '../../Helpers/prodEndpoints';

import './Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      newUsername: '',
      newEmail: '',
      newLocation: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',

      userUpdateResponse: '',
      passwordUpdateResponse: '',
      isLoading: false,
      error: '',
    };
  }

  updateInfo = (event) => {
    const { newUsername, newEmail, newLocation } = this.state;
    const { id, username, email, location } = this.props.authUser;
    
    let updatedInfo = { id };
    
    if (newUsername && newUsername !== username) {
      updatedInfo.username = newUsername;
    }
    
    if (newEmail && newEmail !== email) {
      updatedInfo.email = newEmail;
    }
    
    if (newLocation && newLocation !== location) {
      updatedInfo.location = newLocation;
    }
    
    axios.put(updateUserInfo(), updatedInfo)
    .then(res => {
      this.setState({
        userUpdateResponse: res.data.message,
        newUsername: '',
        newEmail: '',
        newLocation: '',
      });
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  }

  updatePassword = (event) => {
    const { currentPassword, newPassword, confirmNewPassword } = this.state;
    const { id } = this.props.authUser;
    
    const passwordInfo = {
      id,
      currentPassword,
      newPassword,
      confirmNewPassword
    };

    axios.put(updateUserPassword(), passwordInfo)
    .then(res => {
      console.log(res.data.message);
      this.setState({
        passwordUpdateResponse: res.data.message,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { newUsername, newEmail, newLocation, currentPassword, newPassword, confirmNewPassword, error, userUpdateResponse, passwordUpdateResponse } = this.state;
    console.log(this.state)
    const { authUser } = this.props;
    const passwordIsInvalid = !((currentPassword !== '' && newPassword !== '' &&confirmNewPassword !== '') && (newPassword === confirmNewPassword));

    const infoIsInvalid = ((newUsername === '' && newEmail === '' && newLocation === '') ||
        (authUser.username === newUsername || authUser.email === newEmail || authUser.location === newLocation));

    console.log("authUser from Settings.js", authUser)

    if (authUser) return (
      
      <div className="settings-container">
        <h1>Edit Your Info</h1>
        <div className="user-info-panel">
          <form className="left" onSubmit={this.updateInfo}>
            <div className="inner">
              <label>username</label> <br />
              <input
              id="newUsername"
              value={newUsername}
              onChange={this.handleChange}
              type="text"
              placeholder={authUser.username}
              />
            </div>
            <div className="inner">
              <label>email</label> <br />
              <input
              id="newEmail"
              value={newEmail}
              onChange={this.handleChange}
              type="text"
              placeholder={authUser.email}
              />
            </div>
            <div className="inner">
              <label>location</label> <br />
              <input
              id="newLocation"
              value={newLocation}
              onChange={this.handleChange}
              type="text"
              placeholder={authUser.location}
              />
            </div>

            {authUser.username === newUsername || authUser.email === newEmail || authUser.location === newLocation
              ? <div style={{color: 'red', fontSize: '11px' }}>You are trying to update with the same user information</div>
              : null}
              
            {userUpdateResponse
              ? <div style={{color: 'green', fontSize: '11px' }}>{userUpdateResponse}</div>
              :null}

            <button disabled={infoIsInvalid} value="submit">Update User Info</button>
          </form>
          <form className="right" onSubmit={this.updatePassword}>
            <div className="inner">
              <label>Change password</label> <br />
              <input
              id="currentPassword"
              value={currentPassword}
              onChange={this.handleChange}
              placeholder="Current password"
              type="password"
              />
            </div>
            <div className="inner">
              <label>New password</label> <br />
              <input
              id="newPassword"
              value={newPassword}
              onChange={this.handleChange}
              placeholder="New password"
              type="password"
              />
            </div>
            <div className="inner">
              <label>Confirm new password</label> <br />
              <input
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={this.handleChange}
              placeholder="Confirm new password"
              type="password"
              />
            </div>

            {newPassword === confirmNewPassword
              ? null
              : <div style={{color: 'red', fontSize: '11px' }}>Confirm password must match new password</div>}

            {passwordUpdateResponse
              ? <div style={{color: 'green', fontSize: '11px' }}>{passwordUpdateResponse}</div>
              :null}

            <button disabled={passwordIsInvalid} value="submit">Update Password</button>
          </form>
        </div>
        {
          (error && error.message)
            ? <div className="signal"><span>{error.message}</span></div>
            : null
        }
      </div>
    );
  }
}

export default Settings;