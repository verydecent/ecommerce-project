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
      console.log('SOLD RESPONSE DATA', response.data)
        this.setState({ items: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { user_id } = this.props;
    const { items } = this.state;
    const soldItems = items.map((item, index) => (<div>item.title</div>));

    return (
      <div className="sold-container">
        sold list
        {soldItems}
      </div>
    );
  }
}

export default Sold;