import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      location: '',
    }

    // this.onSubmit = this.onSubmit.bind(this);
  }

  handleSubmit = (event) => {
    // const endpoint = 'http://localhost:5000/api/auth/register';

    // const body = this.state;
    
    // axios.post(endpoint, body)
    //   .then(res => {
    //     console.log("response from register endpoint", res);
    //   })
    //   .catch(err => {
    //     console.error('ERROR', err);
    //   });

    event.preventDefault();
    console.log('onSubmit');
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    console.log(this.state);
  }

  render() {
    return (
      <div className="register-container">
        <form onSubmit={this.handleSubmit}>
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
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            type="password"
            onChange={this.onChange}
            placeholder="confirm password"
            />
          </div>
          <div>
            <label htmlFor="location" />
            <input 
            name="location"
            value={this.state.location}
            type="text"
            onChange={this.onChange}
            placeholder="location"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;