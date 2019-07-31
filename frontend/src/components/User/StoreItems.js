import React from 'react';
import './StoreItems.css';

function StoreItems(props) {
  return (
    <div className="store-feed">
      {props.items}
    </div>
  );
}

export default StoreItems;