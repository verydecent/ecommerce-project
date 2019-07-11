import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

import Account from './components/Account/Account';
import UsersList from './components/Users/UsersList';
import ItemFeed from './components/ItemFeed/ItemFeed';
import SubNavigation from './components/SubNavigation/SubNavigation';


function App() {
  return (
    <div className="app-container">
      
      {/* End */}
      
      
      
      
      <header>
        <div className="global-header-wrapper">
          
          <div className="global-header">
            Website Logo
            <div className="global-nav">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </div>  
            <div className="user-options">
              <div className="dropdown">
                <h2>Users</h2>
                <div className="dropdown-content">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink> 
                  <NavLink className="nav-link" to="/account">Account</NavLink> 
                </div>
              </div>
            </div>
          </div>
          <div className="header-spacer"></div>
        </div>
      </header>

      <main>
        <Route exact path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        {/* <ItemFeed /> */}
      </main>
    </div>
  );
}

export default App;
