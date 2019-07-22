import React from 'react';
import './Modal.css';
import axios from 'axios';
import { postFeedback } from '../../Helpers/devEndpoints';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback_description: '',
    }
  }

  handleFeedback = (event) => {
    const { id, feedback_author_id, feedback_recipient_id } = this.props.item;
    console.log('handleFeedback');
    const body = {
      item_id: id,
      feedback_author_id,
      feedback_recipient_id,
      description: this.state.feedback_description,
    };

    axios.post(postFeedback(), body)
    .then(response => {
      console.log('response', response);
    })
    .catch(error => console.error(error));

    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { show, closeModal } = this.props;
    const { title } = this.props.item;

    if (!show) {
      return null;
    }
    return (
      <div className="modal-container">
        <h1>Leave feedback for {title}</h1>
        <form onSubmit={this.handleFeedback}>
          <textarea
            id="feedback_description"
            value={this.state.feedback_description}
            onChange={this.handleChange}
            type="text"
            placeholder={"Leave feedback based on your transaction experience"}
          />
          <button value="submit">Leave Feedback</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    );
  }
}

export default Modal;