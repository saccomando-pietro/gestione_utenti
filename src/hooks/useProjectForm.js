import { useState } from "react";
export const useProjectForm = (user = {}) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [state, setState] = useState("");

  return {
    code: {
      type: "text",
      name: "code",
      id: "code",
      placeholder: "Codice",
      value: code,
      onChange: (e) => setCode(e.target.value),
    },
    name: {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Nome progetto",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    description: {
      type: "text",
      name: "description",
      id: "description",
      placeholder: "Descrizione progetto",
      value: description,
      onChange: (e) => setDescription(e.target.value),
    },
    startDate: {
      type: "date",
      name: "start_date",
      id: "startDate",
      placeholder: "Data di inizio",
      value: startDate,
      onChange: (e) => setStartDate(e.target.value),
    },
    duration: {
      type: "text",
      name: "duration",
      id: "duration",
      placeholder: "Durata progetto",
      value: duration,
      onChange: (e) => setDuration(e.target.value),
    },
    manager: {
      type: "text",
      name: "manager",
      id: "manager",
      placeholder: "Responsabile progetto",
      value: manager,
      onChange: (e) => setManager(e.target.value),
    },
    state: {
      type: "text",
      name: "state",
      id: "state",
      placeholder: "Stato progetto",
      value: state,
      onChange: (e) => setState(e.target.value),
    },

    setCode,
    setName,
    setDescription,
    setStartDate,
    setDuration,
    setManager,
    setState
  }
};
