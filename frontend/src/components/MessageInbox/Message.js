import React from 'react';
import './Message.css';

function Message(props) {
  const { message, username, author_id } = props.message;
  const { user_id } = props;

  if (author_id === user_id) {
    return (
      <div className="message-container-user">
        <div className="message-message-user">
          {message}
        </div>
        <div className="message-user-info-user">
          {username}
        </div>
      </div>
    );
  }
  return (
    <div className="message-container">
      <div className="message-user-info">
        {username}
      </div>
      <div className="message-message">
        {message}
      </div>
    </div>
  );
}

export default Message;