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
    console.log('category', this.state.category);
    const { price, shipping_price, title, description, category, size, color } = this.state;
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
                      <option value="" disabled selected> Color </option>
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
                      <option value="" disabled selected>Category</option>
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
                      <option value="" disabled selected>Size</option>
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
                      <option value={'7'}> 7 </option>
                      <option value={'8'}> 8 </option>
                      <option value={'9'}> 9 </option>
                      <option value={'10'}> 10 </option>
                      <option value={'11'}> 11 </option>
                      <option value={'12'}> 12 </option>
                      <option value={'13'}> 13 </option>
                      <option value={'14'}> 14 </option>
                      <option value={'15'}> 15 </option>
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