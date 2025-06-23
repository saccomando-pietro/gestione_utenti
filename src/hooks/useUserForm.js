import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const useUserForm = (user = {}) => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [mail, setMail] = useState("");
  const [profilo, setProfilo] = useState("");
  const [orarioGiornaliero, setOrario] = useState("");

  return {
    nome: {
      type: "text",
      name: "nome",
      id: "nome",
      placeholder: "Nome",
      value: nome,
      onChange: (e) => setNome(e.target.value),
    },
  };
};
