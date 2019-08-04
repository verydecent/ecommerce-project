import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import { loginUser } from '../../Helpers/prodEndpoints';
import { loginUser } from '../../Helpers/devEndpoints';

import './LoginModal.css';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    const { verifyUser, toggleLoginModal } = this.props;
    const body = { email: this.state.email, password: this.state.password };
    axios
      .post(loginUser(), body)
      .then(response => {
        localStorage.setItem('jwt', response.data['token']);
        this.setState({ email: '', password: '' });
        verifyUser();
        toggleLoginModal();
        setTimeout(() => this.props.history.push('/'), 800);
      })
      .catch(error => {
        console.error('ERROR', error);
      });
    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value});
  }

  switchToRegisterModal = () => {
    const { toggleLoginModal, toggleRegisterModal } = this.props;

    toggleLoginModal();
    toggleRegisterModal();
  }

  render() {
    const { email, password } = this.state;
    const { toggleLoginModal } = this.props;
    return (
      <div className="login-modal-container">
        <div className="login-content">
          <div className="login-modal-header">
            <h1>Login</h1>
            <div className="exit-modal" onClick={toggleLoginModal}>x</div>
          </div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="login-field">
              <label className="--label">Email</label>
              <input
                className="--input"
                id="email"
                onChange={this.handleChange}
                value={email}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <div className="login-field">
              <label className="--label">Password</label>
              <input
                className="--input"
                id="password"
                onChange={this.handleChange}
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="forgot-password">Forgot Password?</p>
            <p className="not-registered" onClick={this.switchToRegisterModal}>Not Register?</p>
            <div className="login-button">
              <button value="submit">Login</button>
            </div>
          </form>
          <div className="login-content-spacer"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginModal);