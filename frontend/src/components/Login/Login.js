import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: this.state.email,
      password: this.state.password,
    }

    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
      .post(endpoint, body)
      .then(response => {
        localStorage.setItem('jwt', response.data['token']);
        this.props.verifyUser();
        this.props.history.push('/');
      })
      .catch(error => {
        console.error('ERROR', error);
      });
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className="login-container">
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