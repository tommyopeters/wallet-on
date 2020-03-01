import React from "react";

const Activity = props => {
  return (
    <div className="activity-item">
      <div className="activity-item-icon">
        <i className={props.element.icon}></i>
      </div>
      <div className="activity-item-details">
        <div className="activity-item-name">{props.element.name}</div>
        <div className="activity-item-status">
          <span className={`${props.element.status}`}>
            {props.element.status}
          </span>
          <span className="date">{props.element.date}</span>
        </div>
      </div>
      <div className="activity-item-value">
        <div
          className={`activity-item-value-ron ${
            props.element.positive ? "positive" : null
          }`}
        >
          {props.element.ron} RON
        </div>
        <div className="activity-item-value-currency">
          {props.element.nativeValue} {props.element.nativeCurrency}
        </div>
      </div>
    </div>
  );
};

export default Activity;
