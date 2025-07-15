
const ProjectList = ({ projects, onSelect, selectedProjectId }) => {
  return (
    <div className="sidebar">
      <h2>Progetti</h2>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => onSelect(project.id)}
            className={project.id === selectedProjectId ? "selected" : ""}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
