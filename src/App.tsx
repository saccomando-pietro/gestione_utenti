import { useEffect, useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import Toolbar from "./components/Toolbar";
import {PROJECTS_API_URL} from "./utils/api";

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    console.log("Trigger effetto");
    getProjects();
  }, []);
  const getProjects = async() => {
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
  }

  console.log(projects)

  return (
    <div className="app">
      <Toolbar />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
