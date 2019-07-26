import React from 'react';
import axios from 'axios';
import { getItems } from '../Helpers/devEndpoints';

export default function (Component) {
  return class Categorized extends React.Component {
    constructor() {
      super();
      this.state = {
        items: []
      }
    } 

    componentDidMount() {
      axios.get(getItems())
        .then(({ data }) => {
          this.setState({ items: data });
        })
        .catch(err => {
          console.error( `Error ${err} `);
        });
    }

    render() {
      const { items } = this.state;
      const { id } = this.props.match.params;
      console.log('w/Cat State', items);
      console.log('param id', id);

      if (id == "accessories") {        
        const filtered = items.filter((item) => item.category == 'accessory');

        return <Component {...this.props} items={filtered} title={"Accessories"}/>
      }

      if (id == "outerwear") {
        const filtered = items.filter((item) => item.category == 'outerwear');
        
        return <Component {...this.props} items={filtered} title={"Outerwear"}/>
      }

      if (id == "tops") {
        const filtered = items.filter((item) => item.category == 'tops');
        
        return <Component {...this.props} items={filtered} title={"Tops"}/>
        
      }

      if (id == "bottoms") {
        const filtered = items.filter((item) => item.category == 'bottoms');
        
        return <Component {...this.props} items={filtered} title={"Bottoms"}/>
      }

      if (id == "footwear") {
        const filtered = items.filter((item) => item.category == 'footwear');
        
        return <Component {...this.props} items={filtered} title={"Footwear"}/>
      }

      if (id == "deals") {
        const filtered = items.filter((item) => item.price <= 200);
        
        return <Component {...this.props} items={filtered} title={"Deals Under $200"}/>
      }

      return <Component {...this.props} items={items} title={"Browse The Feed"} />
    }
  }
}