import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import BuyingMessages from './BuyingMessages';
import SellingMessages from './SellingMessages';
import ChatMessages from './ChatMessages';

import './MessageInbox.css';

class MessageInbox extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { user_id } = this.props;
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
              path="/account/messages/chat/:chat_id"
              render={(props) =>
                <ChatMessages {...props} />
              }
            />

            <Route
              exact
              path="/account/messages/buying"
              render={(props) =>
                <BuyingMessages {...props} user_id={user_id}
                />
              }
            />
   
             <Route
               exact
               path="/account/messages/selling"
               render={(props) =>
                 <SellingMessages {...props} user_id={user_id}
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