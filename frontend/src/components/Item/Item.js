import React from 'react';
import axios from 'axios';

import formatDate from '../../Helpers/formatDate';
import { getItems, getUser } from '../../Helpers/devEndpoints';
import './Item.css';

const testIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      merchant: {},
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(getItems(id))
      .then((response1) => {
        axios.get(getUser(response1.data.posted_by_user_id))
          .then((response2) => {
            this.setState({ item: response1.data, merchant: response2.data });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .then()
      .catch(error => {
        console.error(error);
      });
  }

  handlePurchase = (event) => {
    if (!this.props.user_id || !localStorage.getItem('jwt')) {
      alert("You must log in to purchase")
    }
    else {
      alert("Purchased!");
    }
    // if (!user_id) {
    //   alert("You must log in to purchase or message")
    // }
    // console.log('handlePurchase()');

    // const token = localStorage.getItem('jwt');

    // if (!token) {
    //   // Open Login Modal
    // }
    // else {
    //   // Axios request to purchase this Item
    //   // Update is_available to f, and then purchased_by_user_id to this user's id
    //   // this.props.user_info.user_id 
    //   // then when rendering in a feed, if is_available === f then make the appearance of the item faded out? Or just not even there
    //   // Users favorites and users store == fade out
    //   // in the main item feed == not rendered 

    //   // OR
    //   // Also insert into transactions table *There is no transactions table
    //   // 
    // }
  }

  handleMessage = (event) => {
    if (!this.props.user_id || !localStorage.getItem('jwt')) {
      alert("You must log in to purchase")
    }
    else {
      alert("Messaged!");
    }
  }

  handleEdit = () => {
    alert("edit page");
  }

  handleDelete = () => {
    alert("Item Deleted");
  }

  render() {
    const { user_id, liked } = this.props;
    const { category, created_at, color, description, id, price, posted_by_user_id, shipping_price, size, title  } = this.state.item;

   return (
      <div className="item-container">
        <h4>Item</h4>

        <div className="item-panel">
          <div className="item-panel-left">
            <div className="item-image">
              <img src={testIMG} alt="" />
            </div>

            <div className="picture-options">
              Pic options
            </div>
          </div>
          <div className="item-panel-right">
            <div className="item-detail-box">
              <div className="item-meta-data">
                <h1>Brand Name</h1>
                <div className="date-posted">
                  <span>
                    {
                      created_at
                        ? formatDate(created_at)
                        : null
                    }
                  </span>
                </div>
                <div className="date-posted">
                  <span>Category: {category}</span>
                </div>
                <h2>{title}</h2>
                <h2>Size: {size}</h2>
                <h2>Color: {color}</h2>
              </div>
              <div className="item-heart">
              {
                liked.includes(id)
                  ? <img src="https://img.icons8.com/material-rounded/18/000000/like.png"/>
                  : <img src="https://img.icons8.com/material-outlined/18/000000/like.png"/>
              }
              </div>
            </div>

            <div className="item-price">
              <span>${price}</span>
              <div className="item-shipping-price">
                <span>+ ${shipping_price}</span>
                <span>Location : {}</span>
              </div>
            </div>

            {
              user_id === posted_by_user_id
                ? (
                  <div className="item-buttons">
                    <div className="purchase">
                      <button onClick={this.handleEdit}>Edit</button>
                    </div>
                    <div className="message">
                      <button onClick={this.handleDelete}>Delete</button>
                    </div>
                  </div>
                )
                : (  
                  <div className="item-buttons">
                    <div className="purchase">
                      <button onClick={this.handlePurchase}>Purchase</button>
                    </div>
                    <div className="message">
                      <button onClick={this.handleMessage}>Message</button>
                    </div>
                  </div>
                )             
            }

            <div className="user-card">
              <div className="card-image">
                <img
                src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
                alt=""
                />
              </div>
              <div className="card-details">
                <h1>{}</h1>
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
  }
}

export default Item;