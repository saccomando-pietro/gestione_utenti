import { useUserForm } from "../../hooks/useUserForm";
const AddUser = ({ url, getUsers }) => {
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

  const reset = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setProfile("");
    setDailyHours("");
  };

  const addUser = async (event) => {
    event.preventDefault();
    let item = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      profile: profile.value,
      dailyHours: dailyHours.value,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      getUsers();
      reset();
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="user-form">
      <h2>Aggiungi utente</h2>
      <form onSubmit={addUser}>
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
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default AddUser;
