import React from 'react';
import axios from 'axios';
import { getBuyingChat } from '../../Helpers/devEndpoints';
import ChatIcon from './ChatIcon';
import './BuyingMessages.css';

class BuyingMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    }
  }

  componentDidMount() {
    console.log('BUYINGMESSAGES COMPONENT DID MOUNT')
    const { user_id } = this.props;
    axios.get(getBuyingChat(user_id))
      .then(response => {
        this.setState({ chats: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { chats } = this.state;

    const mappedChats = chats.map((chat, index) => <ChatIcon key={index} chat={chat} />);

    return (
      <div className="buying-messages-container">
        {mappedChats}
      </div>
    );
  }
}

export default BuyingMessages