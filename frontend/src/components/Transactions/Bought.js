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
    const { user_id } = this.props;
    const { items } = this.state;
    const boughtItems = items.map((item, index) => (
      <Link to={`/item/${item.id}`}>
        <TransactionCard item={item} />
      </Link>
    ));

    return (
      <div className="list-container">
        {boughtItems}
      </div>
    );
  }
}

export default Bought;