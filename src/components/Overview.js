import React from "react";
import Header from "./Header";

const Overview = () => {
  return (
    <main className="main">
      <Header page="Overview" />
      <section className="balances">
        <div className="balances-header">
          <h3>Balances</h3>
          <div className="current-week">
            <i className="far fa-calendar"></i>Current Week
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="balances-content"></div>
      </section>
      <section className="debit-activity">
        <div className="debit-cards"></div>
        <div className="send-money"></div>
        <div className="activity">
          <div className="activity-header">
            <h3>Activity</h3>
            <div className="ellipsis">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Overview;
