import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserForm } from "../../hooks/useUserForm";

const UpdateUser = ({ url }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    email,
    setEmail,
    profile,
    setProfile,
    dailyHours,
    setDailyHours,
  } = useUserForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(url, id);
  }, [url, id]);

  const getUser = async (url, id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      if (data) {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setUsername(data.username);
        setEmail(data.email);
        setProfile(data.profile);
        setDailyHours(data.dailyHours);
      }
    } catch (error) {
      console.error("Errore: ", error);
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();
    navigate("/users");
    let item = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      profile: profile.value,
      dailyHours: dailyHours.value,
    };
    try {
      await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="user-form">
      <h2>Aggiorna utente</h2>
      <form onSubmit={updateUser}>
        <div className="input-user-form">
          <input {...firstName} />
          <input {...lastName} />
          <input {...username} />
          <input {...email} />
          <select {...profile}>
            <option value="" disabled selected>
              -- Seleziona un profilo --
            </option>
            <option value="PM">Project Manager</option>
            <option value="JD">Junior Developer</option>
            <option value="RT">Responsabile Tecnico</option>
          </select>
          <input {...dailyHours} />
        </div>
        <button className="formBtn" type="submit">
          Aggiorna
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
