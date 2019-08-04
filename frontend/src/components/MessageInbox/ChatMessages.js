import React from 'react';
import axios from 'axios';
import { getChatMessages, purchaseItem } from '../../Helpers/prodEndpoints';
import MessageModal from './MessageModal';
import Message from './Message.js';
import './ChatMessages.css';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showeMessageModal: false,
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

  toggleMessageModal = () => {
    this.setState((prevState) => ({ showeMessageModal: !prevState.showeMessageModal }));
  }


  handlePurchase = (event) => {
    const { user_id } = this.props;
    const { item_id } = this.state.chat;

    axios.put(purchaseItem(item_id), { user_id })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { chat, messages, showeMessageModal } = this.state;
    const { item_id, inquiring_user_id, merchant_user_id } = chat;
    const { user_id } = this.props;

    const mappedMessages = messages.map((message, index) => (<Message key={index} user_id={user_id} message={message} />))
    
    return (
      <div className="chat-messages-container">
        {
          showeMessageModal
            ? <MessageModal showMessageModal={this.showMessageModal} item_id={item_id} author_id={user_id} inquiring_user_id={inquiring_user_id} merchant_user_id={merchant_user_id} toggleMessageModal={this.toggleMessageModal} />
            : null
        }
        <div className="chat-messages-header">
          <div className="chat-messages-header-img">
            <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Fnike-moon-shoe-breaks-world-auction-record-sothebys-001.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
          </div>
          <div className="chat-messages-header-details">
            {/* <h2>{item_title}</h2> */}
            {/* <h3>{merchant_username}</h3> */}
          </div>
          <div className="chat-messages-buttons">
            <button className="chat-messages-purchase-button" onClick={this.handlePurchase}>Purchase</button>
            <button className="chat-messages-reply-button" onClick={this.toggleMessageModal}>Reply</button>
          </div>
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