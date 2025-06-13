import { useState } from "react";
const AddUser = (props) => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [mail, setMail] = useState("");
  const [profilo, setProfilo] = useState("");
  const [orarioGiornaliero, setOrario] = useState("");

  const addUser = async (event) => {
    event.preventDefault();
    let item = { nome, cognome, mail, profilo, orarioGiornaliero };
    try {
      await fetch(props.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div className="add-user">
      <h2>Aggiungi utente</h2>
      <form>
        <div className="add-user-form">
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
        <button className="addBtn" type="submit" onClick={addUser}>
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default AddUser;
