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
    const { id } = this.props.match.params;
    const endpoint = `http://localhost:5000/api/account/store/${id}`;

    axios.get(endpoint)
    .then(res => {
      console.log('Store res data', res);
      this.setState({ items: res.data });
    })
    .catch(error => {
      console.error(error);
    });
  }

  handleLike = (item_id) => {
    const endpoint = 'http://localhost:5000/api/account/like-item';

    const { id } = this.props.match.params;
    const body = {
      id,
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
      itemInfo={item}
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