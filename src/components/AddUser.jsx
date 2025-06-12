const AddUser = () => {
  return (
    <div className="add-user">
      <h2>Aggiungi utente</h2>
      <input type="text" name="nome" id="nome" placeholder="nome" />
      <input type="text" name="cognome" id="cognome" placeholder="cognome" />
      <input type="email" name="email" id="email" placeholder="email" />
      <select name="profile" id="profile" required>
        <option value="" disabled selected>
          -- Seleziona un profilo --
        </option>
        <option value="PM">Project Manager</option>
        <option value="JD">Junior Developer</option>
        <option value="RT">Responsabile Tecnico</option>
      </select>
      <button type="submit">Aggiungi</button>
    </div>
  );
};

export default AddUser;
