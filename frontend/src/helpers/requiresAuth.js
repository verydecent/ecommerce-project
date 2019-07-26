import React from 'react';
import './requiresAuth.css';

export default function (Component) {
  return class Authenticated extends React.Component {
    render() {
      const { id } = this.props.authUser;
      const token = localStorage.getItem('jwt');
      const notLoggedIn = <div className="not-logged-in">Unauthorized, please loginto continue</div>;

      return <> {token && id ? <Component {...this.props} /> : notLoggedIn} </>
    }
  }
}
