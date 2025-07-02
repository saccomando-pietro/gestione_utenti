import { useEffect, useState } from "react";
import {API_URL} from "../utils/api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Trigger effetto");
    getUsers();
  }, []);

  console.log("Log durante rendering");

  const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data) {
        setUsers(data.content);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return { users, getUsers };
};
