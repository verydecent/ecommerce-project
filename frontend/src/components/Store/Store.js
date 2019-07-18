import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

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
    const endpoint = `http://localhost:5000/api/account/store/${user_id}`;

    axios.get(endpoint)
    .then(response => {
      this.setState({ items: response.data });
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    const { items } = this.state;
    const { handleLike } = this.props;

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
        key={index}
        item={item}
        handleLike={handleLike}
      />
      );

    return (
      <div className="store-container">
        <h1> Store</h1>
        <div className="items-panel">
          {itemsArr}
        </div>
      </div>
    );
  }
}

export default Store;