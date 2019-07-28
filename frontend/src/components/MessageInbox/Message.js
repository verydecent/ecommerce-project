import React from 'react';
import formatSimpleDate from '../../Helpers/formatSimpleDate';
import './Message.css';
import { create } from 'domain';

function Message(props) {
  const { message, username, author_id, created_at } = props.message;
  const { user_id } = props;

  if (author_id === user_id) {
    return (
      <div className="message-container-user">
        <div className="message-panel-user">
          <div className="message-date-user">
            {formatSimpleDate(created_at)}
          </div>
          <div className="message-message-user">
            {message}
          </div>
        </div>
        <div className="message-user-info-user">
          Me
        </div>
      </div>
    );
  }
  return (
    <div className="message-container">
      <div className="message-user-info">
        {username}
      </div>
      <div className="message-panel">
        <div className="message-date">
          {formatSimpleDate(created_at)}
        </div>
        <div className="message-message">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Message;