import React from 'react';
import axios from 'axios';
import './FeedbackCard.css';
import { formatTransactionDate } from '../../Helpers/transactionDate';
import { getItems } from '../../Helpers/devEndpoints';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class FeedbackCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    const { item_id } = this.props.feedback;
    console.log(getItems(item_id));
    axios.get(getItems(item_id))
      .then(response => {
        console.log(response.data);
        this.setState({ item: response.data })
      })
      .catch(error => console.error(error));
  }
  render() {
    const { description } = this.props.feedback;
    // Eventually will also be calling item image
    const { title, updated_at } = this.state.item;
    return (
      <div className="feedback-card-container">
        <div className="feedback-panel-left">
          <div className="feedback-item-date">
            {
              updated_at
                ? formatTransactionDate(updated_at)
                : null
            }
          </div>
          <div className="feedback-item-info">
            {/* <Link></Link> */}
            <div className="feedback-item-title">{title}</div>
            <div className="feedback-item-description">{description}</div>
            {/* Maybe add Author Name */}
          </div>
        </div>
  
        <div className="feedback-panel-right">
          {/* <Link></Link> */}
          <img src={testIMG} alt="9999" />
        </div>
  
      </div>
    );
  }
}

export default FeedbackCard;