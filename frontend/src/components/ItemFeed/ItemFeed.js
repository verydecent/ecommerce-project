import React from 'react';
import withCategories from '../../Helpers/withCategories';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import './ItemFeed.css';

class ItemFeed extends React.Component {
  render() {
    console.log('props', this.props);
    const { items, title } = this.props;
    const { liked, handleLike } = this.props;
    // const filtered = items.filter((item, index) => (item.is_available == 1));
    const available = items.map((item, index) => (
      <ItemDisplay key={index} item={item} liked={liked} handleLike={handleLike} />
    ));
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