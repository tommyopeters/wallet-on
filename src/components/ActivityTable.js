import React from "react";
import Activity from "./Activity";

const ActivityTable = props => {
  const activityList = props.activities.map(el => {
    return <Activity element={el} />;
  });
  return <div className="activity-table">{activityList}</div>;
};

export default ActivityTable;
