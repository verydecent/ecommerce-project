import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

import axios from 'axios';
import './Favorites.css';
import { likedItems } from '../../Helpers/devEndpoints'

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  componentDidMount() {
    const { user_id } = this.props;
    const endpoint = likedItems(user_id);
    console.log(endpoint)
    axios.get(endpoint)
      .then(response => {
        console.log(response);
        this.setState({ items: response.data.items });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { items } = this.state;

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
      handleLike={this.handleLike}
      item={item}
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