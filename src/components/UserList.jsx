
import { useNavigate } from "react-router-dom";

const UserList = ({ url, users, getUsers}) => {
  const navigate = useNavigate();

  

  const deleteUser = async (user) => {
    try {
      await fetch(`${url}/${user.id}`, {
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
