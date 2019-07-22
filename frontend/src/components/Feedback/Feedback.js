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
   return (
     <div className="feedback-container">
       <h1>Feedback Page</h1>

       <div className="feedback-panel">
        <FeedbackCard />

       </div>
     </div>
   );
 }
}

export default Feedback;