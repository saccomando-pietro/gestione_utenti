import AddUser from "./AddUser";
import UserList from "./UserList";

const UserPage = () => {
  return (
    <>
      <h1>Gestione utenti</h1>
      <AddUser />
      <UserList />
    </>
  );
};

export default UserPage;
