import React from 'react';
import formatDateOnly from '../../Helpers/formatDateOnly';
import './ChatIcon.css';

class ChatIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { item_title, merchant_username, chat_created_at } = this.props.chat;

    return (
      <div className="chat-icon-container">
        <div className="chat-icon-panel">
          <div className="chat-icon-img">
            <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fnike-moon-shoe-breaks-world-auction-record-sothebys-001.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
          </div>
          <div className="chat-icon-details">
            <h2>{item_title}</h2>
            <h3>{merchant_username}</h3>
          </div>
        </div>
        <div className="chat-icon-date">
          <h3>{formatDateOnly(chat_created_at)}</h3>
          {/* <NavLink className="nav__link"><span>Purchase</span></NavLink>
          <NavLink className="nav__link"><span>Reply</span></NavLink> */}
        </div>
      </div>
    );
  }
}

export default ChatIcon;