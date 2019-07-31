import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    axios.get(getItems(item_id))
      .then(response => {
        this.setState({ item: response.data })
      })
      .catch(error => console.error(error));
  }
  render() {
    const { description, item_id, created_at } = this.props.feedback;
    const { title } = this.state.item;
    const { item } = this.state;
    console.log(item)
    return (
      <div className="feedback-card-container">
        <div className="feedback-panel-left">
          <Link to={`/item/${item_id}`}>
            <img src={item.url} alt="9999" />
          </Link>
        </div>
        <div className="feedback-panel-right">
          <div className="feedback-item-date">
            {
              created_at
                ? formatTransactionDate(created_at)
                : null
            }
          </div>
          <div className="feedback-item-info">
            <Link to={`/item/${item_id}`} style={{ textDecoration: 'none' }}>
              <div className="feedback-item-title">{title}</div>
              <div className="feedback-item-description">{description}</div>
            </Link>
            {/* Maybe add Author Name */}
          </div>
        </div>
  
      </div>
    );
  }
}

export default FeedbackCard;