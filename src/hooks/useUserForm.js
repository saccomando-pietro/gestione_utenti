import { useState } from "react";
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
    cognome: {
      type: "text",
      name: "cognome",
      id: "cognome",
      placeholder: "Cognome",
      value: cognome,
      onChange: (e) => setCognome(e.target.value),
    },
    mail: {
      type: "email",
      name: "mail",
      id: "mail",
      placeholder: "Mail",
      value: mail,
      onChange: (e) => setMail(e.target.value),
    },
    profilo: {
      type: "text",
      name: "profilo",
      id: "profilo",
      placeholder: "Profilo",
      value: profilo,
      onChange: (e) => setProfilo(e.target.value),
    },
    orarioGiornaliero: {
      type: "text",
      name: "orarioGiornaliero",
      id: "orarioGiornaliero",
      placeholder: "Orario giornaliero",
      value: orarioGiornaliero,
      onChange: (e) => setOrario(e.target.value),
    }
  };
};
