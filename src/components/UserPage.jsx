import AddUser from "./AddUser";
import UserList from "./UserList";
import "../App.css";

const UserPage = (props) => {
  

  return (
    <div className="main-container">
      <h1>Gestione utenti</h1>
      <AddUser url={props.url} />
      <UserList url={props.url} />
    </div>
  );
};

export default UserPage;
