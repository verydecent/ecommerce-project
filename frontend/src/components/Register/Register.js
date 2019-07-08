import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit');
  }

  onChange = (event) => {
    console.log('onChange');
  }

  render() {
    return (
      <div className="register-container">
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username" />
            <input 
            name="username"
            value={this.state.username}
            type="text"
            onChange={this.onChange}
            placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="email" />
            <input 
            name="email"
            value={this.state.email}
            type="text"
            onChange={this.onChange}
            placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input 
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.onChange}
            placeholder="password"
            />
          </div>
          <div>
            <label htmlFor="password confirm" />
            <input 
            name="password"
            value={this.state.password}
            type="password"
            onChange={this.onChange}
            placeholder="confirm password"
            />
          </div>
        </form>
        <button type="submit">Register</button>
      </div>
    );
  }
}

export default Register;