import React from "react";

const Toolbar = () => (
  <div className="toolbar">
    <div className="left">
      <div className="logo"></div>
      <span className="title">Projects</span>
      <span className="subtitle">Workload</span>
    </div>
    <input type="text" placeholder="Cerca..." />
    <button>+ Progetto</button>
  </div>
);

export default Toolbar;