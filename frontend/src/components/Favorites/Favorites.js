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
    const { id } = this.props.match.params;
    // const endpoint = `http://localhost:5000/api/account/like-item/${id}`;
    const endpoint = likedItems(id);
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
    console.log('state = ', this.state);
    const { items } = this.state;

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
      handleLike={this.handleLike}
      itemInfo={item}
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