import { useEffect, useState } from "react";
import {PROJECTS_API_URL} from "../utils/api";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    console.log("Trigger effetto");
    getProjects();
  }, []);

  console.log("Log durante rendering");

  const getProjects = async () => {
    try {
      const response = await fetch(PROJECTS_API_URL);
      const data = await response.json();
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return { projects, getProjects };
};
