import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";
class SideNav extends Component {
  state = {
    expanded: true
  };
  collapse = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  render() {
    return (
      <div
        className={`sidenav ${this.state.expanded ? "expanded" : "collapsed"}`}
      >
        <div className="logo">
          <div className="logo-icon">
            <img src={Logo} alt="logo" />
          </div>
          <div className="logo-text">
            <span className="wallet">wallet</span>
            <span className="on">.on</span>
          </div>
        </div>
        <ul className="main-nav">
          <NavLink
            to="/"
            exact
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <div className="four-square">
                  <div className="square square1"></div>
                  <div className="square square2"></div>
                  <div className="square square3"></div>
                  <div className="square square4"></div>
                </div>
              </div>
              <div className="main-nav-item-text">Overview</div>
            </li>
          </NavLink>
          <NavLink
            to="/activity"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <div className="menu-bars">
                  <div className="menu-bar menu-bar-1"></div>
                  <div className="menu-bar menu-bar-2"></div>
                  <div className="menu-bar menu-bar-3"></div>
                </div>
              </div>
              <div className="main-nav-item-text">Activity</div>
              <div className="notif-counter round">2</div>
            </li>
          </NavLink>
          <NavLink
            to="/balances"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <div className="main-nav-item-text">Balances</div>
            </li>
          </NavLink>
          <NavLink
            to="/debit-cards"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="far fa-credit-card"></i>
              </div>
              <div className="main-nav-item-text">Debit Cards</div>
            </li>
          </NavLink>
          <NavLink
            to="history"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="fas fa-history"></i>
              </div>
              <div className="main-nav-item-text">History</div>
            </li>
          </NavLink>
          <NavLink
            to="/recipients"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="main-nav-item-text">Recipients</div>
            </li>
          </NavLink>
          <NavLink
            to="/invite"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="main-nav-item-text">Invite</div>
            </li>
          </NavLink>
          <NavLink
            to="/settings"
            className="main-nav-link"
            activeClassName="active-link"
          >
            <li className="main-nav-item">
              <div className="main-nav-item-icon">
                <i className="fas fa-cog"></i>
              </div>
              <div className="main-nav-item-text">Settings</div>
            </li>
          </NavLink>
        </ul>
        <div className="sidenav-help">
          <NavLink
            to="/help"
            className="sidenav-help-link"
            activeClassName="active-link"
          >
            <div className="help">
              <div className="help-icon">
                <i className="far fa-comment-dots"></i>
              </div>
              <div className="help-text">Help?</div>
            </div>
          </NavLink>
          <div className="sidenav-collapse" onClick={this.collapse}>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
