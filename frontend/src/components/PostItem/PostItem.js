import React from 'react';
import './PostItem.css';

const tempIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      posted_by_user_id: null,
      price: null,
      shipping_price: null,
      title: '',
      description: '',
      category: '',
      size: '',
      color: '',
    };
  }

  handleSubmit = (event) => {
    console.log('handleSubmit')
    console.log('this.props.match',this.props.match)
    console.log(this.state.posted_by_user_id);

    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    event.preventDefault();
  }

  render() {
    const { price, shipping_price, title, description, category, size, color } = this.state;
    return (
      <div className="post-item-container">
        <h1>Post Item</h1>
        <div className="item-panel">
          <form onSubmit={this.handleSubmit}>
            <div className="item-detail-panel">
              <h3>Details</h3>
              <div className="item-details">
                <div className="left-column">
                  <div className="">
                    <input 
                      id="title"
                      value={title}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                  <div className="">
                    <input 
                      id="category"
                      value={category}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Category"
                    />
                  </div>
                </div>
                <div className="right-column">
                  <div className="">
                    <input 
                      id="size"
                      value={size}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Size"
                    />
                  </div>
                  <div className="">
                    <input 
                      id="color"
                      value={color}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Color"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="item-description-panel">
              <h3>Description</h3>
              <textarea
                id="description"
                value={description}
                onChange={this.handleChange}
                type="text"
                placeholder="Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc"
              />
            </div>
            <div className="item-payment-panel">
              <h3>Payment</h3>
              <div className="payment-details">
                <div className="left-column">
                  <input 
                    id="price"
                    value={price}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Item price"
                  />
                </div>
                <div className="right-column">
                  <input 
                    id="shipping_price"
                    value={shipping_price}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Shipping fees"
                  />
                </div>
              </div>
            </div>

            <div className="item-image-panel">
              <h3>Photos</h3>
              <div className="item-images">
                <div className="header-image">
                  <img src={tempIMG} alt="white t shirt" />
                </div>

                <button>Upload Photos</button>
              </div>
            </div>

            <div className="item-form-button">
              <button value="submit">Post Item</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostItem;


// <form onSubmit={console.log('onsubmit')}>
//               <div className="inner">
//                 <label>Title</label> <br />
//                 
//               </div>
//               <div className="inner">
//                 <label>Description</label> <br />

//               </div>
//               <div className="inner">
//                 <label>Price</label> <br />
//                 
//               </div>
//               <div className="inner">
//                 <label>Shipping Price</label> <br />
                
//               </div>
//               <div className="inner">
//                 <label>Category</label> <br />

//               </div>
//               <div className="inner">
//                 <label>Size</label> <br />

//               </div>
//               <div className="inner">
//                 <label>Color</label> <br />

//               </div>
//               <button value="submit">Post Item</button>
//             </form>