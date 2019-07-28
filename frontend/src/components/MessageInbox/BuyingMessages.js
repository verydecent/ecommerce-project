import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getBuyingChat } from '../../Helpers/devEndpoints';
import Chat from './Chat';
import './BuyingMessages.css';

class BuyingMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getBuyingChat(user_id))
      .then(response => {
        this.setState({ chats: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { chats } = this.state;

    const mappedChats = chats.map((chat, index) => <Link key={index} className="nav__link" to={`/account/messages/chat/${chat.chat_id}`}><Chat username={chat.merchant_username} chat={chat} /></Link>);
    mappedChats.reverse();
    
    return (
      <div className="buying-messages-container">
        {mappedChats}
      </div>
    );
  }
}

export default BuyingMessages