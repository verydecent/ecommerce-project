import React from 'react';
import './SubNavigation.css';

function SubNavigation() {
  return (
    <div className="sub-navigation">
      <div className="sub-navigation-contents">

      <div className="sub-nav-spacer"></div>

        <div className="sub-nav-header">
          <h4>Categories</h4>
        </div>

        <div className="sub-nav-spacer"></div>

        <ul className="main-nav">
          
          <li>
            <a href="">All Items</a>
          </li>

          <li>
            <a href="">Accessories</a>
            <ul>
              <li>
                <a href=""> - Bags </a>
              </li>
              <li>
                <a href=""> - Hats </a>
              </li>
              <li>
                <a href=""> - Belts </a>
              </li>
              <li>
                <a href=""> - Underwear </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="Accessories">Clothing</a>
            <ul>
              <li>
                <a href=""> - T Shirts </a>
              </li>
              <li>
                <a href=""> - Long Sleeve Shirts </a>
              </li>
              <li>
                <a href=""> - Jackets </a>
              </li>
              <li>
                <a href=""> - Pants </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="Accessories">Shoes</a>
            <ul>
              <li>
                <a href=""> - Boots </a>
              </li>
              <li>
                <a href=""> - Sandals </a>
              </li>
              <li>
                <a href=""> - Running </a>
              </li>
              <li>
                <a href=""> - Derbies </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="Accessories">Grooming</a>
            <ul>
              <li>
                <a href=""> - Perfume </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="Accessories">Sport</a>
            <ul>
              <li>
                <a href=""> - Hike</a>
              </li>
              <li>
                <a href=""> - Basketball</a>
              </li>
              <li>
                <a href=""> - Soccer</a>
              </li>
              <li>
                <a href=""> - Golf</a>
              </li>
              <li>
                <a href=""> - Tennis</a>
              </li>
            </ul>
          </li>

        </ul>

        <div className="sub-nav-spacer"></div>

        <div className="sub-nav-header">
          <h4>Colour</h4>
        </div>

        <div className="colour-filter">
          <ul>
            <li>
              <a>Black</a>
            </li>
            <li>
              <a>Blue</a>
            </li>
            <li>
              <a>Brown</a>
            </li>
            <li>
              <a>Burgundy</a>
            </li>
            <li>
              <a>Gray</a>
            </li>
            <li>
              <a>Green</a>
            </li>
            <li>
              <a>Orange</a>
            </li>
            <li>
              <a>Pink</a>
            </li>
            <li>
              <a>Red</a>
            </li>
            <li>
              <a>White</a>
            </li>
            <li>
              <a>Yellow</a>
            </li>
          </ul>
        </div>

        <div className="sub-nav-spacer"></div>

        <div className="sub-nav-header">
          <h4>Designer</h4>
        </div>
        <div className="designer-filter">
        <ul>
            <li>
              <a>Adidas</a>
            </li>
            <li>
              <a>APC</a>
            </li>
            <li>
              <a>Arcteryx</a>
            </li>
            <li>
              <a>Church's</a>
            </li>
            <li>
              <a>Jordan</a>
            </li>
            <li>
              <a>Lacoste</a>
            </li>
            <li>
              <a>Levi's</a>
            </li>
            <li>
              <a>Nike</a>
            </li>
            <li>
              <a>Stone Island</a>
            </li>
            <li>
              <a>Supreme</a>
            </li>
            <li>
              <a>Visvim</a>
            </li>
          </ul>
        </div>

        <div className="sub-nav-spacer"></div>

      </div>
    </div>
  );
}

export default SubNavigation;