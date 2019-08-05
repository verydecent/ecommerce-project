import React from 'react';
import withCategories from '../../Helpers/withCategories';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import './ItemFeed.css';

class ItemFeed extends React.Component {
  render() {
    const { items, title } = this.props;
    const { liked, handleLike } = this.props;
    const available = items.map((item, index) => (
      <ItemDisplay key={index} item={item} liked={liked} handleLike={handleLike} />
    ));
    available.reverse();
    return (
      <div className="item-feed-container">
        <div className="feed-header">
          <span>{title}</span>
        </div>
        <div className="item-feed-panel">
          {available}
        </div>
      </div>
    );
  }
}

export default withCategories(ItemFeed);