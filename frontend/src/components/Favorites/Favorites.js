import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

import axios from 'axios';
import './Favorites.css';
import { getLikedItems } from '../../Helpers/devEndpoints'

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getLikedItems(user_id))
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { items } = this.state;
    const { liked, handleLike } = this.props;

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
      handleLike={handleLike}
      item={item}
      liked={liked}
      key={index}
      />
      );

    return (
      <div className="favorites-container">
        <h1>Favorites Page</h1>
        <div className="favorites-panel">
          {itemsArr}
        </div>
      </div>
    );
  }
}

export default Favorites;