import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Transactions.css';

import Bought from './Bought';
import Sold from './Sold';
import axios from 'axios';

componentDidMount() {
  Axios.
}

function Transactions(props) {
  const { user_id } = this.props;

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

          <Route
            path="/account/transactions/bought"
            render={(props) =>
              <Bought {...props} user_id={user_id}
              />
            }
          />

          <Route
            path="/account/transactions/sold"
            render={(props) =>
              <Sold {...props} user_id={user_id}
              />
            }
          />

        </div>
      </div>
    </div>
  );
}

export default Transactions;