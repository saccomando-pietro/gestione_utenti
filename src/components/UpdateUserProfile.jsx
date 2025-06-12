const UpdateUserProfile = () => {
  return (
    <div className="add-user">
      <h2>Aggiorna profile utente</h2>
      <select name="profile" id="profile" required>
        <option value="" disabled selected>
          -- Seleziona un profilo --
        </option>
        <option value="PM">Project Manager</option>
        <option value="JD">Junior Developer</option>
        <option value="RT">Responsabile Tecnico</option>
      </select>
      <button type="submit">Aggiorna profile</button>
    </div>
  );
};

export default UpdateUserProfile;
