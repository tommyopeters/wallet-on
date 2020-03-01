import React, { useState } from "react";
import Header from "./Header";
import BalanceCards from "./BalanceCards";

import GraphLine from "../assets/graph-line.png";
import Activities from "../assets/activities.json";
import ActivityTable from "./ActivityTable";

import ProfilePicOne from "../assets/profile-pic-1.jpg";
import ProfilePicTwo from "../assets/profile-pic-2.jpg";
import ProfilePicThree from "../assets/profile-pic-3.jpg";
import ProfilePicFour from "../assets/profile-pic-4.jpg";
import ProfilePicFive from "../assets/profile-pic-5.jpg";

const Overview = () => {
  const [activities, setActivities] = useState(Activities);

  const addActivities = () => {
    if (activities.length < 6) {
      setActivities([...activities, ...activities]);
    }
  };
  return (
    <main className="overview">
      <Header page="Overview" />
      <section className="balances">
        <div className="balances-header">
          <h3>Balances</h3>
          <div className="current-week">
            <i className="far fa-calendar"></i> Current week
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="balances-body">
          <BalanceCards
            name="DE89 3704 0044 0532 0130 00"
            value="2,560.50"
            currency="EUR"
            change="+40"
            graph={GraphLine}
          />
          <BalanceCards
            name="RO73 BUCU 0623 0545 0883 EUR"
            value="260.50"
            currency="EUR"
            change="-15"
            graph={GraphLine}
          />
          <BalanceCards
            name="RO41 BUCU O623 4675 6450 RON"
            value="12,560.50"
            currency="RON"
            change="+250"
            graph={GraphLine}
          />
        </div>
      </section>
      <section className="account">
        <section className="money">
          <div className="debit-cards">
            <div className="container">
              <div className="bottom-layer">
                <div className="dashed-outline">
                  <div className="blue-gradient"></div>
                  <div className="text">
                    <span className="card-name">DEBIT CARDS</span>
                    <span className="visa-logo"></span>
                  </div>
                </div>
              </div>
              <div className="top-layer">
                <div className="green-gradient"></div>
              </div>
            </div>
          </div>
          <div className="send-money">
            <h3>Send Money To</h3>
            <div className="user-list">
              <div className="user-list-item">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="user-list-item">
                <img src={ProfilePicOne} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicTwo} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicThree} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicFour} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicFive} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicThree} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicFour} alt="" />
              </div>
              <div className="user-list-item">
                <img src={ProfilePicOne} alt="" />
              </div>
              <span>+12 more</span>
            </div>
          </div>
        </section>
        <section className="activity">
          <div className="top-section">
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <h3>Activity</h3>
          <ActivityTable activities={activities} />
          <div className="load-more" onClick={addActivities}>
            <span>Load more</span>
          </div>
        </section>
      </section>
    </main>
  );
};
export default Overview;
