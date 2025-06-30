
import { useUserForm } from "../hooks/useUserForm";
const AddUser = ({url, getUsers}) => {
  const {nome} = useUserForm();
  const {cognome} = useUserForm();
  const {mail} = useUserForm();
  const {profilo} = useUserForm();
  const {orarioGiornaliero} = useUserForm();

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
    <div className="user-form">
      <h2>Aggiungi utente</h2>
      <form onSubmit={addUser}>
        <div className="input-user-form">
          <input
            {...nome}
          />
          <input
            {...cognome}
          />
          <input
          {...mail}
          />
          <select
            {...profilo}
          >
            <option value="" disabled selected>
              -- Seleziona un profilo --
            </option>
            <option value="PM">Project Manager</option>
            <option value="JD">Junior Developer</option>
            <option value="RT">Responsabile Tecnico</option>
          </select>
          <input
            {...orarioGiornaliero}
          />
        </div>
        <button className="formBtn" type="submit">
          Aggiungi
        </button>
      </form>
    </div>
  );
};

export default AddUser;
