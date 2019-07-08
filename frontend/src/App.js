import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import UsersList from './components/UsersList';
import HomePage from './components/HomePage';
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
                <NavLink className="nav-link" to="/" >Home</NavLink>
              </div>
            <div className="user-options">
              <div className="dropdown">
                <h2>Users</h2>
                <div className="dropdown-content">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink> 
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <SubNavigation /> */}
        {/* <nav>
          <br/>
          <NavLink to="/users">Users</NavLink> <br/>
          <NavLink to="/home">HomePage</NavLink> <br/>
        </nav> */}
      </header>
      <main>
        Main
        <Route path="/login" component={Login} />
        {/* <ItemFeed /> */}
        {/* <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersList} /> */}
      </main>
    </div>
  );
}

export default App;
