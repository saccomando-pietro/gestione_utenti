import React from "react";
import TimelineBar from "./TimelineBar";

const ActivityRow = ({ activity }) => (
  <div className="activity-row">
    <div className="icons">
      <span>✏️</span>
      <span>🔍</span>
      <span>✅</span>
    </div>
    <div className="name">{activity.name}</div>
    <TimelineBar start={activity.startDate} duration={activity.duration}/>
  </div>
);

export default ActivityRow;