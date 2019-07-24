import React from 'react';
import axios from 'axios';

import { getItems } from '../../Helpers/devEndpoints';

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
    axios.get(getItems())
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch(err => {
        console.error( `Error ${err} `);
      });
  }

  render() {
    const { items } = this.state;
    const { liked, handleLike } = this.props;
    const filtered = items.filter((item, index) => (item.is_available == 1));
    const available = filtered.map((item, index) => (
      <ItemDisplay key={index} item={item} liked={liked} handleLike={handleLike} />
    ));
    return (
      <div className="item-feed-container">
        <div className="tag-line">
          <span>Browse The Feed</span>
        </div>
        <div className="item-feed-panel">
          {available}
        </div>
      </div>
    );
  }
}

export default ItemFeed;