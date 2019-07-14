import React from 'react';
import './PostItem.css';

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


          <div className="item-detail-panel">
            <h3>Details</h3>
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
            <div className="right-column">
              <div className=""></div>
              <div className=""></div>
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
          <div className="">
            <h3>Payment</h3>
            <div className="">
              <input 
                id="price"
                value={price}
                onChange={this.handleChange}
                type="text"
                placeholder="$0.00"
              />
            </div>
            <div className="">
              <input 
                id="shipping_price"
                value={shipping_price}
                onChange={this.handleChange}
                type="text"
                placeholder="$0.00"
              />
            </div>
          </div>

          <div className="item-image-panel">
            <h3>Photos</h3>
            <img src="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg" alt="white t shirt" />
          </div>
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