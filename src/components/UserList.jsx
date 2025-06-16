import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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
    getUsers();
  };

  return (
    <>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>
              {user.nome} {user.cognome}
            </h3>
            <p>
              <strong>Email:</strong> {user.mail}
              <br />
              <strong>Profilo:</strong> {user.profilo}
            </p>
            <div className="user-row-btn">
              <button className="modBtn" onClick={() => navigate(`/users/update/${user.id}`)}>
                Modifica
              </button>
              <button className="dltBtn" onClick={() => deleteUser(user)}>
                Elimina
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default UserList;
