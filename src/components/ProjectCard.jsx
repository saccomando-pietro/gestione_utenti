import React from "react";
import ActivityRow from "./ActivityRow";
import TimelineHeader from "./TimelineHeader";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-title">Progetto</div>
    {project.tasks.map((activity) => (
      <ActivityRow key={activity.id} activity={activity} />
    ))}
    <button className="new-activity-button">+ Nuova attività</button>
  </div>
);

export default ProjectCard;