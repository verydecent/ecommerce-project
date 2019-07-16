import React from 'react';

import './Item.css';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function Item() {
  return (
    <div className="item-container">
      <h4>Item</h4>
      <div className="item-panel">
        <div className="item-img">
          <img src={testIMG} />
        </div>
        <div className="item-details">

          <div className="item-detail-box">
            <div className="item-meta-data">
              <h1>Brand Name</h1>
              <h2>Vintage Sweater</h2>
              <h2>Size Medium</h2>
            </div>
            <div className="item-heart">
              <img src="https://img.icons8.com/material-rounded/26/000000/hearts.png" />
            </div>
          </div>

          <div className="item-price">
            <span>$5000</span>
            <div className="item-shipping-price">
              <span>+ $20</span>
              <span>Location : Japan</span>
            </div>
          </div>

          <div className="item-buttons">
            <div className="purchase">
              <button>Purchase</button>
            </div>
            <div className="message">
              <button>Message</button>
            </div>
          </div>

          <div className="user-card">
            <div className="card-details">
              <h1>Username</h1>
              <h2>Location</h2>
              <h2>Visit Store</h2>
            </div>
            <div className="card-image">
              <img
              src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
              alt="-user-profile-picture"
              />
            </div>
          </div>

          <div className="item-description">
            <h1>Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada erat congue orci congue varius. 
              Vestibulum placerat nisl ex, et malesuada ligula commodo sit amet. Phasellus arcu tellus, molestie sed sem at, luctus mollis est. Morbi vel elit at arcu vestibulum blandit eget elementum ligula. Cras purus mi, mattis ut mauris eget, ultricies egestas est. Sed scelerisque aliquam augue ac faucibus. Nulla efficitur magna in orci porttitor, a auctor augue congue. Nunc accumsan pharetra lacinia. Cras blandit, urna sit amet fringilla pharetra, purus eros auctor neque, ac dignissim mi nibh vitae tellus.
            </p>
          </div>
          <div className="date-posted">
            <h1>Posted : 12.25.20</h1>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Item;
