import React from 'react';
import './FeedbackCard.css';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function FeedbackCard() {
  return (
    <div className="feedback-card-container">
      <div className="feedback-panel-left">
        <div className="feedback-item-date">
          HEADER DATE 
        </div>
        <div className="feedback-item-info">
          {/* <Link></Link> */}
          <div className="feedback-item-title">ITEM NAME</div>
          <div className="feedback-item-description">FEEDBACK DESC</div>
        </div>
      </div>

      <div className="feedback-panel-right">
        {/* <Link></Link> */}
        <img src={testIMG} alt="9999" />
      </div>

    </div>
  );
}

export default FeedbackCard;