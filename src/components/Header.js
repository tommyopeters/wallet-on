import React from "react";

const Header = props => {
  return (
    <section className="header">
      <div className="page-name">{props.page}</div>
      <ul className="header-menu">
        <li className="header-menu-item">
          <div className="menu-addition">
            <div className="menu-addition-container">+</div>
          </div>
        </li>
        <li className="header-menu-item">
          <div className="search">
            <i className="fas fa-search"></i>
          </div>
        </li>
        <li className="header-menu-item">
          <div className="notification">
            <i className="far fa-bell"></i>
            <div className="notification-counter">4</div>
          </div>
        </li>
        <li className="header-menu-item">
          <div className="profile">
            <img src="" alt="" />
            <i className="fas fa-angle-down"></i>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Header;
