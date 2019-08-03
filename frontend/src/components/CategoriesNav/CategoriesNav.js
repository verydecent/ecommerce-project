import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoriesNav.css';

function CategoriesNav() {
  return (
    <div className="categories-nav">
      <NavLink className="cat__nav__link" to="/item-feed/accessories">Accessories</NavLink>
      <NavLink className="cat__nav__link" to="/item-feed/outerwear">Outerwear</NavLink>
      <NavLink className="cat__nav__link" to="/item-feed/tops">Tops</NavLink>
      <NavLink className="cat__nav__link" to="/item-feed/bottoms">Bottoms</NavLink>
      <NavLink className="cat__nav__link" to="/item-feed/footwear">Footwear</NavLink>
      <NavLink className="cat__nav__link" to="/item-feed/deals">Deals Under $200</NavLink>
    </div>
  );
}

export default CategoriesNav;