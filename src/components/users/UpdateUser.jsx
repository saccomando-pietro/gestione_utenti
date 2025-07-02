import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserForm } from "../../hooks/useUserForm";

const UpdateUser = ({ url }) => {
  const {
    nome,
    setNome,
    cognome,
    setCognome,
    username,
    setUsername,
    mail,
    setMail,
    profilo,
    setProfilo,
    orarioGiornaliero,
    setOrario,
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
        setNome(data.nome);
        setCognome(data.cognome);
        setUsername(data.username);
        setMail(data.mail);
        setProfilo(data.profilo);
        setOrario(data.orarioGiornaliero);
      }
    } catch (error) {
      console.error("Errore: ", error);
    }
  };

  const updateUser = async (event) => {
    event.preventDefault();
    navigate("/users");
    let item = {
      nome: nome.value,
      cognome: cognome.value,
      username: username.value,
      mail: mail.value,
      profilo: profilo.value,
      orarioGiornaliero: orarioGiornaliero.value,
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
          <input {...nome} />
          <input {...cognome} />
          <input {...username} />
          <input {...mail} />
          <select {...profilo}>
            <option value="" disabled selected>
              -- Seleziona un profilo --
            </option>
            <option value="PM">Project Manager</option>
            <option value="JD">Junior Developer</option>
            <option value="RT">Responsabile Tecnico</option>
          </select>
          <input {...orarioGiornaliero} />
        </div>
        <button className="formBtn" type="submit">
          Aggiorna
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
