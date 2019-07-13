import React from 'react';
import Item from '../Item/Item';

import './Store.css';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { id } = this.props;
  }

  render() {
    return (
      <div className="store-container">
        <h1> Store</h1>
        <Item />
      </div>
    );
  }
}

export default Store;