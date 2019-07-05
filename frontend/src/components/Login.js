import React, { Component } from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    console.log("onSubmit()");
  }

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.onChange}
          />
          <label htmlFor="password">Password</label>
          <input 
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <div>
            <button>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;