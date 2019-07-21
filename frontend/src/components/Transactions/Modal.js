import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback_description: '',
    }
  }

  handleFeedbeck = (event) => {

  event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  render() {
    const { show, title, closeModal } = this.props;
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