import AddUser from "./AddUser";
import UserList from "./UserList";
import { useUsers } from "../../hooks/useUsers";
import "../../App.css";

const UserPage = ({ url }) => {
  const { users, getUsers } = useUsers();
  return (
    <div className="main-container">
      <h1>Gestione utenti</h1>
      <AddUser url={url} getUsers={getUsers} />
      <UserList url={url} users={users} getUsers={getUsers} />
    </div>
  );
};

export default UserPage;
