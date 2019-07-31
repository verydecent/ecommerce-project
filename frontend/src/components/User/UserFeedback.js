import React from 'react';
import axios from 'axios';
import FeedbackCard from '../Feedback/FeedbackCard';
import { getFeedbackByUsername } from '../../Helpers/devEndpoints';
import './UserFeedback.css';

class UserFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    axios.get(getFeedbackByUsername(username))
      .then(response => {
        this.setState({ feedback: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { feedback } = this.state;
    const mappedFeedback = feedback.map((feedback, index) => (<FeedbackCard key={index} feedback={feedback} />));

    return (
      <div className="user-feedback-container">
          <div className="feedback-feed">
            {mappedFeedback}
          </div>
        </div>
    );
  }
}

export default UserFeedback;