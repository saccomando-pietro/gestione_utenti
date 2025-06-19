import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserForm } from "../hooks/useUserForm";

const UpdateUser = ({url}) => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(url, id);
  }, [url, id]);


  const getUser = async (url, id) =>{
    try{
      const response = await fetch(`${url}/${id}`);
      const data= await response.json();
      if(data){
        setNome(data.nome)
        setCognome(data.cognome)
        setMail(data.mail)
        setProfilo(data.profilo)
        setOrario(data.orarioGiornaliero)
      }

    }catch(error){
      console.error("Errore: ", error)
    }
  }

  const updateUser = async (event) => {
    event.preventDefault();
    navigate("/users")
    let item = { nome, cognome, mail, profilo, orarioGiornaliero };
    try {
      await fetch(`${props.url}/${id}`, {
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
    <div className="update-user">
      <h2>Aggiorna utente</h2>
      <form onSubmit={updateUser}>
        <div className="update-user-form">
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            name="cognome"
            id="cognome"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
          />
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <select
            name="profilo"
            id="profilo"
            required
            value={profilo}
            onChange={(e) => setProfilo(e.target.value)}
          >
            <option value="" disabled selected>
              -- Seleziona un profilo --
            </option>
            <option value="PM">Project Manager</option>
            <option value="JD">Junior Developer</option>
            <option value="RT">Responsabile Tecnico</option>
          </select>
          <input
            type="text"
            name="orarioGiornaliero"
            id="orario"
            placeholder="Orario"
            value={orarioGiornaliero}
            onChange={(e) => setOrario(e.target.value)}
          />
        </div>
        <button className="updBtn" type="submit">
          Aggiorna
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
