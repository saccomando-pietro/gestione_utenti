import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectList;