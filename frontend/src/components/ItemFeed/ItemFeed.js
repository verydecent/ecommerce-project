import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './ItemFeed.css';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

class ItemFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  } 
  

  componentDidMount() {
    const requestLink = 'http://localhost:5000/api/itemfeed';

    axios.get(requestLink)
      // Decided to destructure the response.data since I only want the requested data, less code even if it is minute lol
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch(err => {
        console.error( `Error ${err} `);
      });
  }

  render() {
    const items = this.state.items.map((item, index) => (
      <ItemDisplay key={index} item={item} handleLike={this.props.handleLike} />
    ));

    return (
      // lol react fragment short syntax
      <div className="item-feed-container">
        {items}
      </div>
    );
  }
}

export default ItemFeed;