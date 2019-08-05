import React from 'react';
import {  Link } from 'react-router-dom';
import { formatTransactionDate } from '../../Helpers/transactionDate';
import { checkFeedback } from '../../Helpers/prodEndpoints';
import TransactionModal from './TransactionModal';
import axios from 'axios';

class TransactionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransactionModal: false,
      feedbackExists: true,
    };
  }

  componentDidMount() {
    // If this user_id + item_id inside of data inside of feedback table, then that means this item already received feedback from this user, so do not render the Leave feedback span
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

  toggleTransactionModal = () => {
    this.setState((prevState) => ({ showTransactionModal: !prevState.showTransactionModal }));
  }

  render() {
    const { showTransactionModal, feedbackExists } = this.state;
    const { item } = this.props;
    console.log(item)
    const { item_id, title, price, updated_at, url } = item;

    return (
      <div className="transaction-card-container">
        {
          showTransactionModal
            ? <TransactionModal item={item} toggleTransactionModal={this.toggleTransactionModal} />
            : null
        }
        <div className="transaction-card-left">
          <div className="transaction-item-info">
            <Link to={`/item/${item_id}`} style={{ textDecoration: 'none' }}>
              <div className="transaction-item-title">{title}</div>
              <div className="transaction-item-price">${price}</div>
              <div className="transaction-item-date">{formatTransactionDate(updated_at)}</div>
            </Link>
            {
              feedbackExists
              ? <div className="transaction-feedback-empty"><span></span></div>
              : (
                <div className="transaction-feedback-button" onClick={this.toggleTransactionModal}>
                  <span>Leave Feedback</span>
                </div>
                )
            }
          </div>
        </div>

        <div className="transaction-card-right">
          <Link to={`/item/${item_id}`}>
            <div className="transaction-card-img">
              <img src={url} alt=""/>
            </div>
          </Link>
        </div>

      </div>
    );
  }
}

export default TransactionCard;