import React from 'react';
import { Link } from 'react-router-dom';

import formatDate from '../../Helpers/formatDate';
import './ItemDisplay.css';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

function ItemDisplay(props) {
  const { id, price, title, size, created_at } = props.item;
  const { handleLike, item } = props;

  return (
    
      <div className="item-display-container">
        <div className="item-cover-photo">
          <img src={testIMG} alt=""/>
        </div>
        <h3 className="post-date">
          {formatDate(created_at)}
        </h3>
        <div className="item-metadata">
          <div className="item-brand-and-size">
            <h3 className="item-brand">Raf Simons</h3>
            <h3 className="item-size">{size}</h3>
          </div>
          <h3 className="item-title">
            {title}
          </h3>
        </div>
        <div className="item-price-and-heart">
            <div className="item-price">
              <h3>${price}</h3>
            </div>
            <div className="item-heart" onClick={() => handleLike(id)}>
              <img src="https://img.icons8.com/material-rounded/18/000000/hearts.png" alt="" />
            </div>
        </div>

      </div>

  );
}

export default ItemDisplay;