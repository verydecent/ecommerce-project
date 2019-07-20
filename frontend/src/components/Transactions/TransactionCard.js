import React from 'react';
import formatDate from '../../Helpers/formatDate';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function TransactionCard(props) {
  const { title, price, updated_at } = props.item;
  return (
    <div className="transaction-card-container">
      <div className="transaction-card-img">
        <img src={testIMG} alt=""/>
      </div>

      <div className="transaction-card-details">

        <div className="transaction-card-details-left">
          <h1>{title}</h1> 
          <h1>{price}</h1>
          <h1>{formatDate(updated_at)}</h1>
          
        </div>

        <div className="transaction-card-details-right">
          <button>Leave Feedback</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;