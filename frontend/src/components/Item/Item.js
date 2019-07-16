import React from 'react';

import './Item.css';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function Item() {
  return (
    <div className="item-container">
      <h1>Item</h1>


      <div className="item-panel">
        
        <div className="item-img">
          <img src={testIMG} />
        </div>


        <div className="item-details">

          <div className="item-detail-box">
            <div className="">
              <h1>Brand Name</h1>
              <h2>Title</h2>
              <h2>Size</h2>
            </div>
            <div className="">
              Likes
            </div>
          </div>


          <div className="item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada erat congue orci congue varius. Vestibulum placerat nisl ex, et malesuada ligula commodo sit amet. Phasellus arcu tellus, molestie sed sem at, luctus mollis est. Morbi vel elit at arcu vestibulum blandit eget elementum ligula. Cras purus mi, mattis ut mauris eget, ultricies egestas est. Sed scelerisque aliquam augue ac faucibus. Nulla efficitur magna in orci porttitor, a auctor augue congue. Nunc accumsan pharetra lacinia. Cras blandit, urna sit amet fringilla pharetra, purus eros auctor neque, ac dignissim mi nibh vitae tellus. Curabitur ut blandit leo. Fusce ullamcorper elementum metus, vitae posuere lorem cursus vitae. Vivamus viverra, tellus sit amet sagittis sollicitudin, neque libero sagittis neque, ac tincidunt neque nisi vel mi. Etiam condimentum porta semper. 
          </div>
          <div className="item-price">$5000</div>
          <div className="item-shipping-price">$20</div>
          <div className="item-location">Germany</div>
          <div className="purchase">
            <button>Purchase</button>
          </div>
          <div className="message">
            <button>Message</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Item;
