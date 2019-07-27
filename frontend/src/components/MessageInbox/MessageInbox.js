import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import BuyingMessages from './BuyingMessages';
import SellingMessages from './SellingMessages';

import './MessageInbox.css';

class MessageInbox extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="message-inbox-container">
        <div className="message-inbox-panel">
  
          <div className="message-inbox-tabs">
            <Link to="/account/messages/buying" style={{ textDecoration: 'none' }}>
              <div className="buying-div">
                Buying
              </div>
            </Link>
            <Link to="/account/messages/selling" style={{ textDecoration: 'none' }}>
              <div className="selling-div">
                Selling
              </div>
            </Link>
          </div>
  
          <div className="messages-list">
  
            <Route
              path="/account/messages/buying"
              render={(props) =>
                <BuyingMessages {...props}
                />
              }
            />
   
             <Route
               path="/account/messages/selling"
               render={(props) =>
                 <SellingMessages {...props}
                 />
               }
            />
  
          </div>
        </div>
      </div>
    );
  }
}

export default MessageInbox;