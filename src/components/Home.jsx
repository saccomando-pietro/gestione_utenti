import "../App.css";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import TaskList from "./TaskList";
import { PROJECTS_API_URL, TASKS_API_URL } from "../utils/api";

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const filteredTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  const getProjects = async () => {
    try {
      const response = await fetch(PROJECTS_API_URL, {
        method: "GET",
        headers: {
          Authorization: "basic:dXNlcjpwYXNzd29yZA==",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };
  const getTasks = async () => {
    try {
      const response = await fetch(TASKS_API_URL);
      const data = await response.json();
      if (data) {
        setTasks(data);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  console.log("PROGETTI: ", projects);
  console.log("TASKS: ", tasks);

  return (
    <div className="app-container">
      <ProjectList
        projects={projects}
        onSelect={setSelectedProjectId}
        selectedProjectId={selectedProjectId}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Home;
