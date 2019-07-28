import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import formatDateOnly from '../../Helpers/formatDateOnly';
import { getChatMessages } from '../../Helpers/devEndpoints';
import Message from './Message.js';
import './ChatMessages.css';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: {},
      messages: [],
    }
  }

  componentDidMount() {
    const { chat_id } = this.props.match.params;
    axios.get(getChatMessages(chat_id))
      .then(response => {
        const { chat, messages } = response.data;
        this.setState({ chat, messages });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { messages } = this.state;
    const { user_id } = this.props;

    const mappedMessages = messages.map((message, index) => (<Message key={index} user_id={user_id} message={message} />))

    return (
      <div className="chat-messages-container">
        <div className="chat-messages-header">
          <div className="chat-messages-header-img">
            <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fnike-moon-shoe-breaks-world-auction-record-sothebys-001.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
          </div>
          <div className="chat-messages-header-details">
            {/* <h2>{item_title}</h2> */}
            {/* <h3>{merchant_username}</h3> */}
          </div>
        </div>
        <div className="chat-messages-header-date">
          {/* <h3>{formatDateOnly(chat_created_at)}</h3> */}
        </div>
        <div className="chat-messages-buttons">

        </div>

        <div className="chat-messages-messages">
          {/* Where Mapped Array of Messages go */}
          {mappedMessages}
        </div>
      </div>
    );
  }
}

export default ChatMessages