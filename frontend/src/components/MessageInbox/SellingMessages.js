import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getSellingChat } from '../../Helpers/devEndpoints';
import Chat from './Chat';
import './SellingMessages.css';

class SellingMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getSellingChat(user_id))
      .then(response => {
        console.log(response.data)
        this.setState({ chats: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { chats } = this.state;

    const mappedChats = chats.map((chat, index) => <Link key={index} className="nav__link" to={`/account/messages/chat/${chat.chat_id}`}><Chat username={chat.inquiring_username} chat={chat} /></Link>);
    // Reverse so that the latest messages appear on top
    mappedChats.reverse();
    return (
      <div className="selling-messages-container">
        {mappedChats}
      </div>
    );
  }
}

export default SellingMessages