import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SideNav extends Component {
  state = {
    expanded: true
  };
  render() {
    return (
      <div
        className={`sidenav ${this.state.expanded ? "expanded" : "collapsed"}`}
      >
        <div className="logo">
          <div className="logo-image"></div>
          <div className="logo-name">
            <span className="wallet">wallet.</span>
            <span className="on">on</span>
          </div>
        </div>
        <ul className="nav-list">
          <NavLink
            to="/overview"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item active">
              <div className="nav-list-item-icon">
                <div className="four-squares">
                  <div className="square1"></div>
                  <div className="square2"></div>
                  <div className="square3"></div>
                  <div className="square4"></div>
                </div>
              </div>
              <div className="nav-list-item-name">Overview</div>
            </li>
          </NavLink>
          <NavLink
            to="/activity"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <div className="triple-bars">
                  <span className="triple-bars-1"></span>
                  <span className="triple-bars-2"></span>
                  <span className="triple-bars-3"></span>
                </div>
              </div>
              <div className="nav-list-item-name">Activity</div>
              <div className="nav-list-item-notification">2</div>
            </li>
          </NavLink>
          <NavLink
            to="/balances"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <div className="nav-list-item-name">Balances</div>
            </li>
          </NavLink>
          <NavLink
            to="debit-cards"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="far fa-credit-card"></i>
              </div>
              <div className="nav-list-item-name">Debit Cards</div>
            </li>
          </NavLink>
          <NavLink
            to="history"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="fas fa-history"></i>
              </div>
              <div className="nav-list-item-name">History</div>
            </li>
          </NavLink>
          <NavLink
            to="recipients"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="fas fa-user"></i>
              </div>
              <div className="nav-list-item-name">Recipients</div>
            </li>
          </NavLink>
          <NavLink
            to="invite"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="nav-list-item-name">Invite</div>
            </li>
          </NavLink>
          <NavLink
            to="settings"
            className="nav-list-link"
            activeClassName="nav-list-active"
          >
            <li className="nav-list-item">
              <div className="nav-list-item-icon">
                <i className="fas fa-cog"></i>
              </div>
              <div className="nav-list-item-name">Settings</div>
            </li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
