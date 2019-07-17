import React from 'react';
import axios from 'axios';
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

  componentDidMount() {
    let token = localStorage.getItem('jwt');
    console.log('TOKEN from Home Component', token);
    if (token) {
      const endpoint = 'http://localhost:5000/api/authorize-user';
      token = 'Bearer' + ' ' + token;
      const config = {
        headers: { Authorization: token }
      }
      axios.get(endpoint, config)
        .then(response => {
          console.log('authUser response', response);
          const { authUser } = response.data;
          this.setState({ authUser });
        })
        .catch(error => {
          console.error('**GET**', error);
        });
    }
    else {
      console.log('No user is logged in');
    }
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