import React from 'react';
import ItemDisplay from '../ItemDisplay/ItemDisplay';

import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  componentDidMount() {
  }

  render() {
    const { items } = this.state;

    let itemsArr = items.map((item, index) => 
      <ItemDisplay
      handleLike={this.handleLike}
      itemInfo={item}
      key={index}
      />
      );

    return (
      <div className="favorites-container">
        <h1>Favorites Page</h1>
        <div className="favorites-panel">
          {itemsArr}
        </div>
      </div>
    );
  }
}

export default Favorites;