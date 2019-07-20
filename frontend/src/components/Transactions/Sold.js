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
      console.log('SOLD RESPONSE DATA', response.data)
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_id } = this.props;
    const { items } = this.state;
    const soldItems = items.map((item, index) => ( <TransactionCard item={item} /> ));

    return (
      <div className="list-container">
        {soldItems}
      </div>
    );
  }
}

export default Sold;