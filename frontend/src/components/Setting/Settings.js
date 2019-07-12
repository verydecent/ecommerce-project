import React from 'react';

import './Settings.css';

class Settings extends React.Component {
  constructor() {
    super();
    this.state ={
      username: '',
      email: '',
      newPassword: '',
      confirmNewPassword: '',
    };
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
    return (
      <div className="settings-container">
        <h1>Edit Your Info</h1>

        <div className="user-info-panel">
          <form className="left" onSubmit={this.handleSubmit}>
            <div className="inner">
              <label>username</label> <br />
              <input
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              placeholder="this.props.username"
              />
            </div>

            <div className="inner">
              <label>email</label> <br />
              <input
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder="this.props.email"
              />
            </div>
            <button value="submit">Update</button>
          </form>
          <form className="right" onSubmit={this.handleSubmit}>
            <div className="inner">
              <label>change password</label> <br />
              <input
              id="newPassword"
              value={this.state.newPassword}
              onChange={this.handleChange}
              placeholder="this.props.previousPassword"
              type="password"
              />
            </div>
            <div className="inner">
              <label>confirm password</label> <br />
              <input
              id="confirmNewPassword"
              value={this.state.confirmNewPassword}
              onChange={this.handleChange}
              placeholder="this.props.confirmNewPassword"
              type="password"
              />
            </div>
            <button value="submit">Update</button>
          </form>
        </div>
        <div className="space">other info option update later</div>
        <div className="space">other info option update later</div>
      </div>
    );
  }
}

export default Settings;