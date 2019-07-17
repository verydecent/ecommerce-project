import React from 'react';
import axios from 'axios';

export default function (Component) {
  return class Authenticated extends React.Component {
    
    render() {
      const token = localStorage.getItem('jwt');
      const notLoggedIn = <div>Please login to check your account</div>;
      
      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>
    }
  }
}