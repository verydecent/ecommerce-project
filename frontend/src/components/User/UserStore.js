import React from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import StoreItems from './StoreItems';
import UserFeedback from './UserFeedback';
import { getStoreByUsername } from '../../Helpers/devEndpoints';
import './UserStore.css';

class UserStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {},
      user_items: [],
      image_url: '',
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    axios.get(getStoreByUsername(username))
      .then(response => {
        const { user_info, user_items, image_url } = response.data;
        this.setState({ user_info, user_items, image_url });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_info, user_items, image_url } = this.state;
    const { liked, handleLike } = this.props;
    const items = user_items.map((item, index) => (<ItemDisplay key={index} item={item} liked={liked} handleLike={handleLike} />));

    return (
      <div className="user-store-container">
        <div className="user-store-panel">
          <div className="user-store-header">
            <div className="user-store-header-details">
              <h1>{user_info.username}</h1>
              <span>{user_info.location}</span>
            </div>
            <div className="user-store-image">
              <img
              src={image_url}
              alt=""
              />
            </div>
            <Link className="user__store__link" to={`/users/${user_info.username}/store`}>Store</Link>
            <Link className="user__store__link" to={`/users/${user_info.username}/feedback`}>Feedback</Link>
          </div>
          <Route
            path="/users/:username/store"
            render={(props) =>
              <StoreItems {...props} items={items} />
            }
          />
          <Route
            exact
            path="/users/:username/feedback"
            render={(props) =>
              <UserFeedback {...props} />
            }
          />
        </div>
      </div>
    );
  }
}

export default UserStore;