import { useEffect, useState } from "react";
import UpdateUser from "./UpdateUser";
import UpdateUserProfile from "./UpdateUserProfile";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const refreshUsers = () => getUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(props.url);
      const data = await response.json();
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };
  
  const deleteUser = async (user) => {

    try {
      await fetch(`${props.url}/${user.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Errore: ", error);
    }
    getUsers()
  };


  return (
    <>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-row" key={index}>
            <p>
              {user.nome} {user.cognome}
            </p>
            <button onClick={() => setSelectedUser(user)}>Modifica</button>
            <button onClick={() => deleteUser(user)}>Elimina</button>

          </div>
        ))}
      </div>

      {selectedUser && (
        <>
          <UpdateUser
            user={selectedUser}
            url = {props.url}
            getUsers = {refreshUsers}
          />
          <UpdateUserProfile
            user={selectedUser}
          />
        </>
      )}
    </>
  );
};

export default UserList;
