import React, { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8090/users";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profile: "",
  });
  const [userProfile, setUserProfile] = useState({});

  const fetchUsers = async () => {
    const res = await fetch(API_BASE_URL);
    const data = await res.json();
    setUsers(data);
  };

  const fetchUser = async (userId) => {
    const res = await fetch(`${API_BASE_URL}/${userId}`);
    const data = await res.json();
    setSelectedUser(data);
    setEditedUser(data);
    setUserProfile({ profile: data.profile });
  };

  const addUser = async () => {
    await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    setNewUser({ firstName: "", lastName: "", email: "", profile: "" });
    fetchUsers();
  };

  const deleteUser = async (userId) => {
    await fetch(`${API_BASE_URL}/${userId}`, { method: "DELETE" });
    setSelectedUser(null);
    setEditedUser(null);
    fetchUsers();
  };

  const updateUserProfile = async () => {
    if (!selectedUser) return;

    await fetch(`${API_BASE_URL}/${selectedUser.id}/profile`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfile.profile),
    });

    fetchUser(selectedUser.id);
    fetchUsers();
  };

  const updateUser = async () => {
    if (!editedUser) return;

    await fetch(`${API_BASE_URL}/${editedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedUser),
    });

    setSelectedUser(editedUser);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main-contanier">
      <h1>Gestione Utenti</h1>

      <div className="add-user">
        <h2>Aggiungi Nuovo Utente</h2>
        <input
          type="text"
          placeholder="Nome"
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Cognome"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Profile"
          value={newUser.profile}
          onChange={(e) => setNewUser({ ...newUser, profile: e.target.value })}
        />
        <div>
          <button type="submit" onClick={addUser}>Aggiungi</button>
        </div>
      </div>

      <div className="user-list">
        <h2>Lista Utenti</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.firstName} {user.lastName} - {user.email} - {user.profile}
              <button onClick={() => fetchUser(user.id)}>Dettagli</button>
              <button onClick={() => deleteUser(user.id)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedUser && editedUser && (
        <div className="update-user">
          <h2>
            Modifica Utente {selectedUser.firstName} {selectedUser.lastName}
          </h2>

          <div className="update-all-user">
            <input
              type="text"
              placeholder="Nome"
              value={editedUser.firstName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, firstName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Cognome"
              value={editedUser.lastName}
              onChange={(e) =>
                setEditedUser({ ...editedUser, lastName: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Profile"
              value={editedUser.profile}
              onChange={(e) =>
                setEditedUser({ ...editedUser, profile: e.target.value })
              }
            />
            <button onClick={updateUser}>Aggiorna Utente</button>
          </div>

          <div className="update-user-profile">
            <h3>Aggiorna solo Profilo</h3>
            <input
              type="text"
              placeholder="Titolo lavorativo"
              value={userProfile.profile || ""}
              onChange={(e) =>
                setUserProfile({ ...userProfile, profile: e.target.value })
              }
            />
            <button onClick={updateUserProfile}>Aggiorna Profilo</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
