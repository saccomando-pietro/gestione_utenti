import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import { PROJECTS_API_URL } from "./utils/api";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("Trigger effetto");
    getProjects();
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

  console.log(projects);

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default App;
