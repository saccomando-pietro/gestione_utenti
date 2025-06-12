import { useState } from "react";
import UpdateUser from "./UpdateUser";

const UserList = () => {
  const users = ["ciao", "Pietro"];
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <div className="user-list">
        {users.map((user, index) => (
          <p key={index}>
            {user} <button onClick={() => setSelectedUser(user)}>Modifica</button>
          </p>
        ))}
      </div>

      {selectedUser && (
        <UpdateUser 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </>
  );
};

export default UserList;
