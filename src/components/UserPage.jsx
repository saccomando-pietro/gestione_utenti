import AddUser from "./AddUser";
import UserList from "./UserList";
import "../App.css";

const UserPage = () => {
  const API_URL = "http://localhost:8090/users";

  return (
    <div className="main-container">
      <h1>Gestione utenti</h1>
      <AddUser url={API_URL} />
      <UserList url={API_URL} />
    </div>
  );
};

export default UserPage;
