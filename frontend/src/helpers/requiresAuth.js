import React from 'react';

export default function (Component) {
  return class Authenticated extends React.Component {
    
    render() {
      const token = localStorage.getItem('jwt');
      // const notLoggedIn = <div>Please login to check your account</div>;

      const notLoggedIn = 'Component where Purchase or Message buttons pop out a Login Modal Because there is no JWT';

      

      
      return <> {token ? <Component {...this.props} /> : notLoggedIn} </>
    }
  }
}
