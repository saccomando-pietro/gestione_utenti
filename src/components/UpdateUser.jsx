import { useEffect, useState } from "react";
const UpdateUser = (props) => {
  const [nome, setNome] = useState(props.user.nome);
  const [cognome, setCognome] = useState(props.user.cognome);
  const [mail, setMail] = useState(props.user.mail);
  const [profilo, setProfilo] = useState(props.user.profilo);
  const [orarioGiornaliero, setOrario] = useState(props.user.orarioGiornaliero);
  

  useEffect(() => {
    if (props.user) {
      setNome(props.user.nome || "");
      setCognome(props.user.cognome || "");
      setMail(props.user.mail || "");
      setProfilo(props.user.profilo || "");
      setOrario(props.user.orarioGiornaliero || "");
    }
  }, [props.user]);

  const updateUser = async (event) => {
    event.preventDefault();

    let item = { nome, cognome, mail, profilo, orarioGiornaliero };

    try {
      await fetch(`${props.url}/${props.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.error("Errore: ", error);
    }
    props.getUsers();
  };
  return (
    <div className="update-user">
      <h2>Aggiorna utente</h2>
      <form onSubmit={updateUser}>
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
          type="mail"
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
        <button type="submit">Aggiorna</button>
      </form>
    </div>
  );
};

export default UpdateUser;
