import React from 'react';
import axios from 'axios';
import { messageUser } from '../../Helpers/devEndpoints';
import './MessageModal.css';

class MessageModal extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      successResponse: '',
    };
  }

  submitMessage = (event) => {
    const { item_id, author_id, inquiring_user_id, merchant_user_id, toggleMessageModal } = this.props;;
    const { message } = this.state;

    const body = {
      author_id,
      item_id,
      inquiring_user_id,
      merchant_user_id,
      message,
    }

    axios.post(messageUser(), body)
      .then(response => {
        this.setState({ successResponse: response.data.message });
        setTimeout(toggleMessageModal, 1000);
      })
      .catch(error => console.error(error));

    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { message } = this.state;
    const { toggleMessageModal } = this.props;
    const { successResponse } = this.state;
    const successfullySent = successResponse  && <p>{successResponse}</p>;
    return (
      <div className="message-modal-container">
        <div className="message-modal-content">
          <div className="message-modal-header">
            <h1>Message</h1>
            <div className="exit-modal" onClick={toggleMessageModal}>x</div>
          </div>
          <form className="message-form" onSubmit={this.submitMessage}>
            <div className="message-field">
              <label className="--label">Send a Message</label>
              <textarea
                className="--input"
                id="message"
                onChange={this.handleChange}
                value={message}
                type="text"
                placeholder="Send a Message"
              />
            </div>
            <div className="message-button">
              <button value="submit">Send Message</button>
            </div>
          </form>
          <div className="success-response">
            {successfullySent}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageModal;