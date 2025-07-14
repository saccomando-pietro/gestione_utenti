import { useNavigate } from "react-router-dom";

const ProjectList = ({ url, projects, getProjects}) => {
  const navigate = useNavigate();

  const deleteProject = async (project) => {
    try {
      await fetch(`${url}/${project.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Errore: ", error);
    }
    getProjects();
  };

  return (
    <>
      <div className="user-list">
        {projects.map((project, index) => (
          <div className="user-card" key={index}>
            <h3>
              {project.code}
            </h3>
            <p>
              <strong>Nome:</strong> {project.name}
              <br />
              <strong>Descrizione:</strong> {project.description}
              <br />
              <strong>Durata:</strong> {project.duration}
              <br />
              <strong>Stato:</strong> {project.state}
            </p>
            <div className="user-row-btn">
              <button className="modBtn" onClick={() => navigate(`/projects/update/${project.id}`)}>
                Modifica
              </button>
              <button className="dltBtn" onClick={() => deleteProject(project)}>
                Elimina
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default ProjectList;
