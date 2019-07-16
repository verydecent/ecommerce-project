import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

import Account from './components/Account/Account';

import Item from './components/Item/Item';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {}
    };
  }

  componentDidMount() {
    
  }

  logout = () => {
    const token = localStorage.getItem('jwt');

    if (token) {
      localStorage.removeItem('jwt');
      this.props.history.push('/home');
    }
    else {
      alert('You are not logged in');
    }
  }

  render() {

    return (
      <div className="app-container">
        
        <header>
          <div className="global-header-wrapper">
          

            <div className="global-header">
              {/* img */}
              <h1>Logo</h1>
              
              <nav>
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
                  <NavLink className="nav-link" to="/item">Item</NavLink>
                </ul>
              </nav>

              {/* <div className="cta">
                <button>Contact</button>
              </div> */}

              <div className="dropdown">
                <h2>Users</h2>
                <div className="dropdown-content">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink> 
                  <NavLink className="nav-link" to="/account/settings">Account</NavLink>
                  <div onClick={this.logout} className="logout-button">Log out</div>
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
           
            {/* <div className="header-spacer"></div> */}
          </div>
        </header>
  
        <main>
          <Route exact path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/account/" component={Account} />
          <Route path="/item/" component={Item} />
          {/* <ItemFeed /> */}
        </main>
      </div>
    );
  }
}

export default withRouter(App);
