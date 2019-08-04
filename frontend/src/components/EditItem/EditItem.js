import React from 'react';
import axios from 'axios';
import { getItems, updateItem, updateItemImage } from '../../Helpers/prodEndpoints';
import './EditItem.css';

class EditItem extends React.Component {
  constructor() {
    super();
    this.state = {
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

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(getItems(id))
      .then(response => {
        console.log(response.data);
        const { price, shipping_price, brand, title, description, category, size, color, location, image_id } = response.data;
        this.setState({ 
          price,
          shipping_price,
          brand,
          title,
          description,
          category,
          size,
          color,
          location,
          image_id,
        });
      })
  }

  handleSubmit = (event) => {
    const { id } = this.props.match.params;

    const { price, shipping_price, brand, title, description, category, size, color } = this.state;
    const body = {
      price,
      shipping_price,
      brand,
      title,
      description,
      category,
      size,
      color,
    };
    
    axios.put(updateItem(id), body)
    .then(res => {
      this.submitNewPicture()
      this.setState({
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
    event.preventDefault();
  }
  
  imageHandler= (event) =>{
    this.setState({ selectedImages: event.target.files[0] });
  }
  
  submitNewPicture = () => {
    console.log('submitNewPicture()');
    const { image_id } = this.state;

    const data = new FormData();
    data.append('item-images', this.state.selectedImages);
    axios.put(updateItemImage(image_id), data)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  }

  render() {
    const { price, shipping_price, brand, title, description, category, size, color, error, successResponse } = this.state;

    return (
      <div className="edit-item-container">
        <h1>edit Item</h1>
        <div className="edit-item-panel">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="edit-item-detail-panel">
              <h3>Details</h3>
              <div className="edit-item-details">
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
                      <option value={color} defaultValue> {color} </option>
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
                      <option value={category} defaultValue>{category}</option>
                      <option value={'tops'}> Tops </option>
                      <option value={'bottoms'}> Bottoms </option>
                      <option value={'footwear'}> Footwear </option>
                      <option value={'outerwear'}> Outerwear </option>
                      <option value={'accessories'}> Accessories </option>
                    </select>
                  </div>
                  <div className="">
                    <select
                    id='size'
                    onChange={this.handleChange}
                    >
                      <option value={size} defaultValue>{size}</option>
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

            <div className="edit-item-description-panel">
              <h3>Description</h3>
              <textarea
                id="description"
                value={description}
                onChange={this.handleChange}
                type="text"
                placeholder="Retail Price, Condition, Measurements, Shipping Policy, Link to Retail Page, etc"
              />
            </div>
            <div className="edit-item-payment-panel">
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

            <div className="edit-item-image-panel">
              <h3>Photos</h3>
              <div className="edit-item-images">
                <div className="edit-header-image">
                  {/* <img src={tempIMG} alt="white t shirt" /> */}
                </div>
                <div className="edit-item-item-upload-form">
                  <input className="image-input" encType="multipart/form-data" type="file" name="item-images" onChange={this.imageHandler}/>
                </div>
              </div>
            </div>


              {/* Render upon request failure */}
              {
                (error && error.message) 
                  ? <div className="edit-error-signal">{error.message}</div>
                  : null
              }

              {/* Render upon successful response */}
              {
                (successResponse && successResponse.data.message)
                 ? <div className="edit-success-signal">{successResponse.data.message}</div>
                 : null
              }

            <div className="edit-item-form-button">
              <button value="submit" >Update Item</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditItem;