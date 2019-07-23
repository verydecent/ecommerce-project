import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Account from './components/Account/Account';
import ItemFeed from './components/ItemFeed/ItemFeed';
import Item from './components/Item/Item';

import { authorizeUser, likedItems } from './Helpers/devEndpoints';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {},
      liked: [],
    };
  }

  componentDidMount() {
    console.log("CDM on App.js");
  }

  verifyUser = () => {
    const token = localStorage.getItem('jwt');
    const config = {
      headers: { authorization: 'Bearer ' + token }
    };

    axios.get(authorizeUser(), config)
      .then(user => {
        axios.get(likedItems(user.data.id))
          .then(liked => {
            liked = liked.data.map(item => item.id);
            this.setState({ authUser: user.data, liked: liked });
          })
          .catch(error => {
            console.error(error);
          })
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
      this.setState({ authUser: {}, liked: [] });
      alert('You logged out');
    }
    else {
      alert('You are not logged in');
    }
  }

  handleLike = (item_id) => {
    const { id } = this.state.authUser;
    let { liked } = this.state;
    if (!id) {
      return alert("You must log in to like an item");
    }

    if (id && liked.includes(item_id)) {
      const config = {
        headers: { user_id: id }
      };

      axios.delete(likedItems(item_id), config)
        .then(response => {
          this.setState(state => {
            const liked = state.liked.filter(i => i !== item_id);
            return { liked };
          })
          alert("unliked item");
        })
        .catch(error => console.error(error));
      console.log('liked', liked);
    }
    if (id && !liked.includes(item_id)) {
      console.log('Liking item', item_id)
      axios.post(likedItems(), { id, item_id })
        .then(response => {
          this.setState(state => {
            const liked = state.liked.concat(item_id);
            console.log(liked);
            return { liked }
          });
          alert("liked item");
        })
        .catch(error => console.error(error));
      console.log('liked', liked);
    }
  }

  render() {
    const { authUser, liked } = this.state;
    console.log("Logged in user", authUser.id);
    console.log("liked items", liked);
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
            path="/"
            render={(props) =>
              <ItemFeed {...props} handleLike={this.handleLike} liked={liked} />
            }
          />
          <Route
            path="/item/:id"
            render={(props) =>
              <Item {...props} user_id={authUser.id} liked={liked} handleLike={this.handleLike} />
            }
          />
          <Route
            path="/register"
            render={(props) =>
              <Register {...props} verifyUser={this.verifyUser} />
            }
          />
          <Route
            path="/login"
            render={(props) =>
              <Login {...props} verifyUser={this.verifyUser} />
            }
          />
          <Route
            path="/account"
            render={(props) =>
              <Account {...props}
                authUser={authUser} liked={liked} handleLike={this.handleLike} />
            }
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);