import React from "react";

const BalanceCards = props => {
  return (
    <div className="balance-card">
      <div className="top-section">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="transaction-name">{props.name}</div>
      <div className="transaction-details">
        <div className="transation-value">{props.value}</div>
        <div className="transaction-currency">{props.currency} </div>
        <div className="transaction-change">
          <div
            className={`percentage ${
              props.change > 0 ? "positive" : "negative"
            }`}
          >
            {props.change}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCards;
