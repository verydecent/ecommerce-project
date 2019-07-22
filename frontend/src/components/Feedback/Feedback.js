import React from 'react';
import axios from 'axios';
import { getFeedback } from '../../Helpers/devEndpoints';

import './Feedback.css';
import FeedbackCard from './FeedbackCard';

class Feedback extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    user_feedback: [],
   };
 }

 componentDidMount() {
   const { user_id } = this.props;
    console.log(user_id);
   axios.get(getFeedback(user_id))
    .then(response => {
      console.log(response);
      this.setState({ user_feedback: response.data });
    })
    .catch(error => console.error(error));
 }

 render() {
   const { user_feedback } = this.state;
   const feedbackList = user_feedback.map((feedback, index) => <FeedbackCard key={index} feedback={feedback} />);

   return (
     <div className="feedback-container">
       <h1>Feedback Page</h1>

       <div className="feedback-panel">
        {feedbackList}
       </div>
     </div>
   );
 }
}

export default Feedback;