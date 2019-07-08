import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <div className="feed-item">

      <div className="this-should-be-a-tag-link">

        <div className="item-cover-photo">
          <img />
        </div>

        <h3 className="item-age ">
          <span className="date-ago">
            {/* JS code to subtract created_at to date.now()  */}

            3 days ago
          </span>
        </h3>

        <div className="item-metadata">
          <div className="item-brand-and-size">
            <h3 className="item-brand">Raf Simons</h3>
            <h3 className="item-size">M</h3>
          </div>
          <h3 className="item-title">
            <div>AW08 Phoenix Coat</div>
          </h3>
        </div>
      </div>

      <div className="item-price-and-heart">
          <div className="item-price">
            <h3 className="original-price">
              <span>$10,000</span>
            </h3>
          </div>
          <button className="heart-follow" width="15px" height="10px">
            {"<3"}
          </button>
      </div>

    </div>
  );
}

export default Item;