import React from "react";
import Header from "./Header";

const Overview = () => {
  return (
    <main>
      <Header page="Overview" />
      <section className="balances">
        <div className="balances-header">
          <h3>Balances</h3>
          <div className="current-week">
            <i class="far fa-calendar"></i> Current week
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Overview;
