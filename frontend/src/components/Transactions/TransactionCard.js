import React from 'react';
import { Link } from 'react-router-dom';
import { formatTransactionDate } from '../../Helpers/transactionDate';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function TransactionCard(props) {
  const { id, title, price, updated_at } = props.item;
  return (
    <div className="transaction-card-container">
      <Link to={`/item/${id}`}>
        <div className="transaction-card-img">
          <img src={testIMG} alt=""/>
        </div>
      </Link>

      <div className="transaction-card-details">

        <div className="transaction-card-details-left">
          <Link to={`/item/${id}`}>
            <h1>{title}</h1>
          </Link>
          <h1>Price {price}</h1>
          <h1>{formatTransactionDate(updated_at)}</h1>
          
        </div>

        <div className="transaction-card-details-right">
          <button>Leave Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;