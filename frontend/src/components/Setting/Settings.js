import React from 'react';
import axios from 'axios';

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

      updateResponse: '',
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
  }

  handleSubmit =(event) => {
    console.log('handleSubmit()');
    event.preventDefault();
  }

  updateInfo = (event) => {
    const { newUsername, newEmail, newLocation } = this.state;
    const { username, email, location } = this.props.user_info;
    
    let updatedInfo = {
      user_id: this.props.user_id,
    };

    if (newUsername && newUsername !== username) {
      updatedInfo.username = newUsername;
    }

    if (newEmail && newEmail !== email) {
      updatedInfo.email = newEmail;
    }

    if (newLocation && newLocation !== location) {
      updatedInfo.location = newLocation;
    }


    console.log('updatedInfo', updatedInfo);
    const endpoint = '';

    // axios.put(endpoint, updatedInfo)
    //   .then(res => {
    //     this.setState({ updatedResponse: 'Info successfully updated'});
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });


    event.preventDefault();
  }

  updatePassword = (event) => {

    const { currentPassword, newPassword, confirmNewPassword } = this.state;
    
    const passwordInfo = {
      user_id: this.props.user_id,
      currentPassword,
      newPassword,
      confirmNewPassword
    };

    const endpoint = '';
    // axios.put(endpoint, passwordInfo)
    //   .then(res => {
    //     this.setState({ updatedResponse: 'Password successfully updated'});
    //   })
    //   .catch(error => {
    //     this.setState({ error });
    //   });
    
    console.log(passwordInfo);
    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { newUsername, newEmail, newLocation, currentPassword, newPassword, confirmNewPassword, error } = this.state;

    const { user_info } = this.props;
    const passwordIsInvalid =
      newPassword !== confirmNewPassword ||
      currentPassword === '';
    const infoIsInvalid =
      user_info.username === newUsername ||
      user_info.email === newEmail ||
      user_info.location === newLocation ||
      newUsername === '' ||
      newEmail === '' ||
      newLocation === '';



    if (error) {
      return <div>{error.message}</div>
    }

    if (user_info) return (
      
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
              placeholder={user_info.username}
              />
            </div>
            <div className="inner">
              <label>email</label> <br />
              <input
              id="newEmail"
              value={newEmail}
              onChange={this.handleChange}
              type="text"
              placeholder={user_info.email}
              />
            </div>
            <div className="inner">
              <label>location</label> <br />
              <input
              id="newLocation"
              value={newLocation}
              onChange={this.handleChange}
              type="text"
              placeholder={user_info.location}
              />
            </div>

            {
              user_info.username === newUsername ||
              user_info.email === newEmail ||
              user_info.location === newLocation
                ? <div style={{color: 'red', fontSize: '11px' }}>You are trying to update with the same user information</div>
                : null
            }

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

            {
              newPassword === confirmNewPassword
                ? null
                : <div style={{color: 'red', fontSize: '11px' }}>Confirm password must match new password</div>
            }
            <button disabled={passwordIsInvalid} value="submit">Update Password</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;