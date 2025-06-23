
import { useUserForm } from "../hooks/useUserForm";
const AddUser = ({url, getUsers}) => {
  const {nome} = useUserForm();

  const reset = () => {
      setNome("")
      setCognome("")
      setMail("")
      setProfilo("")
      setOrario("")
  }

  const addUser = async (event) => {
    event.preventDefault();
    let item = { nome, cognome, mail, profilo, orarioGiornaliero };
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
    <div className="add-user">
      <h2>Aggiungi utente</h2>
      <form onSubmit={addUser}>
        <div className="add-user-form">
          <input
            {...nome}
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
        <button className="addBtn" type="submit">
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default AddUser;
