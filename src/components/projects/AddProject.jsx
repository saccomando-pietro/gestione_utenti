import { useProjectForm } from "../../hooks/useProjectForm";

const AddProject = ({ url, getProjects }) => {
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

  const reset = () => {
    setCode("");
    setName("");
    setDescription("");
    setStartDate("");
    setDuration("");
    setManager("");
    setState("");
  };

  const addProject = async (event) => {
    event.preventDefault();
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
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      getProjects();
      reset();
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="user-form">
      <h2>Aggiungi progetto</h2>
      <form onSubmit={addProject}>
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
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default AddProject;
