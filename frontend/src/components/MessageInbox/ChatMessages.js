import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getChatMessages } from '../../Helpers/devEndpoints';
import Message from './Message.js';
import './ChatMessages.css';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    const { chat_id } = this.props.match.params;
    axios.get(getChatMessages(chat_id))
      .then(response => {
        this.setState({ messages: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { messages } = this.state;

    const mappedMessages = messages.map((message, index) => (<Message key={index} message={message} />))

    return (
      <div className="chat-messages-container">
        <div className="chat-message-header">
          <div className="chat-message-header-left">
            <div className="chat-icon-img">
              {/* Also going to need the image sighhhh */}
              <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fnike-moon-shoe-breaks-world-auction-record-sothebys-001.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
            </div>
            <div className="chat-icon-details">
              <h2>ITEM TITLE</h2>
              <h3>DATE</h3>
            </div>
          </div>
          <div className="chat-message-header-right">
            <NavLink className="nav__link"><span>Purchase</span></NavLink>
            <NavLink className="nav__link"><span>Reply</span></NavLink>
          </div>
        </div>
        <div className="chat-message-panel">
          {/* Where Mapped Array of Messages go */}
          {mappedMessages}
        </div>
      </div>
    );
  }
}

export default ChatMessages