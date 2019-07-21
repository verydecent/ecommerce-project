import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getBoughtItems } from '../../Helpers/devEndpoints';
import './Transactions.css';

import TransactionCard from './TransactionCard';
import ItemFeed from '../ItemFeed/ItemFeed';

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
    const { items } = this.state;
    // Leave feedback as purchaser and seller receives feedback
    items.forEach(item => {
      item.feedback_recipient_id = item.posted_by_user_id
      item.feedback_author_id = item.purchased_by_user_id
      delete item.posted_by_user_id
      delete ItemFeed.purchased_by_user_id
    })

    const boughtItems = items.map((item, index) => ( <TransactionCard key={index} item={item} /> ));

    return (
      <div className="list-container">
        {boughtItems}
      </div>
    );
  }
}

export default Bought;