import React from 'react';
import { Route } from 'react-router-dom';

import ItemFeed from '../ItemFeed/ItemFeed';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Account from '../Account/Account';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {}
    };
  }

  
  logout = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      localStorage.removeItem('jwt');
      this.setState({ authUser: {} });
      this.props.history.push('/home');
    }
    else {
      alert('You are not logged in');
    }
  }


  render() {
    const { authUser } = this.state;
    console.log("Home State", authUser);

    return (
      <div className="home-container">
        <Route path="/home" component={ItemFeed} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/account/settings" render={(props) => <Account {...props} authUser={authUser} />} />
      </div>
    );
  }
}

export default Home;