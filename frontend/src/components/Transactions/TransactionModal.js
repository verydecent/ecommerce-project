import React from 'react';
import './TransactionModal.css';
import axios from 'axios';
import { postFeedback } from '../../Helpers/devEndpoints';

class TransactionModal extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      rating: 0,
      successResponse: '',
    };
  }

  submitFeedback = (event) => {
    const { toggleTransactionModal } = this.props;
    const { id, feedback_author_id, feedback_recipient_id } = this.props.item;
    const { rating, description } = this.state;

    const body = {
      item_id: id,
      feedback_author_id,
      feedback_recipient_id,
      rating,
      description,
    };

    axios.post(postFeedback(), body)
    .then(response => {
      this.setState({ successResponse: response.data.message });
      setTimeout(toggleTransactionModal, 800);
    })
    .catch(error => console.error(error));

    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { successResponse, rating, description } = this.state;
    const { toggleTransactionModal } = this.props;
    const successfullySent = successResponse && <p>{successResponse}</p>;

    return (
      <div className="transaction-modal-container">
        <div className="transaction-modal-content">
          <div className="transaction-modal-header ">
            <h1>Feedback</h1>
            <div className="exit-modal" onClick={toggleTransactionModal}>x</div>
          </div>
          <form className="transaction-modal-form" onSubmit={this.submitFeedback}>
            <div className="transaction-modal-field">
              <label className="--label">Leave Feedback <span className="transaction-modal-required">*</span></label>
              <textarea
                className="--input"
                id="description"
                value={description}
                onChange={this.handleChange}
                type="text"
                placeholder={"Leave feedback based on your transaction experience"}
              />
              <label className="--label">Star Rating <span className="transaction-modal-required">*</span></label>
              <select
                className="--star-rating"
                id='rating'
                onChange={this.handleChange}
              >
                <option value={rating} defaultValue> Star Rating </option>
                <option value={1}> 1 Star </option>
                <option value={2}> 2 Stars </option>
                <option value={3}> 3 Stars </option>
                <option value={4}> 4 Stars </option>
                <option value={5}> 5 Stars </option>
              </select>
            </div>
            <div className="transaction-modal-button">
              <button value="submit">Leave Feedback</button>
            </div>
          </form>
          <div className="modal-success-response">
            {successfullySent}
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionModal;