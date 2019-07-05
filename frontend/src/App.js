import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main>
        {/* <Login /> */}
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersList} />
      </main>
    </div>
  );
}

export default App;
