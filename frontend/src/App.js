import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import { authorizeUser, likedItems } from './Helpers/devEndpoints';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import LoginModal from './components/Login/LoginModal';
import RegisterModal from './components/Register/RegisterModal';
import LandingCards from './components/LandingCards/LandingCards';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Item from './components/Item/Item';
import ItemFeed from './components/ItemFeed/ItemFeed';
import UserStore from './components/User/UserStore';
import UserFeedback from './components/User/UserFeedback';
import Account from './components/Account/Account';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: {},
      liked: [],
      showLoginModal: false,
      showRegisterModal: false,
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
    localStorage.removeItem('jwt');
    this.props.history.push('/');
    this.setState({ authUser: {}, liked: [] });
    alert('You logged out');
  }

  handleLike = (item_id) => {
    const { id } = this.state.authUser;
    const jwt = localStorage.getItem('jwt');
    let { liked } = this.state;
    if (!id || !jwt) {
      this.toggleLoginModal();
    }

    if (id && jwt && liked.includes(item_id)) {
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
    if (id && jwt && !liked.includes(item_id)) {
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

toggleLoginModal = () => {
  this.setState((prevState) => ({ showLoginModal: !prevState.showLoginModal }));
}

toggleRegisterModal = () => {
  this.setState((prevState) => ({ showRegisterModal: !prevState.showRegisterModal }));
}

  render() {
    const { authUser, liked, showLoginModal, showRegisterModal } = this.state;
    
    console.log("Logged in user", authUser.id);
    console.log("liked items", liked);

    return (
      <div className="app-container">
        <header>
          <Navigation user_id={authUser.id} toggleLoginModal={this.toggleLoginModal} toggleRegisterModal={this.toggleRegisterModal} handleLogout={this.handleLogout}/>
        </header>
  
        <main>
          {
            showLoginModal
              ? <LoginModal toggleLoginModal={this.toggleLoginModal} toggleRegisterModal={this.toggleRegisterModal} verifyUser={this.verifyUser} />
              : null
          }
          {
            showRegisterModal
              ? <RegisterModal toggleRegisterModal={this.toggleRegisterModal} verifyUser={this.verifyUser} />
              : null
          }
          {/* <Route
            exact
            path="/"
            component={CategoriesNav}
          /> */}
          <Route
            exact
            path="/"
            component={LandingCards}
          />
          <Route
            exact
            path="/"
            component={Jumbotron}
          />
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
              <Item {...props} user_id={authUser.id} liked={liked} handleLike={this.handleLike} toggleLoginModal={this.toggleLoginModal} />
            }
          />
          <Route
            path="/users/:username"
            render={(props) =>
                <UserStore {...props} />

            } 
          />
          <Route
            exact
            path="/item-feed/:id"
            render={(props) =>
              <ItemFeed {...props} handleLike={this.handleLike} liked={liked} />
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
                <li>US: +1 777 777 7777 </li>
                <li>Give Feedback</li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Style & Fit Advice</li>
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
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);







