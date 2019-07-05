import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import UsersList from './components/UsersList';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink> <br/>
          <NavLink to="/users">Users</NavLink> <br/>
          <NavLink to="/home">HomePage</NavLink> <br/>
        </nav>
      </header>
      <main>
        {/* <Login /> */} 
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersList} />
      </main>
    </div>
  );
}

export default App;
