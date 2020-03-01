import React from "react";
import Activity from "./Activity";

const ActivityTable = props => {
  const activityList = props.activities.map((el, index) => {
    return <Activity key={index} element={el} />;
  });
  return <div className="activity-table">{activityList}</div>;
};

export default ActivityTable;
