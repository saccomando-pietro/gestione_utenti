import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Trigger effetto");
    getUsers();
  }, []);

  console.log("Log durante rendering");

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return {users, getUsers};
};