import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../Helpers/formatDate';
import './ItemDisplay.css';

function ItemDisplay(props) {
  const { id, brand, price, title, size, created_at, url } = props.item;
  const { handleLike, liked } = props;
  console.log('url', url);
  return (
      <div className="item-display-container">
        <Link to={`/item/${id}`}>
          <div className="item-cover-photo">
            <img src={url} alt=""/>
          </div>
        </Link>
        <h3 className="post-date">
          {formatDate(created_at)}
        </h3>
        <h3 className="item-title">
          {title}
        </h3>
        <div className="item-metadata">
          <div className="item-brand-and-size">
            <h3 className="item-brand">{brand}</h3>
            <h3 className="item-size">{size}</h3>
          </div>

        </div>
        <div className="item-price-and-heart">
            <div className="item-price">
              <h3>${price}</h3>
            </div>
            <div className="item-heart" onClick={() => handleLike(id)}>
              {
                liked.includes(id)
                  ? <img src="https://img.icons8.com/material-rounded/18/000000/like.png" alt="" />
                  : <img src="https://img.icons8.com/material-outlined/18/000000/like.png" alt="" />
              }
            </div>
        </div>
      </div>
  );
}

export default ItemDisplay;