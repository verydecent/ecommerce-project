import React from 'react';
import axios from 'axios';

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

    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data['token']);
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  }

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="email" />
            <input 
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input 
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;