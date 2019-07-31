import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MessageModal from '../MessageInbox/MessageModal';
import formatDate from '../../Helpers/formatDate';
import { getItems, getUser, purchaseItem } from '../../Helpers/devEndpoints';
import './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessageModal: false,
      item: {},
      merchant: {},
      message: '',
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(getItems(id))
      .then((response1) => {
        axios.get(getUser(response1.data.posted_by_user_id))
          .then((response2) => {
            console.log(response1.data)
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

  toggleMessageModal = () => {
    const { user_id, toggleLoginModal } = this.props;
    if (!user_id || !localStorage.getItem('jwt')) {
      toggleLoginModal();
    }
    else {
      this.setState((prevState) => ({ showMessageModal: !prevState.showMessageModal }));
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
    const { is_available, category, created_at, color, description, item_id, price, posted_by_user_id, shipping_price, size, title, brand, url  } = this.state.item;
    const { username, location, image } = this.state.merchant;
    const merchant_user_id = this.state.merchant.id;
    const { showMessageModal } = this.state;


   return (
      <div className="item-container">
        {
          showMessageModal
            ? <MessageModal showMessageModal={showMessageModal} item_id={item_id} author_id={user_id} inquiring_user_id={user_id} merchant_user_id={merchant_user_id} toggleMessageModal={this.toggleMessageModal} />
            : null
        }

        <div className="item-panel">

          <div className="item-panel-left">
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
                <h2>Category: {category}</h2>
                <h2>Title: {title}</h2>
                <h2>Size: {size}</h2>
                <h2>Color: {color}</h2>
              </div>
              <div className="item-heart" onClick={() => handleLike(item_id)}>
              {
                liked.includes(item_id)
                  ? <img src="https://img.icons8.com/material-rounded/18/000000/like.png" alt="" />
                  : <img src="https://img.icons8.com/material-outlined/18/000000/like.png" alt="" />
              }
              </div>
            </div>

            <div className="item-price">
              <span>${price}</span>
              <div className="item-shipping-price">
                <span>+ ${shipping_price}</span>
                <span>Location : {location}</span>
              </div>
            </div>

            <div className="item-description">
              <h1>Description</h1>
              <p>{description}</p>
            </div>

            <div className="user-card">
              <div className="card-details">
                <Link className="user__nav__link" to={`/users/${username}/store`}><h1>Visit {username}'s Store</h1></Link>
              </div>
              <Link className="user__nav__link" to={`/users/${username}/store`}>
                <div className="card-image">
                  <img
                  src={image}
                  alt=""
                  />
                </div>
              </Link>
            </div>
            
          </div>
          <div className="item-panel-right">
            <div className="item-image">
              <img src={url} alt="test" />
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
                            <button onClick={this.toggleMessageModal}>Message</button>
                          </div>
                        </div>
                      )             
                  )
                : (<div className="sold">SOLD</div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Item;