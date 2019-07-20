import React from 'react';
import axios from 'axios';
import { getBoughtItems } from '../../Helpers/devEndpoints';

class Bought extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    console.log(getBoughtItems(1));
    // axios.get()
    //   .then()
    //   .catch()    
  }

  render() {
    { user_id } = this.props;
    return (
      <div className="bought-container">
        Bought list
      </div>
    );
  }
}

export default Bought;