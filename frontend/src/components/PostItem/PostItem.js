import React from 'react';

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      posted_by_user_id: null,
      price: 0,
      shipping_price: 0,
      title: '',
      description: '',
      category: '',
      size: '',
      color: '',
    };
  }

  render() {
    return (
      <div className="post-item-container">

      </div>
    );
  }
}