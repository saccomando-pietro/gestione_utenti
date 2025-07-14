import "../../App.css";
import { useProjects } from "../../hooks/useProjects";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

const ProjectPage = ({ url }) => {
  const { projects, getProjects } = useProjects();
  return (
    <div className="main-container">
      <h1>Gestione Progetti</h1>
      <AddProject url={url} getProjects={getProjects} />
      <ProjectList url={url} projects={projects} getProjects={getProjects} />
    </div>
  );
};

export default ProjectPage;
