import React from 'react';
import axios from 'axios';
import FeedbackCard from '../Feedback/FeedbackCard';
import { getFeedbackByUsername } from '../../Helpers/devEndpoints';
import './UserFeedback.css';

class UserFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_info: {},
      user_feedback: [],
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    axios.get(getFeedbackByUsername(username))
      .then(response => {
        const { user_info, user_feedback } = response.data;
        console.log(response.data);
        this.setState({ user_info, user_feedback });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_info, user_feedback } = this.state;
    console.log('----', user_feedback)
    const feedback = user_feedback.map((feedback, index) => (<FeedbackCard key={index} feedback={feedback} />));
    console.log(feedback);
    return (
      <div className="user-feedback-container">
        <div className="user-feedback-panel">
          <div className="user-header-card">
            <div className="header-card-img">
              <img src="" alt="" />
            </div>
            <div className="header-card-details">
              <p>{user_info.username}</p>
              <p>{user_info.location}</p>
            </div>
          </div>
          <div className="feedback-feed">
            {feedback}
          </div>
        </div>
      </div>
    );
  }
}

export default UserFeedback;