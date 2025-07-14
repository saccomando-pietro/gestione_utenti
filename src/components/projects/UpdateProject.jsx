import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectForm } from "../../hooks/useProjectForm";

const UpdateProject = ({ url }) => {
  const {
    code,
    setCode,
    name,
    setName,
    description,
    setDescription,
    startDate,
    setStartDate,
    duration,
    setDuration,
    manager,
    setManager,
    state,
    setState
  } = useProjectForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProjects(url, id);
  }, [url, id]);

  const getProjects = async (url, id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      if (data) {
        setCode(data.code);
        setName(data.name);
        setDescription(data.description);
        setStartDate(data.startDate);
        setDuration(data.duration);
        setManager(data.manager);
        setState(data.state);
      }
    } catch (error) {
      console.error("Errore: ", error);
    }
  };

  const updateProject = async (event) => {
    event.preventDefault();
    navigate("/projects");
    let item = {
      code: code.value,
      name: name.value,
      description: description.value,
      startDate: startDate.value,
      duration: duration.value,
      manager: manager.value,
      state: state.value,
    };
    try {
      await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="user-form">
      <h2>Aggiorna progetto</h2>
      <form onSubmit={updateProject}>
        <div className="input-user-form">
          <input {...code} />
          <input {...name} />
          <input {...description} />
          <input {...startDate} />
          <input {...duration} />
          <input {...manager} />
          <select {...state}>
            <option value="" disabled selected>
              -- Seleziona uno stato --
            </option>
            <option value="OPEN">OPEN</option>
            <option value="CLOSED">CLOSED</option>
            <option value="DELETED">DELETED Tecnico</option>
          </select>
        </div>
        <button className="formBtn" type="submit">
          Aggiorna
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
