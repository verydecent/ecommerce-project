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
    console.log("CDM on ItemFeed or where path is '/'");
    axios.get(getItems())
      .then(({ data }) => {
        this.setState({ items: data });
      })
      .catch(err => {
        console.error( `Error ${err} `);
      });
  }

  render() {
    const { liked } = this.props;
    const items = this.state.items.map((item, index) => (
      <ItemDisplay key={index} item={item} liked={liked} handleLike={this.props.handleLike} />
    ));

    return (
      <div className="item-feed-container">
        {items}
      </div>
    );
  }
}

export default ItemFeed;