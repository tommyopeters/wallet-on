import React from "react";
import Header from "./Header";
import BalanceCards from "./BalanceCards";

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
        <div className="balances-body">
          <BalanceCards
            name="DE89 3704 0044 0532 0130 00"
            value="2,560.50"
            currency="EUR"
            change="+40"
          />
          <BalanceCards
            name="RO73 BUCU 0623 0545 0883 EUR"
            value="260.50"
            currency="EUR"
            change="-15"
          />
          <BalanceCards
            name="RO41 BUCU O623 4675 6450 RON"
            value="12,560.50"
            currency="RON"
            change="+250"
          />
        </div>
      </section>
      <section className="account"></section>
    </main>
  );
};
export default Overview;
