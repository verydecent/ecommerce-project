import React from 'react';
import axios from 'axios';
import { getBoughtItems } from '../../Helpers/devEndpoints';

class Bought extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getBoughtItems(user_id))
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));    
  }

  render() {
    const { user_id } = this.props;
    const { items } = this.state;
    const boughtItems = items.map((item, index) => (<div>item.title</div>));
    
    console.log('items', items);
    console.log('boughtItems', boughtItems);

    return (
      <div className="bought-container">
        Bought list
        {boughtItems}
      </div>
    );
  }
}

export default Bought;