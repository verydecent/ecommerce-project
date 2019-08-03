import React from 'react';
import axios from 'axios';
import { postItem } from '../../Helpers/prodEndpoints';
import './PostItem.css';

class PostItem extends React.Component {
  constructor() {
    super();
    this.state = {
      posted_by_user_id: '',
      price: '',
      shipping_price: '',
      brand: '',
      title: '',
      description: '',
      category: '',
      size: '',
      color: '',
      location: '',
      image_id: '',

      selectedImages: null,

      error: '',
      successResponse: '',
    };
  }

  handleSubmit = (event) => {
    const { price, shipping_price, brand, title, description, category, size, color, image_id } = this.state;

    const body = {
      posted_by_user_id: this.props.user_id,
      price,
      shipping_price,
      brand,
      title,
      description,
      category,
      size,
      color,
      image_id,
    };

    axios.post(postItem(this.props.user_id), body)
      .then(res => {
        console.log('---res---', res)
        this.setState({
          posted_by_user_id: '',
          price: '',
          shipping_price: '',
          brand: '',
          title: '',
          description: '',
          category: '',
          size: '',
          color: '',
          successResponse: res,
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
    console.log('handleChange state', this.state);
    event.preventDefault();
  }
  
  imageHandler= (event) =>{
    this.setState({ selectedImages: event.target.files[0] }, this.submitOnHandle);
  }
  
  submitOnHandle = () => {
    console.log('submitOnHandle()');

    const data = new FormData();
    data.append('item-images', this.state.selectedImages);
    axios.post(`http://localhost:5000/api/account/post-item/image/`, data)
      .then(response => {
        console.log(response);
        this.setState({ image_id: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { price, shipping_price, brand, title, description, category, size, color, image_id, error, successResponse } = this.state;
    
    console.log('image_id', image_id);
    const isInvalid =
      price === '' ||
      shipping_price === '' ||
      brand ==='' ||
      title === '' ||
      description === '' ||
      category === '' ||
      size === '' ||
      color === '';

    return (
      <div className="post-item-container">
        <h1>Post Item</h1>
        <div className="post-item-panel">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="post-item-detail-panel">
              <h3>Details</h3>
              <div className="post-item-details">
                <div className="left-column">
                  <div className="">
                    <input
                      id="brand"
                      value={brand}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Brand"
                    />
                  </div>
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

            <div className="post-item-description-panel">
              <h3>Description</h3>
              <textarea
                id="description"
                value={description}
                onChange={this.handleChange}
                type="text"
                placeholder="Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc"
              />
            </div>
            <div className="post-item-payment-panel">
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

            <div className="post-item-image-panel">
              <h3>Photos</h3>
              <div className="post-item-images">
                <div className="post-header-image">
                  {/* <img src={tempIMG} alt="white t shirt" /> */}
                </div>
                <div className="post-item-item-upload-form">
                  <input className="image-input" encType="multipart/form-data" type="file" name="item-images" onChange={this.imageHandler}/>
                </div>
              </div>
            </div>

            <div className="post-conditional-signal" >
              {
                (price === '')
                  ? <div className="post-signal">Missing Price Field</div>
                  : null 
              }
              {
                (shipping_price) === ''
                  ? <div className="post-signal">Missing Shipping Price Field</div>
                  : null
              }
              {
                (brand) === ''
                  ? <div className="post-signal">Missing Shipping Brand Field</div>
                  : null
              }
              {
                (title) === ''
                  ? <div className="post-signal">Missing Title Field</div>
                  : null
              }
              {
                (description) === ''
                  ? <div className="post-signal">Missing Description Field</div>
                  : null
              }
              {
                (category) === ''
                  ? <div className="post-signal">Missing Category Field</div>
                  : null
              }
              {
                (size) === ''
                  ? <div className="post-signal">Missing Size Field</div>
                  : null
              }
              {
                (color) === ''
                  ? <div className="post-signal">Missing Color Field</div>
                  : null
              }

              {/* Render upon request failure */}
              {
                (error && error.message) 
                  ? <div className="post-error-signal">{error.message}</div>
                  : null
              }

              {/* Render upon successful response */}
              {
                (successResponse && successResponse.data.message)
                 ? <div className="post-success-signal">{successResponse.data.message}</div>
                 : null
              }
            </div>

            <div className="post-item-form-button">
              {/* <button value="submit" disabled={isInvalid}>Post Item</button> */}
              <button value="submit" >Post Item</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostItem;