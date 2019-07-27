import React from 'react';
import axios from 'axios';
import { messageUser } from '../../Helpers/devEndpoints';
import './MessageModal.css';

class MessageModal extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  submitMessage = (event) => {
    const { user_id } = this.props;
    const { id } = this.props.match.params;
    const { message } = this.state;

    const body = {
      item_id: id,
      user_id,
      message,
    }

    axios.post(messageUser(), body)
      .then(response => {
        console.log(response.data);

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
        </div>
      </div>
    );
  }
}

export default MessageModal;