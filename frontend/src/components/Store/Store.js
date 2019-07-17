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
    // const { id } = this.props.match.params;
    const { user_id } = this.props;
    console.log("Store.js componentDidmount id", user_id);
    const endpoint = `http://localhost:5000/api/account/store/${user_id}`;

    axios.get(endpoint)
    .then(response => {
      console.log("Store.js response", response);
      this.setState({ items: response.data });
    })
    .catch(error => {
      console.error(error);
    });
  }

  handleLike = (item_id) => {
    const endpoint = 'http://localhost:5000/api/account/like-item';

    // const { id } = this.props.match.params;
    const { user_id } = this.props;
    const body = {
      user_id,
      item_id
    };

    axios.post(endpoint, body)
      .then(response => {
        alert(response.data.message);
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