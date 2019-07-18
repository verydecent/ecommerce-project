import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import ItemFeed from './components/ItemFeed/ItemFeed';

import { authorizeUser, likedItems } from './Helpers/devEndpoints';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {}
    };
  }

  authorizeUser = () => {
    const token = localStorage.getItem('jwt');
    const config = {
      headers: { authorization: 'Bearer ' + token }
    };

    axios.get(authorizeUser(), config)
      .then(response => {
        console.log("response", response);
        const { authUser } = response.data;
        console.log("authorizedUser ===", authUser);
        this.setState({ authUser });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleLogout = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      localStorage.removeItem('jwt');
      this.props.history.push('/');
      this.setState({ authUser: {} });
      alert('You logged out');
    }
    else {
      alert('You are not logged in');
    }
  }

  handleLike = (item_id) => {
    const { id } = this.state.authUser;
    if (id) {
      axios.post(likedItems(), {
        id, item_id
      })
        .then(response => {
          alert(response.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    }
    else {
      alert("You must log in to like an item");
    }

  }

  render() {
    const { authUser } = this.state;
    console.log("authUser status?", authUser);
    return (
      <div className="app-container">
        <header>
          <div className="global-header-wrapper">
            <div className="global-header">
              <h1>Logo</h1>
              <nav>
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                </ul>
              </nav>
              <div className="dropdown">
                <h2>Users</h2>
                <div className="dropdown-content">
                  <NavLink className="nav-link" to="/">/</NavLink> 
                  <NavLink className="nav-link" to="/home">Home</NavLink> 
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink> 
                  <NavLink className="nav-link" to="/account/settings">Account</NavLink>
                  <div onClick={this.handleLogout} className="logout-button">Log out</div>
                </div>
              </div>
            </div>
            <div className="header-spacer"></div>
            <div className="global-nav">
              <span>Designers</span>
              <span>Browser By Category</span>
              <span>Sneakers</span>
              <span>Footwear</span>
              <span>Tops</span>
              <span>Outerwear</span>
              <span>Staff Picks</span>
              <span>Collections</span>
            </div>
          </div>
        </header>
  
        <main>
          <Route
            exact
            path ="/"
            render={(props) =>
              <ItemFeed {...props} handleLike={this.handleLike} />
            }
          />
          <Route
            path="/register"
            render={(props) =>
              <Register {...props} authorizeUser={this.authorizeUser} />
            }
          />
          <Route
            path="/login"
            render={(props) =>
              <Login {...props} authorizeUser={this.authorizeUser} />
            }
          />
          <Route
            path="/account"
            render={(props) =>
              <Account {...props} authUser={authUser} />
            }
          />
          {/* <Route path="/home" render={Home} /> */}
          {/* <Route path="/account" component={Account} /> */}
          {/* <Route path="/items/:id" render={Item} /> */}
        </main>
      </div>
    );
  }
}

export default withRouter(App);
