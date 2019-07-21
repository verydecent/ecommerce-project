import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getBoughtItems } from '../../Helpers/devEndpoints';
import './Transactions.css';

import TransactionCard from './TransactionCard';

class Bought extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getBoughtItems(user_id))
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));    
  }

  render() {
    const { id, title, price, updated_at, posted_by_user_id, purchased_by_user_id } = this.state.items;
    const boughtItem = {
      id,
      title,
      price,
      updated_at,
      posted_by_user_id,
      purchased_by_user_id,
    };
    const boughtItems = items.map((item, index) => ( <TransactionCard item={boughtItem} /> ));

    return (
      <div className="list-container">
        {boughtItems}
      </div>
    );
  }
}

export default Bought;