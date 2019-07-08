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
    <div className="wrap-container">

      {/* End */}
      
      
      
      
      <header>
        <SubNavigation />
        {/* <nav>
          <NavLink to="/login">Login</NavLink> <br/>
          <NavLink to="/users">Users</NavLink> <br/>
          <NavLink to="/home">HomePage</NavLink> <br/>
        </nav> */}
      </header>
      <main>
        Main
        {/* <Login /> */} 
        {/* <ItemFeed /> */}
        {/* <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersList} /> */}
      </main>
    </div>
  );
}

export default App;
