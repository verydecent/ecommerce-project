import React from 'react';
import './SubNavigation.css';

function SubNavigation() {
  return (
    <div className="sub-navigation">
      <div className="sub-navigation-contents">
        <div className="sub-nav-header">
          <h4>Item Categories</h4>
        </div>
        <div className="sub-nav-spacer"></div>

        <ul className="main-nav">
          <li>
            <a>All Items</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubNavigation;