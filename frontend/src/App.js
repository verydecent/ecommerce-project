import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import { authorizeUser, likedItems } from './Helpers/devEndpoints';
import logo from './Images/logo.png';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Account from './components/Account/Account';
import CategoriesNav from './components/CategoriesNav/CategoriesNav';
import LandingCards from './components/LandingCards/LandingCards';
import ItemFeed from './components/ItemFeed/ItemFeed';
import Item from './components/Item/Item';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {},
      liked: [],
    };
  }

  componentDidMount() {
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
    }
    if (id && !liked.includes(item_id)) {
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
    }
  }

  render() {
    const { authUser, liked } = this.state;
    console.log("Logged in user", authUser.id);
    console.log("liked items", liked);
    return (
      <div className="app-container">
        <header>
          <div className="global-nav">
            <img src={logo} alt="" />
            <nav>
              <ul className="nav__links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/account/settings">Account</NavLink></li>
                <li onClick={this.handleLogout}>Log Out</li>
              </ul>
            </nav>
            <button className="cta">Contact</button>
          </div>

          {/* <div className="global-header-wrapper">
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
            */}
        </header>
  
        <main>
          <Route
            exact
            path="/"
            render={(props) => <CategoriesNav />
            }
          />
          <div className="main-sidebar">
            <div className="sidebar-header">
              {/* <h4>Navigate</h4> */}
            </div>
          </div>
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
        <footer>
          <div className="app-footer">
            <div className="footer-column">
              <ul>
                <li>Call Us</li>
                <li>US: +1 877 535 3677 </li>
                <li>Give Feedback</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>Contact Us</li>
                <li>Style & Fit Advice</li>
                <li>FAQs</li>
                <li>Delivery</li>
                <li>Exchanges & Returns</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Advertising</li>
                <li>Size Help</li>
                <li>Apps</li>
              </ul>
            </div>
            <div className="footer-column">
              input
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);







