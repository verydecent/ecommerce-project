import React from 'react';

import formatDate from '../../Helpers/formatDate';
import './Item.css';
import axios from 'axios';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInfo: null,
      userInfo: null,
    }
  }

  componentDidMount() {
    const { posted_by_user_id } = this.props.location.state.itemInfo;
    const endpoint = `http://localhost:5000/api/users/${posted_by_user_id}`;

    axios.get(endpoint)
      .then(response => {
        console.log('response', response);
        this.setState({ userInfo: response.data.user });
      })
      .catch(error => {
        console.error(error);
      });
  }


  render() {
    const { id, posted_by_user_id, purchased_by_user_id, is_available, price, shipping_price, title, description, category, size, color, created_at } = this.props.location.state.itemInfo;
    console.log(this.state.userInfo);
    if (this.state.userInfo) return (
      <div className="item-container">
        <h4>Item</h4>
    
        <div className="item-panel">
          {/* Left Column*/}
          <div className="item-panel-left">
            <div className="item-image">
              <img src={testIMG} />
            </div>
    
            <div className="picture-options">
              Pic options ) ) ) ) ) ) ) )
            </div>
          </div>
          {/* Right Column */}
          <div className="item-panel-right">
            <div className="item-detail-box">
              <div className="item-meta-data">
                <h1>Brand Name</h1>
                <div className="date-posted">
                  <span>{formatDate(created_at)}</span>
                </div>
                <div className="date-posted">
                  <span>Category: {category}</span>
                </div>
                <h2>{title}</h2>
                <h2>Size {size}</h2>
                <h2>Color {color}</h2>
              </div>
              <div className="item-heart">
                <img src="https://img.icons8.com/material-rounded/26/000000/hearts.png" />
              </div>
            </div>
    
            <div className="item-price">
              <span>${price}</span>
              <div className="item-shipping-price">
                <span>+ ${shipping_price}</span>
                <span>Location : {this.state.userInfo.location}</span>
              </div>
            </div>
    
            <div className="item-buttons">
              <div className="purchase">
                <button>Purchase</button>
              </div>
              <div className="message">
                <button>Message</button>
              </div>
            </div>
    
            <div className="user-card">
              <div className="card-image">
                <img
                src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
                alt="-user-profile-picture"
                />
              </div>
              <div className="card-details">
                <h1>{this.state.userInfo.username}</h1>
                <h1>Visit Store</h1>
              </div>
            </div>
    
            <div className="item-description">
              <h1>Description</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );

    return <div className="item-container">Loading</div>
  }
}

export default Item;