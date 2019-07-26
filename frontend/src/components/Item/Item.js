import React from 'react';
import axios from 'axios';

import formatDate from '../../Helpers/formatDate';
import { getItems, getUser, purchaseItem } from '../../Helpers/devEndpoints';
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
    const { user_id, toggleLoginModal } = this.props;
    const { id } = this.props.match.params;

    if (!user_id || !localStorage.getItem('jwt')) {
      toggleLoginModal();
    }
    else {
      console.log('user_id', user_id);
      axios.put(purchaseItem(id), { user_id })
        .then(response => {
          // Potentially move this to app, in order to refresh the whole app after setState because of later request to transactions or could do it in componentDidMount of Transactions

          alert(response.data.message);
        })
        .catch(error => {
          console.error(error);
        })
      // Modal pops up for further instruction or confirmational information

    }
  }

  handleMessage = (event) => {
    if (!this.props.user_id || !localStorage.getItem('jwt')) {
      alert("You must log in to message user")
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
    const { user_id, liked, handleLike } = this.props;
    const { is_available, category, created_at, color, description, id, price, posted_by_user_id, shipping_price, size, title, brand  } = this.state.item;

   return (
      <div className="item-container">
        <h4>Item</h4>

        <div className="item-panel">
          <div className="item-panel-left">
            <div className="item-image">
              <img src={testIMG} alt="test" />
            </div>

            <div className="picture-options">
              Pic options
            </div>
          </div>
          <div className="item-panel-right">
            <div className="item-detail-box">
              <div className="item-meta-data">
                <h1>{brand}</h1>
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
              <div className="item-heart" onClick={() => handleLike(id)}>
              {
                liked.includes(id)
                  ? <img src="https://img.icons8.com/material-rounded/18/000000/like.png" alt="" />
                  : <img src="https://img.icons8.com/material-outlined/18/000000/like.png" alt="" />
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
              is_available
                ? (
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
                  )
                
                : (<div className="sold">SOLD</div>)
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