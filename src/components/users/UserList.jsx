
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
              {user.firstName} {user.lastName}
            </h3>
            <p>
              <strong>Username:</strong> {user.username}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Profilo:</strong> {user.profile}
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
