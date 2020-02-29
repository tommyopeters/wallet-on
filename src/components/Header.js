import React from "react";

import ProfilePic from "../assets/profile-pic.jpg";

const Header = props => {
  return (
    <header className="header">
      <h1 className="page-name">{props.page}</h1>
      <div className="header-menu">
        <ul className="header-menu-list">
          <li className="header-menu-list-item">
            <div className="addition">
              <div className="addition-outline">+</div>
            </div>
          </li>
          <li className="header-menu-list-item">
            <div className="search">
              <i className="fas fa-search"></i>
            </div>
          </li>
          <li className="header-menu-list-item">
            <div className="notification">
              <i className="far fa-bell"></i>
              <div className="notification-counter">4</div>
            </div>
          </li>
          <li className="header-menu-list-item">
            <div className="profile">
              <div className="avatar">
                <img src={ProfilePic} alt="profile-pic" />
              </div>
              <i className="fas fa-angle-down"></i>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
