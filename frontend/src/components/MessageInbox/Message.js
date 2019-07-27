import React from 'react';
import './Message.css';

function Message(props) {
  const { message } = props.message;

  return (
    <div className="message-container">
      <div className="message-user-info"></div>
      <div className="message-message">
        {message}
      </div>
    </div>
  );
}

export default Message;