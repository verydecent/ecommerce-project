import React from 'react';
import Item from '../Item/Item';

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
    const { id } = this.props;
    const endpoint = 'http://localhost:5000/api/account/store';

    const body = {
      user_id: id
    }
    axios.get(endpoint, {
      params: {
        id: 1
      }
    })
    .then(res => {
      console.log('Store res data', res);
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="store-container">
        <h1> Store</h1>
        <Item />
      </div>
    );
  }
}

export default Store;