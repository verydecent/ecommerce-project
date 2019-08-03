import React from 'react';
import axios from 'axios';
import { registerUser } from '../../Helpers/prodEndpoints';
import { withRouter } from 'react-router-dom';
import './RegisterModal.css';

class RegisterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      location: '',
    }
  }

  handleSubmit = (event) => {
    const { verifyUser, toggleRegisterModal, history } = this.props;
    const body = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      location: this.state.location,
    };
    axios.post(registerUser(), body)
      .then(response => {
        localStorage.setItem('jwt', response.data.token);
        this.setState({ username: '', email: '', password: '', passwordConfirm: '', location: '' });
        verifyUser();
        toggleRegisterModal();
        history.push('/');
      })
      .catch(error => {
        console.error('ERROR', error);
      });
    event.preventDefault();
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { toggleRegisterModal } = this.props;
    return (
      <div className="register-modal-container">
        <div className="register-content">
          <div className="register-modal-header">
            <h1>Register</h1>
            <div className="exit-modal" onClick={toggleRegisterModal}>x</div>
          </div>
          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="register-field">
              <label className="--label">Username</label>
              <input
                className="--input"
                name="username"
                value={this.state.username}
                type="text"
                onChange={this.onChange}
                placeholder="Username"
                />
            </div>
            <div className="register-field">
              <label className="--label">Email</label>
              <input
                className="--input"
                name="email"
                value={this.state.email}
                type="text"
                onChange={this.onChange}
                placeholder="Email Address"
                />
            </div>
            <div className="register-field">
              <label className="--label">Password</label>
              <input
                className="--input"
                name="password"
                value={this.state.password}
                type="password"
                onChange={this.onChange}
                placeholder="Password"
                />
            </div>
            <div className="register-field">
              <label className="--label">Confirm Password</label>
              <input
                className="--input"
                name="passwordConfirm"
                value={this.state.passwordConfirm}
                type="password"
                onChange={this.onChange}
                placeholder="Confirm Password"
                />
            </div>
            <div className="register-field">
              <label className="--label">Location</label>
              <input
                className="--input"
                name="location"
                value={this.state.location}
                type="text"
                onChange={this.onChange}
                placeholder="Location"
                />
            </div>
            <div className="register-button">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="register-content-spacer"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterModal);