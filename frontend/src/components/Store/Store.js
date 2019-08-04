import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import { getAccountStore } from '../../Helpers/prodEndpoints';
import axios from 'axios';
import './Store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const { user_id } = this.props;

    axios.get(getAccountStore(user_id))
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
    console.log('items?', items)

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
        key={index}
        item={item}
        liked={liked}
        handleLike={handleLike}
      />
      );

    return (
      <div className="store-container">
        <h1> Your Items</h1>
        <div className="items-panel">
          {itemsArr}
        </div>
      </div>
    );
  }
}

export default Store;