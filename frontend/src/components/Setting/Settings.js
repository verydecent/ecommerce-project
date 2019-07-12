import React from 'react';

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

      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  handleSubmit =(event) => {
    console.log('handleSubmit()');
    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { newUsername, newEmail, newLocation } = this.state;
    const { user_info } = this.props;

    if (user_info) return (
      
      <div className="settings-container">
        <h1>Edit Your Info</h1>
        <div className="user-info-panel">
          <form className="left" onSubmit={this.handleSubmit}>
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
            <button value="submit">Update</button>
          </form>
          <form className="right" onSubmit={this.handleSubmit}>
            <div className="inner">
              <label>Change password</label> <br />
              <input
              id="currentPassword"
              value={this.state.currentPassword}
              onChange={this.handleChange}
              placeholder="Current password"
              type="password"
              />
            </div>
            <div className="inner">
              <label>New password</label> <br />
              <input
              id="newPassword"
              value={this.state.newPassword}
              onChange={this.handleChange}
              placeholder="New password"
              type="password"
              />
            </div>
            <div className="inner">
              <label>Confirm new password</label> <br />
              <input
              id="confirmNewPassword"
              value={this.state.confirmNewPassword}
              onChange={this.handleChange}
              placeholder="Confirm new password"
              type="password"
              />
            </div>
            <button value="submit">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;