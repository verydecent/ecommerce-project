import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
      <main>
        {/* <Login /> */}
        <Route path="/login" component={Login} />
      </main>
    </div>
  );
}

export default App;
