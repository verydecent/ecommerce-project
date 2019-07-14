import React from 'react';
import axios from 'axios';

import './PostItem.css';

const tempIMG ="https://www.sunspel.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/t/mtsh0001-whaa-1new.jpg";

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      posted_by_user_id: '',
      price: '',
      shipping_price: '',
      title: '',
      description: '',
      category: '',
      size: '',
      color: '',
      error: '',
      successResponse: '',
    };
  }

  handleSubmit = (event) => {
    const { price, shipping_price, title, description, category, size, color } = this.state;
    const endpoint ='http://localhost:5000/api/account/post-item/';
    const body = {
      posted_by_user_id: this.props.match.params.id,
      price,
      shipping_price,
      title,
      description,
      category,
      size,
      color
    };
    
    axios.post(endpoint, body)
      .then(res => {
        console.log('endpoint response');
        console.log(res);

        this.setState({
          posted_by_user_id: '',
          price: '',
          shipping_price: '',
          title: '',
          description: '',
          category: '',
          size: '',
          color: '',
        });
      })
      .catch(error => {
        console.error(error)
        this.setState({ error });
      });

    event.preventDefault();
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    event.preventDefault();
  }

  render() {
    const { price, shipping_price, title, description, category, size, color, error } = this.state;

    console.log("The state", this.state);
    const isInvalid =
      price === '' ||
      shipping_price === '' ||
      title === '' ||
      description === '' ||
      category === '' ||
      size === '' ||
      color === '';

    return (
      <div className="post-item-container">
        <h1>Post Item</h1>
        <div className="item-panel">
          <form onSubmit={this.handleSubmit} autoComplete="off">
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
                    <select
                    id='color'
                    onChange={this.handleChange}
                    >
                      <option value={color} defaultValue> Color </option>
                      <option value="black"> Black </option>
                      <option value="blue"> Blue </option>
                      <option value="brown"> Brown </option>
                      <option value="cyan"> Cyan </option>
                      <option value="green"> Green </option>
                      <option value="grey"> Grey </option>
                      <option value="indigo"> Indigo </option>
                      <option value="magenta"> Magenta </option>
                      <option value="orange"> Orange </option>
                      <option value="pink"> Pink </option>
                      <option value="purple"> Purple </option>
                      <option value="red"> Red </option>
                      <option value="violet"> Violet </option>
                      <option value="white"> White </option>
                      <option value="yellow"> Yellow </option>
                    </select>
                  </div>
                </div>
                <div className="right-column">
                  <div className="">
                    <select
                    id='category'
                    onChange={this.handleChange}
                    >
                      <option value={category} defaultValue>Category</option>
                      <option value={'tops'}> Tops </option>
                      <option value={'knitwear'}> Knitwear </option>
                      <option value={'jackets'}> Jackets </option>
                      <option value={'jeans'}> Jeans </option>
                      <option value={'trousers'}> Trousers </option>
                      <option value={'shorts'}> Shorts </option>
                      <option value={'accessories'}> Accessories </option>
                      <option value={'shoes'}> Shoes </option>
                    </select>
                  </div>
                  <div className="">
                    <select
                    id='size'
                    onChange={this.handleChange}
                    >
                      <option value={size} defaultValue>Size</option>
                      <option value={'28'}> 28 </option>
                      <option value={'30'}> 30 </option>
                      <option value={'32'}> 32 </option>
                      <option value={'34'}> 34 </option>
                      <option value={'36'}> 36 </option>
                      <option value={'xsmall'}> Xsmall </option>
                      <option value={'small'}> Small </option>
                      <option value={'medium'}> Medium </option>
                      <option value={'large'}> Large </option>
                      <option value={'xlarge'}> Xlarge </option>
                      <option value={'adjustable'}> Adjustable </option>
                      <option value={'fitsall'}> Fits All </option>
                      <option value={'6'}> 6 </option>
                      <option value={'6.5'}> 6.5 </option>
                      <option value={'7'}> 7 </option>
                      <option value={'7.5'}> 7.5 </option>
                      <option value={'8'}> 8 </option>
                      <option value={'8.5'}> 8.5 </option>
                      <option value={'9'}> 9 </option>
                      <option value={'9.5'}> 9.5 </option>
                      <option value={'10'}> 10 </option>
                      <option value={'10.5'}> 10.5 </option>
                      <option value={'11'}> 11 </option>
                      <option value={'11.5'}> 11.5 </option>
                      <option value={'12'}> 12 </option>
                      <option value={'12.5'}> 12.5 </option>
                    </select>
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

            <div className="conditional-signal" >
              {
                (price === '')
                  ? <div className="signal"><span>!</span> Missing Price Field</div>
                  : null 
              }
              {
                (shipping_price) === ''
                  ? <div className="signal"><span>!</span> Missing Shipping Price Field</div>
                  : null
              }
              {
                (title) === ''
                  ? <div className="signal"><span>!</span> Missing Title Field</div>
                  : null
              }
              {
                (description) === ''
                  ? <div className="signal"><span>!</span> Missing Description Field</div>
                  : null
              }
              {
                (category) === ''
                  ? <div className="signal"><span>!</span> Missing Category Field</div>
                  : null
              }
              {
                (size) === ''
                  ? <div className="signal"><span>!</span> Missing Size Field</div>
                  : null
              }
              {
                (color) === ''
                  ? <div className="signal"><span>!</span> Missing Color Field</div>
                  : null
              }

              {/* For error response */}
              {
                (error && error.message) 
                  ? <div className="signal"><pan>{error.message}</pan></div>
                  : null
              }
            </div>

            <div className="item-form-button">
              <button value="submit" disabled={isInvalid}>Post Item</button>
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