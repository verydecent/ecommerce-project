import React from 'react';
import axios from 'axios';
import { getSoldItems } from '../../Helpers/devEndpoints';

class Sold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    const { user_id } = this.props;
    axios.get(getSoldItems(user_id))
    .then(response => {
        console.log('response items', response.data.items);
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_id } = this.props;
    const { items } = this.state;
    const soldItems = items.map((item, index) => item.title);

    return (
      <div className="sold-container">
        sold list
        {soldItems}
      </div>
    );
  }
}

export default Sold;