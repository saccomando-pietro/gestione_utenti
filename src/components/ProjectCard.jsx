const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-title">{project.name}</div>
    <div className="project-tasks">
      {project.tasks.map((task, index) => (
        <p key={index}>{task.name}</p>
      ))}
      <button className="new-activity-button">+ Nuova attività</button>
    </div>
  </div>
);

export default ProjectCard;
