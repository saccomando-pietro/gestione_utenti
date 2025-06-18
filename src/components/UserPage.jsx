import AddUser from "./AddUser";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import "../App.css";

const UserPage = ({url}) => {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    console.log("Trigger effetto")
    getUsers();
  }, []);
  
console.log("Log durante rendering")
  
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

  return (
    <div className="main-container">
      <h1>Gestione utenti</h1>
      <AddUser url={url} getUsers={getUsers}/>
      <UserList url={url} users={users} getUsers={getUsers}/>
    </div>
  );
};

export default UserPage;
