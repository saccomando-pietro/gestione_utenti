import "../App.css";
import { useState } from "react";
import ProjectList from "./ProjectList";
import { projects, tasks } from "../data/mockData";
import TaskList from "./TaskList";

const Home = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const filteredTasks = tasks.filter((task) => task.projectId === selectedProjectId);

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
