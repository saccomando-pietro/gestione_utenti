import React from "react";
import TimelineHeader from "./TimelineHeader";

const months = [
  "Gennaio", "Febbraio", "Marzo", "Aprile",
  "Maggio", "Giugno", "Luglio", "Agosto",
  "Settembre", "Ottobre", "Novembre", "Dicembre"
];

const TimelineBar = ({ start, duration }) => {
  const startIndex = months.indexOf(start);
  const left = startIndex >= 0 ? startIndex * 20 : 0;
  const width = (duration) * 20;

  return (
    <div className="bar-container">
      <TimelineHeader />
      <div
        className="bar"
        style={{ left: `${left}px`, width: `${width}px` }}
      ></div>
    </div>
  );
};

export default TimelineBar;