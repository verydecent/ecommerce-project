import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Transactions.css';

import Bought from './Bought';
import Sold from './Sold';

function Transactions(props) {
  return (
    <div className="transactions-container">
      <h1>Transactions Page</h1>

      <div className="transactions-panel">

        <div className="buttons">
          <Link to="/account/transactions/bought">
            <button className="bought-button">Bought</button>
          </Link>
          <Link to="/account/transactions/sold">
            <button className="sold-button">Sold</button>
          </Link>
        </div>

        <div className="transactions">
          <Route path="/account/transactions/bought" component={Bought} />
          <Route path="/account/transactions/sold" component={Sold} />
        </div>
      </div>
    </div>
  );
}

export default Transactions;