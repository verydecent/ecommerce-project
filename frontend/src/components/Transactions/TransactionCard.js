import React from 'react';
import { Link } from 'react-router-dom';
import { formatTransactionDate } from '../../Helpers/transactionDate';
import Modal from './Modal';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const { id, title, price, updated_at, user_id } = this.props.item;

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
            <h1>Price ${price}</h1>
            <h1>{formatTransactionDate(updated_at)}</h1>
            
          </div>
  
          <div className="transaction-card-details-right">
            <button onClick={this.showModal}>
              Leave Feedback
            </button>
            {/* Open Modal */}
            <Modal item={item} user_id={user_id} show={show} closeModal={this.closeModal} />
            {/* Inside modal will have the post request passing it the item details*/}
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionCard;