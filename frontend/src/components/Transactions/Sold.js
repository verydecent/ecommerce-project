import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getSoldItems } from '../../Helpers/devEndpoints';
import './Transactions.css';

import TransactionCard from './TransactionCard';

class Sold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getSoldItems(user_id))
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { id, title, price, updated_at, posted_by_user_id, purchased_by_user_id } = this.state.items;
    const soldItem = {
      id,
      title,
      price,
      updated_at,
      posted_by_user_id,
      purchased_by_user_id,
    };
    const soldItems = items.map((item, index) => ( <TransactionCard item={soldItem} /> ));

    return (
      <div className="list-container">
        {soldItems}
      </div>
    );
  }
}

export default Sold;