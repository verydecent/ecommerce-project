import React from 'react';
import './Message.css';

function Message(props) {
  const { message, username, author_id, created_at } = props.message;
  const { user_id } = props;
  console.log(`author_id: ${author_id}, created_at: ${created_at}, `);

  if (author_id === user_id) {
    return (
      <div className="message-container-user">
        <div className="message-message-user">
          {message}
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
      <div className="message-message">
        {message}
      </div>
    </div>
  );
}

export default Message;