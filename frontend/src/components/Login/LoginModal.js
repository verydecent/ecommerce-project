import React from 'react';

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div className="login-modal-container">
        Modal Login :D
      </div>
    );
  }
}

export default LoginModal;