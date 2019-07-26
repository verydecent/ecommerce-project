import React from 'react';
import axios from 'axios';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import { getStoreByUsername } from '../../Helpers/devEndpoints';
import './UserStore.css';

class UserStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {},
      user_items: [],
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    axios.get(getStoreByUsername(username))
      .then(response => {
        const { user_info, user_items } = response.data;
        this.setState({ user_info, user_items });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_info, user_items } = this.state;
    const { liked, handleLike } = this.props;
    let items = user_items.map((item, index) => (<ItemDisplay index={index} item={item} liked={liked} handleLike={handleLike} />));

    return (
      <div className="user-store-container">
        <div className="user-store-panel">
          <div className="user-header-card">
            <div className="header-card-img">
              <img src="" alt="" />
            </div>
            <div className="header-card-details">
              <p>{user_info.username}</p>
              <p>{user_info.location}</p>
            </div>
          </div>
          <div className="store-feed">
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default UserStore;