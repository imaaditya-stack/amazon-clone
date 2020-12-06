import React from "react";
import "./style.css";

function MainNavbar() {
  return (
    <nav className="header">
      <div className="amazon-logo">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </div>
      <div className="search-box">
        <input type="text" className="w-100" />
        <i class="fa fa-search search-icon" aria-hidden="true"></i>
      </div>
      <div className="links">
        <div className="link_one">
          <span>Hello</span>
          <span>
            <b>Sign in</b>
          </span>
        </div>
        <div className="link_two">
          <span>Returns</span>
          <span>
            <b>& Orders</b>
          </span>
        </div>
        <div className="link_three">
          <span>Try</span>
          <span>
            <b>Prime</b>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
