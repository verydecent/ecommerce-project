import React from 'react';
import { Link } from 'react-router-dom';
import { formatTransactionDate } from '../../Helpers/transactionDate';
import { checkFeedback } from '../../Helpers/devEndpoints';
import Modal from './Modal';
import axios from 'axios';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      feedbackExists: null,
    };
  }

  componentDidMount() {
    // If this user_id + item_id inside of data inside of feedback table, then that means this item already received feedback from this user, so do not render the Leave feedback button
    const { id, feedback_author_id } = this.props.item;

    axios.post(checkFeedback(), {
      id,
      feedback_author_id
    })
      .then(response => {
        console.log('response', response.data)
        this.setState({ feedbackExists: response.data })
      })
      .catch(error => console.error(error));
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { show, feedbackExists } = this.state;
    const { item } = this.props;
    const { id, title, price, updated_at } = item;

    console.log('Feedbackexists', this.state.feedbackExists);
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
            {
              feedbackExists
                ? <div>Feedback: {feedbackExists.description}</div>
                : <button onClick={this.showModal}>Leave Feedback</button>
            }
            <Modal item={item} show={show} closeModal={this.closeModal} />
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionCard;