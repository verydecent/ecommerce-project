import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Transactions.css';

import Bought from './Bought';
import Sold from './Sold';

function Transactions(props) {
  const { user_id } = props;

  return (
    <div className="transactions-container">
      <h1>Transactions Page</h1>

      <div className="transactions-panel">

        <div className="tabs">
          <Link to="/account/transactions/bought" style={{ textDecoration: 'none' }}>
            <div className="bought-div">
              Bought
            </div>
          </Link>
          <Link to="/account/transactions/sold" style={{ textDecoration: 'none' }}>
            <div className="sold-div">
              Sold
            </div>
          </Link>
        </div>

        <div className="transactions-list">

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